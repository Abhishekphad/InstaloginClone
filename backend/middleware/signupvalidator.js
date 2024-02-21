exports.signupvalidator=(req,res,next)=>{
    const{name,email,password,bio,username}=req.body;

    if(req.body && name && email && password && bio && username){
        next()
    }else{
        res.Status(400).send({msg:"All inputs are required....!"})
    }
}