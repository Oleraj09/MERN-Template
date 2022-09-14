const express = require('express');
const dotEnv = require('dotenv');
const app = express();
app.get('/',(req,res)=>{
    res.send('Server is Running')
})
dotEnv.config({
    path : 'backend/config/config.env'
})
const PORT = process.env.PORT || 5000
app.listen(PORT,(error)=>{
    if(!error){
        console.log('Server is Running in 5000');
    }
})
