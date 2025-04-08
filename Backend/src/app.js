import express from 'express';
import aiRoutes from './routes/ai.routes.js'
import cors from 'cors'
// it will create a server for us

const app = express();

app.use(cors());

app.use(express.json())


app.get('/', (req, res)=>{
    res.send("Hello world");
})

app.use("/ai", aiRoutes);

export default app;