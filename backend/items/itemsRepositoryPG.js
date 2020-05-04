const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'my_database',
    port: 54320,
});

class ItemsRepositoryPG {
    async getItems() {
        const { rows } = await pool.query('SELECT * FROM items');
        return rows;
    }

    async getItem(id) {
        const { rows } = await pool.query('SELECT * FROM items WHERE id = $1', [id]);
        return rows;
    }
}

module.exports = ItemsRepositoryPG;