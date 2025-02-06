const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const PORT = 8000;

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));
server.use(jsonServer.defaults());

server.use(async (req, res, next) => {
	await new Promise((res) => {
		setTimeout(res, 800);
	});
	next();
});

// eslint-disable-next-line consistent-return
server.use((req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(403).json({ message: 'AUTHH ERROR' });
	}
	next();
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
	if (req.method === 'POST') {
		req.body.createdAt = Date.now();
	}
	next();
});

server.post('/login', (req, res) => {
	const { username, password } = req.body;
	const db = JSON.parse(
		fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'),
	);
	const { users } = db;

	const userFromDB = users.find(
		(user) => user.username === username && user.password === password,
	);
	if (userFromDB) {
		return res.json(userFromDB);
	}

	return res.status(403).json({ message: 'Not found custom' });
});

server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', ''); // Allow any origin
	res.header(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS',
	);
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept',
	);
	next();
});

server.use(router);

server.listen(PORT, () => {
	console.log(`Server running on ${PORT} port`);
});
