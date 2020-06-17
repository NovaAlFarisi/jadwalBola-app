const express = require('express');
const router = express.Router();
const response = require('./utils/response');

const {loadSchedule} = require('./utils/jadwalBola');

router.get('/:liga', async (req,res)=>{
    var liga = req.params.liga;
    var eventSchedule = await loadSchedule((liga)? liga : 'liga-inggris').then(result=> {
        return result
    }).catch(err=>{
        return response.error(err, res);
    }); 
    response.ok(eventSchedule, res);
})

module.exports = router;