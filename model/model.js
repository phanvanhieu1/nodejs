const mongoose=require('mongoose');

const authorSchema=new mongoose.Schema({
    Nameauthor:{ //tên tác giả
        type:String,
    },
    Year:{//năm xuất bản
        type:Number,
    },
    Motors:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Motor'
        }
    ],
});

const motorSchema=new mongoose.Schema({
    Namemotor:{ //tên xe
        type:String,
        required:true
    },
    Image:{
        data:Buffer,
        contentType:String
    },
    Describe:{// mo ta
        type:String,
    },
    Genres:{ // the loai
        type:[String],
    },
    Author:{ // tac gia
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
    }
});

let Motor=mongoose.model('Motor',motorSchema);
let Author=mongoose.model('Author',authorSchema);

    module.exports={Motor,Author};