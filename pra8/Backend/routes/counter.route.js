import express from 'express';
import fs from "fs";

const router= express.Router();
const COUNTER_FILE='./counter.json';

const readcount=()=>{
    if(!fs.existsSync(COUNTER_FILE)) return 0;
    return JSON.parse(fs.readFileSync(COUNTER_FILE,'utf-8')).count;
}

const writeCount= (count)=>{
    fs.writeFileSync(COUNTER_FILE,JSON.stringify({count}));

}

router.get('/',(req,res)=>{
    const count=readcount();
    res.json({count}); 
})

router.post('/',(req,res)=>{
    const {count}= req.body;
    writeCount(count);
    res.json({success:true});

})

export default router;