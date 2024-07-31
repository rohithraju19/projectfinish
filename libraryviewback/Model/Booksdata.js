const mongoose=require('mongoose')
const BookSchema=mongoose.Schema({
    image:String,
    title:String,
    rating:Number,
    ISBN:String,
    author:String,
    likecount:Number,
    rented:Boolean,
    returndate:String,
    comments:String
})
const BooksData=mongoose.model('books',BookSchema)
module.exports=BooksData
