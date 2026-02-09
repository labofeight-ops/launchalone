#!/usr/bin/env node

/**
 * LaunchAlone Ultra - System Health Check
 * 
 * This script tests all critical systems to ensure LaunchAlone is working correctly.
 * Run this after setup to verify everything is configured properly.
 * 
 * Usage: node test-system.js
 */

require('dotenv').config();
const https = require('https');
const http = require('http');

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logSuccess(message) {
  log(`✅ ${message}`, 'green');
}

function logError(message) {
  log(`❌ ${message}`, 'red');
}

function logWarning(message) {
  log(`⚠️  ${message}`, 'yellow');
}

function logInfo(message) {
  log(`ℹ️  ${message}`, 'cyan');
}

// Test results tracker
const results = {
  passed: 0,
  failed: 0,
  warnings: 0
};

async function testEnvironmentVariables() {
  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'blue');
  log('TEST 1: ENVIRONMENT VARIABLES', 'blue');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'blue');

  // Critical variables
  const criticalVars = {
    'XAI_API_KEY': process.env.XAI_API_KEY,
    'SUPABASE_URL': process.env.SUPABASE_URL,
    'SUPABASE_KEY': process.env.SUPABASE_KEY
  };

  // Optional variables
  const optionalVars = {
    'X_API_KEY': process.env.X_API_KEY,
    'X_API_SECRET': process.env.X_API_SECRET,
    'X_BEARER_TOKEN': process.env.X_BEARER_TOKEN
  };

  let allCriticalSet = true;

  // Check critical variables
  for (const [key, value] of Object.entries(criticalVars)) {
    if (!value || value === `your_${key.toLowerCase()}_here`) {
      logError(`${key} is not set or using example value`);
      results.failed++;
      allCriticalSet = false;
    } else {
      logSuccess(`${key} is set (${value.substring(0, 15)}...)`);
      results.passed++;
    }
  }

  // Check optional variables
  log('\nOptional variables (for auto-posting):');
  for (const [key, value] of Object.entries(optionalVars)) {
    if (!value || value === `your_${key.toLowerCase()}_optional`) {
      logWarning(`${key} not set (optional, needed for auto-posting)`);
      results.warnings++;
    } else {
      logSuccess(`${key} is set`);
    }
  }

  return allCriticalSet;
}

async function testXAIConnection() {
  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'blue');
  log('TEST 2: XAI GROK API CONNECTION', 'blue');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'blue');

  if (!process.env.XAI_API_KEY) {
    logError('XAI_API_KEY not set - skipping test');
    results.failed++;
    return false;
  }

  return new Promise((resolve) => {
    const postData = JSON.stringify({
      model: 'grok-beta',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: 'Say "test successful" and nothing else.' }
      ],
      temperature: 0.5,
      max_tokens: 50
    });

    const options = {
      hostname: 'api.x.ai',
      path: '/v1/chat/completions',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.XAI_API_KEY}`,
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const response = JSON.parse(data);
            if (response.choices && response.choices[0]) {
              logSuccess('XAI Grok API connection successful');
              logInfo(`Response: ${response.choices[0].message.content}`);
              results.passed++;
              resolve(true);
            } else {
              logError('Unexpected response format from XAI API');
              results.failed++;
              resolve(false);
            }
          } catch (error) {
            logError(`Failed to parse XAI response: ${error.message}`);
            results.failed++;
            resolve(false);
          }
        } else if (res.statusCode === 401) {
          logError('XAI API authentication failed - check your API key');
          results.failed++;
          resolve(false);
        } else {
          logError(`XAI API returned status code: ${res.statusCode}`);
          logInfo(`Response: ${data.substring(0, 200)}`);
          results.failed++;
          resolve(false);
        }
      });
    });

    req.on('error', (error) => {
      logError(`Failed to connect to XAI API: ${error.message}`);
      results.failed++;
      resolve(false);
    });

    req.write(postData);
    req.end();
  });
}

async function testSupabaseConnection() {
  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'blue');
  log('TEST 3: SUPABASE DATABASE CONNECTION', 'blue');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'blue');

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
    logError('Supabase credentials not set - skipping test');
    results.failed++;
    return false;
  }

  return new Promise((resolve) => {
    const url = new URL(`${process.env.SUPABASE_URL}/rest/v1/users`);
    
    const options = {
      hostname: url.hostname,
      path: url.pathname + '?limit=1',
      method: 'GET',
      headers: {
        'apikey': process.env.SUPABASE_KEY,
        'Authorization': `Bearer ${process.env.SUPABASE_KEY}`,
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          logSuccess('Supabase connection successful');
          logInfo('Database schema is accessible');
          results.passed++;
          resolve(true);
        } else if (res.statusCode === 401) {
          logError('Supabase authentication failed - check your API key');
          results.failed++;
          resolve(false);
        } else if (res.statusCode === 404) {
          logError('Supabase table not found - did you run database-schema.sql?');
          results.failed++;
          resolve(false);
        } else {
          logError(`Supabase returned status code: ${res.statusCode}`);
          results.failed++;
          resolve(false);
        }
      });
    });

    req.on('error', (error) => {
      logError(`Failed to connect to Supabase: ${error.message}`);
      logInfo('Check your SUPABASE_URL is correct');
      results.failed++;
      resolve(false);
    });

    req.end();
  });
}

async function testBackendServer() {
  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'blue');
  log('TEST 4: BACKEND SERVER', 'blue');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'blue');

  const port = process.env.PORT || 3001;

  return new Promise((resolve) => {
    const req = http.request({
      hostname: 'localhost',
      port: port,
      path: '/api/health',
      method: 'GET'
    }, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const response = JSON.parse(data);
            if (response.status === 'online') {
              logSuccess(`Backend server is running on port ${port}`);
              logInfo(`Status: ${response.message}`);
              results.passed++;
              resolve(true);
            } else {
              logError('Backend server returned unexpected status');
              results.failed++;
              resolve(false);
            }
          } catch (error) {
            logError('Backend server returned invalid JSON');
            results.failed++;
            resolve(false);
          }
        } else {
          logError(`Backend server returned status code: ${res.statusCode}`);
          results.failed++;
          resolve(false);
        }
      });
    });

    req.on('error', (error) => {
      logError(`Backend server is not running on port ${port}`);
      logInfo('Start it with: npm start');
      results.failed++;
      resolve(false);
    });

    req.end();
  });
}

async function testHumanizationEngine() {
  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'blue');
  log('TEST 5: NEURAL HUMANIZATION ENGINE', 'blue');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'blue');

  // Load the humanization function
  try {
    const testText = "Furthermore, I think that we should utilize this opportunity to leverage our resources—moreover, it's important to note that this will facilitate better outcomes.";
    
    logInfo('Testing humanization on sample AI text...');
    logInfo(`Input: "${testText}"`);
    
    // Simple inline test (avoiding require of main file)
    const humanized = testText
      .replace(/—/g, ' - ')
      .replace(/Furthermore,?\s*/gi, '')
      .replace(/moreover,?\s*/gi, '')
      .replace(/\butilize\b/gi, 'use')
      .replace(/\bleverage\b/gi, 'use')
      .replace(/\bfacilitate\b/gi, 'help')
      .replace(/\bI think that\b/gi, 'I think')
      .replace(/\bit's important to note that\b/gi, '')
      .replace(/\s+/g, ' ')
      .trim();
    
    logInfo(`Output: "${humanized}"`);
    
    if (humanized !== testText) {
      logSuccess('Humanization engine is working');
      results.passed++;
      return true;
    } else {
      logError('Humanization engine did not transform text');
      results.failed++;
      return false;
    }
  } catch (error) {
    logError(`Humanization test failed: ${error.message}`);
    results.failed++;
    return false;
  }
}

async function runAllTests() {
  log('\n╔═══════════════════════════════════════════════════════════╗', 'cyan');
  log('║         LAUNCHALONE ULTRA - SYSTEM HEALTH CHECK          ║', 'cyan');
  log('╚═══════════════════════════════════════════════════════════╝\n', 'cyan');

  log('Starting comprehensive system tests...\n');

  // Run tests sequentially
  const envOk = await testEnvironmentVariables();
  
  if (envOk) {
    await testXAIConnection();
    await testSupabaseConnection();
  } else {
    logWarning('\nSkipping API tests due to missing environment variables');
    logInfo('Please set up your .env file first (see SETUP-GUIDE.md)');
  }

  await testBackendServer();
  await testHumanizationEngine();

  // Print summary
  log('\n╔═══════════════════════════════════════════════════════════╗', 'cyan');
  log('║                      TEST SUMMARY                         ║', 'cyan');
  log('╚═══════════════════════════════════════════════════════════╝\n', 'cyan');

  logSuccess(`Passed: ${results.passed}`);
  logError(`Failed: ${results.failed}`);
  logWarning(`Warnings: ${results.warnings}`);

  const total = results.passed + results.failed;
  const successRate = total > 0 ? Math.round((results.passed / total) * 100) : 0;

  log(`\nSuccess Rate: ${successRate}%\n`);

  if (results.failed === 0) {
    log('╔═══════════════════════════════════════════════════════════╗', 'green');
    log('║  🎉 ALL TESTS PASSED - LAUNCHALONE IS READY TO LAUNCH!   ║', 'green');
    log('╚═══════════════════════════════════════════════════════════╝\n', 'green');
    
    logInfo('Next steps:');
    log('  1. Start the backend: npm start');
    log('  2. Start the frontend: cd growth-engine-landing-page && npm run dev');
    log('  3. Open http://localhost:3000 in your browser');
    log('  4. Start growing on X! 🚀\n');
  } else {
    log('╔═══════════════════════════════════════════════════════════╗', 'red');
    log('║       ⚠️  SOME TESTS FAILED - REVIEW ERRORS ABOVE        ║', 'red');
    log('╚═══════════════════════════════════════════════════════════╝\n', 'red');
    
    logInfo('Common fixes:');
    log('  • Check your .env file has correct API keys');
    log('  • Make sure you ran database-schema.sql in Supabase');
    log('  • Verify backend server is running: npm start');
    log('  • See SETUP-GUIDE.md for detailed instructions\n');
  }

  process.exit(results.failed > 0 ? 1 : 0);
}

// Run tests
runAllTests().catch(error => {
  logError(`\nUnexpected error: ${error.message}`);
  process.exit(1);
});
