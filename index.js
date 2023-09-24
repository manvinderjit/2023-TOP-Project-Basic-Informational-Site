import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 8080;

const __dirname = (path.dirname(fileURLToPath(import.meta.url))) + '/pages';

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname}, (e) => {
        if (e) {
            console.error(e.message);
        }
    })
});

app.get('/about', (req, res) => {
    res.sendFile('about.html', {root: __dirname}, (e) => {
        if (e) {
            console.error(e.message);
        } else {
            console.log('About page visited!');
        }
    })
});

app.get('/contact-me', (req, res) => {
    res.sendFile('contact-me.html', {root: __dirname}, (e) => {
        if (e) {
            console.error(e.message);
        } else {
            console.log('Contact Me page visited!');
        }
    })
});

app.get('*', (req, res) => {
    res.sendFile('404.html', {root: __dirname}, (e) => {
        if (e) {
            console.error(e.message);
        } else {
            console.log('404 page visited!');
        }
    })
});

app.listen(PORT, () => console.log(`App is running at http://localhost:${PORT}`));
