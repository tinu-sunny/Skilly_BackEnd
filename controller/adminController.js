const contact =require('../models/contactModel')
const carrerfield =require('../models/carrerfieldModel')

exports.contactViewAdmin =async(req,res)=>{
    try{
        const contactData = await contact.find()
        res.status(200).json({message:"contact user are here " ,contactData})
    }
    catch(err){
        console.log(err);
        
    }
}


exports.carrerfieldAdd = async (req, res) => {
 

  

  try {
     const { coursename, avgsalary, description,category } = req.body;
      const thumbnail = req.file.filename
       console.log(thumbnail);
        const courseExisting = await carrerfield.findOne({coursename})
        console.log(courseExisting);
        if(courseExisting){
            res.status(400).json("Carrefield Existing")
        }
        else{
            
            const carrefieldnew = new carrerfield({coursename, avgsalary, description,category,thumbnail})
            await carrefieldnew.save()
            res.status(200).json({message:" Carrerfield Saved",carrefieldnew })
        }
    // res.send('inside the function');
  } catch (err) {
    console.log(err);
    
    res.send("error",err);
  }
};

