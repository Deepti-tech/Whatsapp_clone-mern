// npm install mongoose --save
import pkg from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
import Pusher from 'pusher';
import Cors from 'cors';
//app congif
const app = pkg()
const port = process.env.PORT || 9000
// const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "1550645",
    key: "1559e7dc130dab879729",
    secret: "a6e3d4c9d429cd73e003",
    cluster: "ap2",
    useTLS: true
  });

//middlewares
app.use(pkg.json())
app.use(Cors())
//DB config
const conn_url = 'mongodb+srv://Deepti:Kingfisher@cluster0.dk7bzov.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(conn_url,{}).then(()=>{
    console.log('Db connceted successfully')
    }).catch((err)=>{console.log('err',err.message)});
mongoose.set("strictQuery", false);

const db = mongoose.connection
db.once('open',()=>{
    console.log('db connected')
    const msgCollection = db.collection("messagecontents")
    const changeStream = msgCollection.watch()
    changeStream.on('change', (change)=> {
        console.log("changed")
        if (change.operationType === 'insert'){
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted',{
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            })
        }else{
            console.log('Error triggering Pusher')
        }
    })
})

//api routes
app.get('/',(req,res)=>res.status(200).send('hello world'))

app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body
    Messages.create(dbMessage, (err, data) => {
        if (err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

//listener
app.listen(port,()=>console.log(`Listening on local host:${port}`))