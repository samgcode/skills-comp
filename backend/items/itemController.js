// const queries = require('./itemsRepositoryPG.js');
const queries = require('./itemsRepositoryMO.js');

async function getItems(req, res, next) {
    try {
        const data = await queries.getItems();
        return res.status(200).json(data);
    } catch(err) {
        console.log(err);
        next(new Error('Error occured'));
    }
}

async function getItem(req, res, next) {
    try {
        const id = req.params.id;
        const data = await queries.getItem(id);
        return res.status(200).json(data);
    } catch(err) {
        console.log(err);
        next(new Error('Error occured'));
    }
}

module.exports = {
    getItems,
    getItem
}