class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [400, 'Bad Request'],
      [401, 'Unauthorized'],
      [404, 'Not Found'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) return this.errors.get(code);
    return 'Unknown error';
  }
}

export default ErrorRepository;
