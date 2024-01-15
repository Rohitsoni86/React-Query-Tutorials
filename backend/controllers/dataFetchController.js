const studentData = require("../data/studentData.json")

const getStudentDetails = async (req,res,next) => {
    console.log(studentData);

    try {
        const studentDetails = studentData
        setTimeout( () => {
            res.status(200).send(studentDetails);
        },2000 )
       
    } catch (error) {
        console.log(error);
        res
        .status(500)
        .send("You are Not Authorised To Access Data !!");
    }
    finally{
        console.log("Requested Student Data !!");
    }

}


const getStudentAddress= async (req,res,next) => {
    console.log(studentData);

    const requestedStudentAddress = req.params.id

    try {
        const studentDetails = studentData
   
        const filteredStData = studentDetails.find( (elem,index) => {
            return elem.id === requestedStudentAddress 
        }  )

        setTimeout( () => {
            res.status(200).send(filteredStData.address);
        },2000 )
       
    } catch (error) {
        console.log(error);
        res
        .status(500)
        .send("You are Not Authorised To Access Data !!");
    }
    finally{
        console.log("Requested Student Data !!");
    }

}



const updateStudentData = async (req,res,next) => {
     
    console.log(req.body);

    res.status(200).send(req.body);
}

  

module.exports = {
    getStudentDetails,getStudentAddress,updateStudentData
  };
  