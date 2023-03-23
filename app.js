require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const app=express();
const mesModel=require('./Message.js');
const PORT=process.env.PORT || 4500;
const cors=require('cors');
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log('Database connected');
    app.listen(PORT, ()=>{
        console.log('server is listening');
    });
}).catch((err)=>{
    console.log(err);
});
app.post('/', async (req, res)=>{
    const {name, email, message}=req.body;
    const result=await mesModel.create({
        name,email,message
    });
    if (result)
    {
        console.log(result);
        return res.json({message: "message sent succesfully"});
    }else{
        return res.json({message: "error"});
    }
});