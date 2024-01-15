import React, { useState, useEffect } from 'react'

import { useStudentData, useSubmitFormData } from '../../Hook/CustomReactQueryHook';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchStudnetAddress = async (student) => {
  return axios.get(`http://localhost:3000/api/usersdata/address/${student}`)
}

export default function ReactQueryFetch() {

  // React Query 1

  const onSuccessFetch = (data) => {
    console.log("Fetched On Success FF !!");
    console.log(data.data);
  }

  const onErrorFetch = (error) => {
    console.log("Fetched On Error !!");
    console.log(error);
  }

  const { isLoading, data, isError, error, refetch } = useStudentData(onSuccessFetch, onErrorFetch)

  if (error) {
    console.log(error.message)
  }


  // React Query 2

  const onSuccessFetchAddress = (addressData) => {
    console.log("Fetched On Address Success FF !!");
    console.log(addressData.data);
  }

  const onErrorFetchAddress = (addressFetErrMessage) => {
    console.log("Fetched On Address Error !!");
    console.log(addressFetErrMessage);
  }


  const { isLoading: addressLoading, data: addressData, isError: addressFetchErr, error: addressFetErrMessage } = useQuery(
    ["studnet-address", "59761c233d8d0f92a6b0570d"],
    () => fetchStudnetAddress("59761c233d8d0f92a6b0570d"), {
    enabled: !!data,
    onSuccess: onSuccessFetchAddress,
    onError: onErrorFetchAddress
  }
  )


  //Form Data Submit 

 // Reat Query Mutation

  const onSuccessSubFormData = () => {
    console.log("Submited Data !");
  }
  const onErrorSubFormData = () => {
    console.log("Cannot Submit Form Data !");
  }
  
  const {
    mutate:addFormData,
    isLoading : formSubmitDataState,
    isError :formSubmitDataErrorState,
    error:formSubmitDataErrorMsg} = useSubmitFormData(onSuccessSubFormData,onErrorSubFormData)

  const[formData,setFormData] = useState( {
    "Email":"",
    "Password":""
  })

  if(formSubmitDataState){
    console.log("Posting Data !!");
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    addFormData(formData)

  }




  return (
    <>
      <div className='h-screen w-screen flex flex-col justify-center items-center bg-black'>
        <h2 className='text-2xl text-white'>React Query Fetch ...</h2>


        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label for="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
            <input
            value={formData.Email}
            onChange={(e) => setFormData({...formData,Email:e.target.value})}
             type="email" id="email" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
          </div>
          <div className="mb-5">
            <label for="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Your password</label>
            <input 
              value={formData.Password}
            onChange={(e) => setFormData({...formData,Password:e.target.value})}
            type="password" id="password" className="bg-whit border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>



        {
          isLoading ? (<h2 className='text-2xl text-white'> Fetching Data ...</h2>) :
            isError ? (<h2 className='text-2xl text-white'> Something Went Wrong ...</h2>) : (data?.data.map((elem, index) => {
              return (
                <>
                  <div key={elem.id}>
                    <h2 className='text-2xl text-white'>{elem.name}</h2>
                  </div>

                </>
              )
            }))
        }

        <button
          onClick={refetch}
          type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Fetch Data</button>

      </div>
    </>
  )
}
