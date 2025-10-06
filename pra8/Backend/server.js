import express from 'express';
import cors from 'cors';
import countRoutes from "./routes/counter.route.js";

const app=express();
const PORT=5000;

app.use(cors());
app.use(express.json());

app.use('/api/counter', countRoutes);

app.listen(PORT,()=>{
     console.log(`Server running on http://localhost:${PORT}`);
})