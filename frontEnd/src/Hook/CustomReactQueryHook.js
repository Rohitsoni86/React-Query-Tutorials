// React Query
import { useQuery ,useMutation,useQueryClient } from 'react-query'
import axios from 'axios';

const fetchStudnetData = () => {
    return axios.get('http://localhost:3000/api/usersdata');
  }

  
export const useStudentData = (onSuccess,onError) => {
    console.log("Fetching Student Details !!");
    return (
        useQuery("studnet-details",fetchStudnetData,{
            onSuccess,
            onError,
        })
    )
}


// MUTATION


const submitStudentData = async (userNewData) => {
    return axios.post("http://localhost:3000/api/updateusersdata",userNewData)
}


export const useSubmitFormData = (onSuccessSubFormData,onErrorSubFormData) => {

    const queryClient = useQueryClient()
    return(
           useMutation(submitStudentData,{
            onSuccess:() => {
                onSuccessSubFormData 
                queryClient.invalidateQueries("studnet-details")
            },
            onError:onErrorSubFormData
           })
    )
}