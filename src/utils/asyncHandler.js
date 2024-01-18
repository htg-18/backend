const asyncHandler=(fn)=>async(req,res,next)=>{
   try{
       await fn(req,res,next);
   }catch(err){
       res.status(err.status || 500).json({
        success: false,
        message:"Some error occurred",
       })
   }
}

export {asyncHandler}