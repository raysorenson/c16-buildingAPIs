const express = require('express');
let router = express.Router();

router.get('/:id', function (req, res) {
// get some data
res.json(data);
});

router.post('/', function (req, res) {
    //save resource
    res.json(id); //or sendStatus(200)
    });

    router.put('/:id', function (req, res) {
        //update resource
        res.sendStatus(200);
        });

        router.delete('/:id', function (req, res) {
            //delete resource
            res.sendStatus(200);
            });
            
        
    
module.exports = router;