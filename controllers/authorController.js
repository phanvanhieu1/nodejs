const {Author,Motor} =require("../model/model");
const authorController={
    //ADD AUTHOR
    addAuthor:async(req,res)=>{
        try{
            const newAuthor=new Author(req.body);
            const savedAuthor=await newAuthor.save();
            res.status(200).json(savedAuthor);
        }catch(err) {
            res.status(500).json(err);
        }
    },
    //GET ALL AUTHOR
    getallAuthor:async(req,res)=>{
        try{
            const authors=await Author.find();
            res.status(200).json(authors);
        }catch(err){
            res.status(500).json(err);
        }
    },
    //GET AN AUTHOR
    getAnAuthor:async(req,res)=>{
        try{
            const author=await Author.findById(req.params.id).populate('Motors');
            res.status(200).json(author);
        }catch(err){
            res.status(500).json(err);
        }
    },
    //UPDATE AN AUTHOR
    updateAuthor:async(req,res)=>{
        try{
            const author=await Author.findById(req.params.id);
            await author.updateOne({$set:req.body});
            res.status(200).json("update thành con mẹ nó công");
        }catch(err){
            res.status(500).json(err);
        }
    },
    //DELETE AN AUTHOR
    deleteAuthor:async(req,res)=>{
        try{
            await Motor.updateMany(
                {Author:req.params.id},
                {Author:null}
                );
            await Author.findByIdAndDelete(req.params.id);
            res.status(200).json("delete thành con mẹ nó công");
        }catch(err){
            res.status(500).json(err);
        }
    }
};


module.exports=authorController;