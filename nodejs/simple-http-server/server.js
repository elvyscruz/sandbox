// server.js

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

const server = http.createServer((req, res) => {
console.log(`Request for ${req.url}`);

let filePath = '/public/index.html';


if (req.url === '/about') {
		filePath = './public/about.html';
} else if (req.url !== '/') {
	res.writeHead(404, { 'Content-Type': 'text/html' });
	res.end('<h1>404 - Page Not Found </h1>');
	return;

}

const fullPath = path.join(__dirname, filePath);

fs.readFile(fullPath, (err, content) => {
	if (err) {
		res.writeHead(500);
		res.end('Server Error')
	} else {
		res.writeHead(200, { 'Contentt-Type': 'text/html' });
		res.end(content)
	}

});

});

server.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
