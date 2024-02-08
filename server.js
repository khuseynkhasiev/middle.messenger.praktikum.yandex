import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import open from 'open';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

const app = express();
const staticPath = path.join(__dirname, 'dist');

app.use(express.static(staticPath));
app.get('/', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
    open(`http://localhost:${PORT}`);
});