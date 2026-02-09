const { spawnSync } = require('child_process')

function run(label, command, args) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: true,
  })

  if (result.status !== 0) {
    console.error(`\n[${label}] failed with code ${result.status}`)
    process.exit(result.status)
  }
}

run('frontend', 'npm', ['--prefix', 'growth-engine-saa-s-landing-page', 'run', 'build'])
