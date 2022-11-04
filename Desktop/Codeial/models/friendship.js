const mongoose=require('mongoose');

const friendshipScherma = new mongoose.Schema({
    // the user who sent this request 
    from_user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    // the user who received the request 
    to_user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }

},{
    timestamps:true
});


const Frienship = mongoose.model('Frienship', friendshipScherma);

module.exports= friendship;