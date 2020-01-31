const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'my_database',
    port: 54320,
});

const getReviews = (req, res) => {
    pool.query('SELECT * FROM reviews', (err, results) => {
        if(err) {
            throw err;
        }
        res.status(200).json(results.rows);
    });
}

const addReview = (req, res) => {
    const { username, rating, review } = req.body;
    pool.query('INSERT INTO reviews (username, rating, review) VALUES ($1, $2, $3)',
    [username, rating, review], (err, results) => {
        if(err) {
            throw err;
        }
        res.status(201).send(`Review added for: ${username}`);
    });
}

module.exports = {
    getReviews,
    addReview
}