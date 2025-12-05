import express from 'express';
const app= express();
app.get('/users', (req, res) => {
    res.end("hello this is from backend");
})
app.listen(7007,()=>{
    console.log("server running at port 7007")
});