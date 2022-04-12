const {Motor,Author} =require("../model/model");

const motorController={
    //ADD MOTOR
    addAMotor:async(req,res)=>{
        try{
            const newMotor=new Motor(req.body);
            const savedMotor=await newMotor.save();
            if(req.body.Author) {
                const author=Author.findById(req.body.Author);
                await author.updateOne({$push:{Motors:savedMotor._id}});
            }
            res.status(200).json(savedMotor);
        }catch(err) {
            res.status(500).json(err);
        }

    },
    //GET ALL MOTOR
    getAllMotors:async(req,res)=>{
        try{
            const allMotors=await Motor.find();
            res.status(200).json(allMotors);
        }catch(err){
            res.status(500).json(err);
        }
    },
    //GET A MOTOR
    getAMotor:async(req,res)=>{
        try{
            const motor=await Motor.findById(req.params.id).populate('Author');
            res.status(200).json(motor);
        }catch(err){
            res.status(500).json(err);
        }
    },
    //UPDATE A MOTOR
    updateMotor:async(req,res)=>{
        try{
            const motor=await Motor.findById(req.params.id);
            await motor.updateOne({$set:req.body});
            res.status(200).json("update thành con mẹ nó công");
        }catch(err){
            res.status(500).json(err);
        }
    },
    //DELETE A MOTOR
    deleteMotor:async(req,res)=>{
        try{
            await Author.updateMany(
                {Motors:req.params.id},
                {$pull:{Motors:req.params.id}
            });
            await Motor.findByIdAndDelete(req.params.id);
            res.status(200).json("delete thành con mẹ nó công");
        }catch(err){
            res.status(500).json(err);
        }
    }

};
module.exports = motorController;