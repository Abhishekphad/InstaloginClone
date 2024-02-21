const express = require('express');
const app = express();
const router = require('./routes/route')

app.use(express.json());

app.use('/api/auth/', router);

app.use('/',(req,res)=>{
    res.status(200).json({data: 'JWTauth server'})
})

module.exports=app;