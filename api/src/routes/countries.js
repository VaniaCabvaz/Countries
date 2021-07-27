const {Router} = require("express");
const router = Router();
const {Country, Activity} = require("../db");
const axios = require('axios');
const { Op, DataTypes } = require("sequelize");

router.get('/countries', async (req, res)=>{
    const {name, continent, order, all, orders } = req.query;
    
    const DataBase = await Country.findAll({
        // limit:10,
        // offset: offset
    });

    if(all){
        const DataBase = await Country.findAll({include: Activity});
        return DataBase ? res.json(DataBase) : res.sendStatus(400);
    }
    
    if(name){
        const country = await Country.findAll({
            where: {
                 name:{ [Op.iLike]: `%${name}%` } 
                    }
        })
      
        return country ? res.json(country) : res.sendStatus(404)
    }

    // if (continent ){
    //     const country = await Country.findAll({
    //         where: {
    //             continent:{ [Op.iLike]: `%${continent}%` } 
    //                 }
                    
    //     })
    //     return country ? res.json(country) : res.sendStatus(404)
    // }
    
    console.log(continent, orders)
    if (continent && orders === "null" ){
        
            var country = await Country.findAll({
                where: {
                    continent:{ [Op.iLike]: `%${continent}%` } 
                        }           
            })
            return country ? res.json(country) : res.sendStatus(404)
        }
        
        else if(continent && orders){
            if(orders === "A-Z"){
                var country = await Country.findAll({
                    where: {
                        continent:{ [Op.iLike]: `%${continent}%` } 
                            },
                            order: [['name', 'ASC']]
                            
                })
                return country ? res.json(country) : res.sendStatus(404)
            }
            if(orders === "Z-A"){
                var country = await Country.findAll({
                    where: {
                        continent:{ [Op.iLike]: `%${continent}%` } 
                            },
                            order: [['name', 'DESC']]
                            
                })
                return country ? res.json(country) : res.sendStatus(404)
            }
            if(orders === "PobA"){
                var country = await Country.findAll({
                    where: {
                        continent:{ [Op.iLike]: `%${continent}%` } 
                            },
                            order: [['population', 'ASC']]
                            
                })
                return country ? res.json(country) : res.sendStatus(404)
            }
            if(orders === "PobD"){
                var country = await Country.findAll({
                    where: {
                        continent:{ [Op.iLike]: `%${continent}%` } 
                            },
                            order: [['population', 'DESC']]
                            
                })
                return country ? res.json(country) : res.sendStatus(404)
            }

        

        }
            
        
        
    

    if(order){
        if(order === "A-Z"){
            const az= await Country.findAll({
                order: [['name', 'ASC']]
               
            })
            return az ? res.json(az) : res.sendStatus(400)
        }
        if(order === "Z-A"){
            const za= await Country.findAll({
                order: [['name', 'DESC']]
                
            })
            return za ? res.json(za) : res.sendStatus(400)
        }
        if(order === "PobA"){
            const pa= await Country.findAll({
                order: [['population', 'ASC']]
                
            })
            return pa ? res.json(pa) : res.sendStatus(400)
        }
        if(order === "PobD"){
            const pd= await Country.findAll({
                order: [['population', 'DESC']]
                
            })
            return pd ? res.json(pd) : res.sendStatus(400)
        }
        

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
                    return DataBase ? res.json(DataBase) : res.sendStatus(404)     
    }
    
});


router.get('/countries/:id', async (req, res)=>{
   const { id } = req.params;
   let idCountry = id.toUpperCase();
   const country = await Country.findByPk(idCountry, {include: Activity});
    country ? res.json(country) : res.sendStatus(404);
});







module.exports = router;