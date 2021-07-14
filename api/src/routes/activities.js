const {Router} = require('express');
const router = Router();
const {Country, Activity} = require("../db");



router.post('/test', async (req, res)=>{
    const {name, difficulty, duration, season, country}= req.body;
    console.log(name, difficulty, duration, season);
    const createdActivity = await Activity.findOrCreate({
        where: {
        name, 
        difficulty, 
        duration, 
        season
        }
    });
    console.log(createdActivity)
    createdActivity ? res.json(createdActivity) : res.sendStatus(400)

    await createdActivity.setCountries(country);
    const find= await Activity.findOne({
       where:{
        nombre
       },
       include:{
         model:Country,
         attributes:['id'],
         through: {
            attributes: [],
          },
       }
    })
   return res.json({Mensaje:'Se ha agregado con éxito la actividad', actividadCreada:find});
   
   
});

module.exports = router;