const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'my_database',
    port: 54320,
});

const getReviews = async () => {
    const { rows } = await pool.query('SELECT * FROM reviews');
    return rows;
}

const addReview = async (username, rating, review) => {
    throw new Error();
    await pool.query('INSERT INTO reviews (username, rating, review) VALUES ($1, $2, $3)',
    [username, rating, review]);
    
}

module.exports = {
    getReviews,
    addReview,
}