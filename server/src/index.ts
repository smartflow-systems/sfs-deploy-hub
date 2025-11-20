import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ ok: true, service: 'sfs-deploy-hub' });
});

// API routes (to be imported from routes/)
app.get('/api/repositories', (req, res) => {
  res.json({ repositories: [] });
});

app.listen(PORT, () => {
  console.log(\`🚀 SFS Deploy Hub running on port \${PORT}\`);
});
