const express = require('express');
const path = require('path')

const app = express();

// const publicPath = path.resolve(__dirname, './public');
app.use(express.static('./public'));

app.listen(3000, () =>{
  console.log ('Servidor corriendo en el puesto 3000')
});

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})
