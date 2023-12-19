import express from "express";

const app = express();
const port = 3002;

const users = [
    {
        id: 1,name: "Nana", email: "naan@mail.com"
    },
    {
        id:2 ,name: "Oana", email: "Oan@mail.com"
    }
]

app.use(express.json());

app.get('/user' , (req,res) => {
    res.send(users)
})

app.post('/user', (req,res) => {
    users.push({id: users.length + 1 ,...req.body})
    res.send({message: "Data added successfully!"})
    console.log("==>" , req.body);
})

app.delete('/user/:id', (req,res) => {
    let index = users.findIndex(val => val.id === Number(req.params.id));
    if(index !== -1){
        users.splice(index,1)
    } 
    res.send({message: "User Deleted successfully!"})
    
})

app.put('/user/:id',(req, res) => {
    let index = users.findIndex(val => val.id === Number(req.params.id));
    if(index !== -1){
        users.splice(index,1 , {id:Number(req.params.id) , ...req.body})
    }
    res.send({message: "Updated Successfully!"})
})

app.listen(port, (req,res) => console.log('Server started'));