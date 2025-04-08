import app from './src/app.js'
import dotenv from 'dotenv'
dotenv.config();


app.listen(3000, ()=>{
    console.log('server is listening on http://localhost:3000')
})