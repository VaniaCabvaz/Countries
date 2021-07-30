const {Router} = require('express');
const router = Router();
const {Country, Activity} = require("../db");
const Sequelize  = require('sequelize');
const { Op } = require("sequelize");


router.post('/activity', async (req, res)=>{
   const {name, difficulty, duration, season, country}= req.body;
   console.log(name, difficulty, duration, season, country);
    try{
       const createdActivity = await Activity.create({
         name,
         difficulty,
         duration,
         season,
   });
   await createdActivity.addCountry(country);
   return res.send("agregado");

    } catch(err){
       return res.sendStatus(400);
    }
    
 
   });

   router.get('/activity', async (req, res)=>{
      const {name, all} = req.query;
      if(all){
         const activity = await Activity.findAll( {include: Country} );
         return activity ? res.json(activity) : res.sendStatus(400);
      }
      else {
         const activity = await Activity.findAll(
            {
               where: {
                  name:{ [Op.iLike]: `%${name}%` } 
                      }
                      
            },
            {include: Country}
         );
         return activity ? res.json(activity) : res.sendStatus(400);
      }
      
   })




module.exports = router;