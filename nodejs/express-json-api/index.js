import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
	{ id: 1, name: 'Alice' },
	{ id: 2, name: 'Bob' }
];

// Get all users

app.get('/users', (req, res) => {
	res.json(users);
});

// Get a user by id

app.get('/users/:id', (req, res) => {
	const user = users.find(u => u.id === Number(req.params.id));
	if(!user) {
		return res.status(404).json({ error: 'User not found' });
	}
	res.json(user);

	});


app.post('/users', (req, res) => {
	const { name } = req.body;
	const newUser = { id: Date.now(), name };
	users.push(newUser);
	res.status(201).json(newUser)
});

// Put update user by ID

app.put('/users/:id', (req, res) => {
	const id = Number(req.params.id);
	const user = users.find( u => u.id === id);
	if (!user) {
		return res.status(404).json({error: 'User not found' });

	}
	user.name = req.body.name;
	res.json(user)
})

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
	users = users.filter (u => u.id !== Number(req.params.id));
	res.status(204).send();
});

app.listen(PORT, () => {
	console.log(`API running at http://localhost:${PORT}`);
})
