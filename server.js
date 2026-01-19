import express from 'express';
import sum from './sum.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})


app.get("/", async(req, res) => {
    res.json({
        message: "welcome to backend api"
    })
})


app.get("/home", async (req, res) =>{
    res.json({message: "welcome to home page"})
} )


app.get("/getSum/:a/:b", async(req, res)=> {
    const {a, b} = req.params;
    res.json({
        ans: sum(parseInt(a), parseInt(b))
    })
})