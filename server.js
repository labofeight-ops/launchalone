// DEPLOYMENT TRIGGER: V2.1.0 INTEGRATED ENGINE
const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

// Initialize Next.js
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

// Import backend app
const backendApp = require('./backend-server-ultra');

nextApp.prepare().then(() => {
  const server = express();

  // Redirect root to landing page might depend on how backend/frontend are structured.
  // backendApp usually handles /api routes.

  // Use backendApp as middleware
  server.use(backendApp);

  // Next.js request handler
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`\n🚀 LAUNCHALONE INTEGRATED ENGINE ACTIVE`);
    console.log(`✅ Server running on http://localhost:${port}`);
    console.log(`✅ Next.js Landing Page: READY`);
    console.log(`✅ Ultra Growth API: ACTIVE\n`);
  });
}).catch((err) => {
  console.error('Error starting server:', err);
  process.exit(1);
});
