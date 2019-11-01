const express = require('express');
const router = express.Router();

router.get("/test",(req,res)=>res.json({msg:"Hi test route card"}));

module.exports = router;