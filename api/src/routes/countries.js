const {Router} = require("express");
const router = Router();
const {Country, Activity} = require("../db");
const axios = require('axios');
const { Op } = require("sequelize");

router.get('/countries', async (req, res)=>{
    const {name, sort, pag } = req.query;
    const bd = await Country.findAll({
        limit:10,
        offset: sort
    });
    
    if(name){
        const country = await Country.findAll({
            where: {
                 name:{ [Op.iLike]: `%${name}%` } 
                    }
        })
      
        return country ? res.json(country) : res.sendStatus(404)
    }
    else {
        const countries = await axios.get('https://restcountries.eu/rest/v2/all');
        countries.data.forEach(async (country) => {
            //try
                await Country.findOrCreate({
                    where: {
                        id: country.alpha3Code,
                        name: country.name,
                        image: country.flag,
                        continent: country.region,
                        capital: country.capital,
                        subregion: country.subregion,
                        area: country.area,
                        population: country.population
                    }
                });
            //catch
                    })
                    return bd ? res.json(bd) : res.sendStatus(404)     
    }
    
});

router.get('/countries/:id', async (req, res)=>{
   const { id } = req.params;
   let idCountry = id.toUpperCase();
   const country = await Country.findByPk(idCountry, {include: Activity});
    country ? res.json(country) : res.sendStatus(404);
});



module.exports = router;