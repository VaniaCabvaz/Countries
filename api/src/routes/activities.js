const {Router} = require('express');
const router = Router();
const {Country, Activity} = require("../db");
const Sequelize  = require('sequelize');


router.post('/test', async (req, res)=>{
    const {name, difficulty, duration, season, country}= req.body;
    console.log(name, difficulty, duration, season, country);
      Activity.create({
            name,
            difficulty,
            duration,
            season,
      }).then(async (activitySave) => {
          await activitySave.addCountry(country); 
          return activitySave;
        })
        .then(async (activitySave) => {
          const result = await Activity.findOne({
            where: { id: activitySave.id },
            include: [Country],
          });
          return result;
        })
        .then((activitySave) => res.send(activitySave));
    }
);


router.post('/test1', async (req, res)=>{
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



module.exports = router;