const loginvalidator=(req,res,next)=>{
    const{username,password}=req.body;
    if(req.body && username && password){
        next()
    }else{
        res.status(400).send({msg:"All input fields are required..........!"})
    }
}