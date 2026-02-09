const { spawn } = require('child_process')

const processes = []

function run(label, command, args, cwd) {
  const child = spawn(command, args, {
    cwd,
    stdio: 'inherit',
    shell: true,
  })

  child.on('exit', (code) => {
    if (code !== 0) {
      console.error(`\n[${label}] exited with code ${code}`)
    }
  })

  processes.push(child)
}

function shutdown() {
  processes.forEach((child) => child.kill('SIGTERM'))
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)

run('backend', 'npm', ['--prefix', 'xgrowth', 'run', 'dev'], process.cwd())
run('frontend', 'npm', ['--prefix', 'growth-engine-saa-s-landing-page', 'run', 'dev'], process.cwd())
