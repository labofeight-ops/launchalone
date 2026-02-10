// DEPLOYMENT TRIGGER: V2.1.2 INTEGRATED ENGINE + REDIRECTS
const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8080;

// Initialize Next.js
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

// Import backend app
const backendApp = require('./backend-core');

nextApp.prepare().then(() => {
  const server = express();

  // Trust proxy for secure redirects behind Railway load balancer
  server.set('trust proxy', true);

  // WWW to non-WWW redirect
  server.use((req, res, next) => {
    const host = req.headers.host || '';
    if (host.startsWith('www.')) {
      const nakedHost = host.slice(4);
      return res.redirect(301, `https://${nakedHost}${req.url}`);
    }
    next();
  });

  // Use backendApp as middleware
  server.use(backendApp);

  // Next.js request handler
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log(`\n🚀 LAUNCHALONE INTEGRATED ENGINE ACTIVE`);
    console.log(`✅ Server listening on port: ${port}`);
    console.log(`✅ Redirect Engine: ACTIVE (www -> naked)`);
    console.log(`✅ Next.js Landing Page: READY`);
    console.log(`✅ Ultra Growth API: ACTIVE\n`);
  });
}).catch((err) => {
  console.error('Error starting server:', err);
  process.exit(1);
});

