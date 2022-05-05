const express = require('express');
const path = require('path');
const PORT = process.env.PORt||5000;

express()
.use(express.static(path.join(__dirname,'dist')))
.get('/',(req,res)=>res.render('dis/index'))
.listen(PORT,()=>console.log(`Listening on ${PORT}`));