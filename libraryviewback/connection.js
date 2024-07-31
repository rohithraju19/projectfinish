const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://vaishnav:vaishnav123@cluster0.clzscyr.mongodb.net/booksdb?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('DB is connected')
}).catch((error)=>{
    console.log('Error in connection')
})