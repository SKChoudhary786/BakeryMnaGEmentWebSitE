const mongoose=require("mongoose");


mongoose.connect("mongodb://localhost:27017/nidhisdb",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex:true
  }
).then(()=>{
    console.log(`connection sucess`);
}).catch((e)=>{
   console.log(`no connection`);
})