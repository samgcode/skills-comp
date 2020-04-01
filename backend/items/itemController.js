// const queries = require('./itemsRepositoryPG.js');
const queries = require('./itemsRepositoryMO.js');

async function getItems(req, res, next) {
    setTimeout(async() => {
        try {
            const data = await queries.getItems();
            let convertedItems = data.map((item) => {
                return convertItem(item);
            });
            return res.status(200).json(convertedItems);
        } catch(err) {
            console.log(err);
            next(new Error('Error occured'));
            // return res.status(500);
        }
    }, 2000);
}

async function getItem(req, res, next) {
    try {
        const id = req.params.id;
        const data = await queries.getItem(id);
        const convertedItem = convertItem(data);
        return res.status(200).json(convertedItem);
    } catch(err) {
        console.log(err);
        next(new Error('Error occured'));
    }
}

async function addItem(req, res, next) {
    try {
        const { name, description, image } = req.body;
        await queries.addItem(name, description, image);
        return res.status(201).send(`Item added with name: ${name}`);
    } catch(err) {
        console.log(err);
        next(new Error('Error occured'));
    }
}

function convertItem(item) {
    return {
        name: item.name,
        description: item.description,
        imagename: item.imagename,
        id: item._id
    };
}

module.exports = {
    getItems,
    getItem,
    addItem
}
