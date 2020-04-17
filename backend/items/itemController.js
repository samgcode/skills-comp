// const queries = require('./itemsRepositoryPG.js');
// const queries = require('./itemsRepositoryMO.js');
let queries = '';
if(process.env.DB_HOST === 'mongo') {
    queries = require('./itemsRepositoryMO.js');
} else {
    queries = require('./itemsRepositoryPG.js');
}


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

async function populate() {
    // const item = {
    //     name: 'Colored spoon',
    //     desc: 'A packadge containing one bio degradable spoon of any different color.',
    //     image: 'rainbowSpoons'
    // }
    const data = [
        {
            name: 'Bio degradable spoons pack',
            desc: 'A pack of ten spoons, that are all high quality and energy efficient.',
            image: 'manySpoons'
        }, {
            name: 'Colored spoons pack',
            desc: 'A packadge containing ten bio degradable spoons of all different colors.',
            image: 'rainbowSpoons'
        }, {
            name: 'Single spoon',
            desc: 'Uno spoon',
            image: 'SPOON'
        }, {
            name: 'Colored spoon',
            desc: 'A packadge containing one bio degradable spoon of any different color.',
            image: 'rainbowSpoons'
        }

    ]
    const databaseItems = await queries.getItems();
    if(!databaseItems || databaseItems.length <= 0) {
        console.log('populating');
        data.forEach((item) => {
            queries.addItem(item.name, item.desc, item.image);
        });   
    }
}

module.exports = {
    getItems,
    getItem,
    addItem,
    populate
}
