import express from 'express';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Initialize SQLite Database
const dbPath = join(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        db.run(`CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            company TEXT,
            message TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
            if (err) console.error('Error creating table:', err);
        });
    }
});

// API Routes
app.post('/api/contact', (req, res) => {
    const { name, email, company, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const sql = `INSERT INTO contacts (name, email, company, message) VALUES (?, ?, ?, ?)`;
    db.run(sql, [name, email, company, message], function (err) {
        if (err) {
            console.error('Error inserting contact:', err);
            res.status(500).json({ error: 'Failed to save contact.' });
            return;
        }
        console.log(`New contact logged: ${name} (${email}) - ID: ${this.lastID}`);
        res.status(200).json({ success: true, id: this.lastID });
    });
});

app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
