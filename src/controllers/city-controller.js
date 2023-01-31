const {CityService} = require('../services/index');

const cityService = new CityService();

const create = async (req,res) =>{
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : "Successfully created the city",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to create the city",
            err : error
        })
    }
}

const destroy = async (req,res) => {
    try {
        const response = await cityService.deleteCity(req.parmas.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : "Successfully deleted the city",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to delete the city",
            err : error
        })
    }
}

/*
 GET -> /get/:id
*/
const get = async (req,res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : response,
            sucess : true,
            message : "successfully fetched the city",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to fetch the city",
            err : error
        })
    }
}

/*
update : /update/:id

id -> req.params.id
data -> req.body

*/
const update = async (req,res) => {
    try {
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.json(200).json({
            data : response,
            success : true,
            message : "Successfully updated the city",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to update the city",
            err : error
        })
    }
}

module.exports = {
    create,
    destroy,
    update,
    get
}