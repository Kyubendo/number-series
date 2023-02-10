import express from 'express';
import cors from 'cors' 

import mainRoutes from "./routes/main";
const app = express();


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', mainRoutes)

app.listen(3000, () => {
    console.log('App is listening on port 30011110');
  });