const router = require("express").Router();
const Data = require("../models/data.model");
const mongoose = require("mongoose");

//Retreives all the data from th collection
router.get('/details',async (req, res)=> {
    Data.find(function(err, datas) {
        if (err) {
            console.log(err);
        } else {
            res.json(datas);
        }
    });
});
// This path extension is used to retrieve a data item by providing an ID. 
router.get('/:id',async (req, res) =>{
    let id = req.params.id;
    Data.findById(id, function(err, datas) {
        res.json(datas);
    });
});

// add new todo items by sending a HTTP post request (/create)
router.post('/create',async (req, res)=> {
    let { age, displayName,hours} = req.body;
    console.log("Tisha");
    const newData = new Data({
        age,
        displayName,
        hours
    
      });
      const savedData = await newData.save();
      res.json(savedData);
});
// This route is used to update an existing data item 

// router.post('/update/:id',async (req,res)=>
// {
//     Data.findById(req.params.id,function(err,data)
//     {
//         if(!data)
//         res.status(404).send("Data is not found");
//         else
//         const newData=new Data({
//            data_email:req.body.data_email,
//            data_displayName:req.body.data_displayName
//         });
//         const savedData=await newData.save();
//         res.json(savedData);
//     });
// })


router.post('/update/:id',async (req, res)=> {
    Data.findById(req.params.id, function(err, data) {
        if (!data)
            res.status(404).send("data is not found");
        else
        {
            console.log("data from form");
            console.log(req.body);
            data.age = req.body.age;
            data.displayName = req.body.displayName;
            data.hours=req.body.hours;
             

             data.save().then(data => {
                res.json({'status200':"Data updated!"});
                console.log("tisha");
                console.log(data.email);
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
       
        }
    });
});

// router.delete('/delete/:id',async (req,res)=>{

//         Data.findByIdAndRemove({ _id: req.params.id }, function (err, data) {
//         if (err) res.json(err);
//         else res.json({'status200':'Employee Deleted Successfully'});
//         });
//         });

module.exports = router;