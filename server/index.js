// requiring dependencies
const express = require('express');

// requirind database
const db=require('./config/mongoose');

// initializing port
const port= process.env.port || 8000;

// initializing app
const app=express();

// firing up server
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
