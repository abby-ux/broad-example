import express from 'express';

const router = express.Router();

// define routes
router.get('/', (req, res) => {
    res.send('API is running...');
});

router.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});

router.post('/data', (req, res) => {
    const data = req.body;
    // Process the data
    res.json({ message: 'Data received', data });
});

router.get('/example', (req, res) => {
    res.json({ message: 'This is an example route' });
});

export default router;