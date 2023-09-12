import http from 'http';
import { readFile } from 'node:fs/promises';

const PORT = process.env.PORT || 8080;

const server = http.createServer(async (req, res) => {
    if (req.url === '/') {
        try {
            const filePath = new URL('./pages/index.html', import.meta.url);
            const contents = await readFile(filePath, { encoding: 'utf8' });
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(contents);
        } catch (err) {
            console.error(err.message);
        }
    }

    else if (req.url === '/about') {
        try {
            const filePath = new URL('./pages/about.html', import.meta.url);
            const contents = await readFile(filePath, { encoding: 'utf8' });
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(contents);
        } catch (err) {
            console.error(err.message);
        }
    }

    else if (req.url === '/contact-me') {
        try {
            const filePath = new URL('./pages/contact-me.html', import.meta.url);
            const contents = await readFile(filePath, { encoding: 'utf8' });
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(contents);
        } catch (err) {
            console.error(err.message);
        }
    }

    else {
        try {
            const filePath = new URL('./pages/404.html', import.meta.url);
            const contents = await readFile(filePath, { encoding: 'utf8' });
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(contents);
        } catch (err) {
            console.error(err.message);
        }
    }
});

server.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));