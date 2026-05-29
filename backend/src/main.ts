import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

import { buildServer } from './build-server';

const PORT = process.env.PORT ?? 3000;
const app = buildServer();

app.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
