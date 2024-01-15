import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function NormalReactQ() {

  const [studentData, setStudentData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)


  useEffect(() => {
    ; (
      async () => {
        try {
          setIsLoading(true)
          const getPostsData = await axios.get('http://localhost:3000/api/usersdata');
          console.log(getPostsData.data);
          setStudentData(getPostsData.data)
          setIsLoading(false)
          setIsError(false)
        } catch (error) {
          setIsError(true)
          setIsLoading(false)
          console.error(error);
        }
      }
    )()

  }, [])

  return (
    <>
      <div className='h-screen w-screen flex flex-col justify-center items-center bg-black'>
        <h2 className='text-2xl text-white'>Axios Fetch ...</h2>
        {
          isLoading ? (<h2 className='text-2xl text-white'> Fetching Data ...</h2>) :
            isError ? (<h2 className='text-2xl text-white'> Something Went Wrong ...</h2>) : (studentData.map((elem, index) => {
              return (
                <>
                <div key={elem.id}>
                <h2 className='text-2xl text-white'>{elem.name}</h2>
                </div>
                  
                </>
              )
            }))
        }

      </div>
    </>
  )
}
