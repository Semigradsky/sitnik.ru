export class MyError extends Error {
  constructor(message) {
    super(message)
    this.name = 'MyError'
    Error.captureStackTrace(this, this.constructor)
  }
}

MyError.print = e => {
  process.stderr.write('\n')
  if (e.name === 'MyError' && e.message) {
    process.stderr.write(e.message)
  } else {
    process.stderr.write(e.stack)
  }
  process.stderr.write('\n')
  process.exit(1)
}
