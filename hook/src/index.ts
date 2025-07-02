import express from "express";

const app = express();

//https://hooks.zapier.com/hooks/catch/23593399/ubwh5qe/

app.post('/hooks/catch/:userId/:zapId', (req, res) => {
    const userId = req.params.userId;    
    const zapId = req.params.zapId;
    
    res.json({message: 'Hello, World'})
})