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

const getReviewsById = async (id) => {
    const { rows } = await pool.query('SELECT * FROM reviews WHERE item = $1', [id]);
    return rows;
}

const addReview = async (username, rating, review, product) => {
    await pool.query(
        'INSERT INTO reviews (username, rating, review, item) VALUES ($1, $2, $3, $4)',
        [username, rating, review, product]
    );
}

module.exports = {
    getReviews,
    getReviewsById,
    addReview,
}