import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true, //delete blank
    },
    content: {
        date : {
            type : String,
            required : true,
        },
        
        comment : {
            type : String
    
        },
        status : {
            type : Number
    
        }
    },
    author : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User_model"
    } 
})

// "title": "TEST POST",
// "content": {
//     "date": "2023-4-05",
//     "comment": "TEST COMMENT",
//     "status": 2
// } 


let Post_model = mongoose.models.posts || mongoose.model("Post_model", schema);
export default Post_model;