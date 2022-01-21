import ErrorRepository from '../ErrorRepository';

describe('test ErrorRepository', () => {

  let errors;

  beforeEach(() => {
    errors = new ErrorRepository();
  })

  test('should return error', () => {
    expect(errors.translate(400)).toBe('Bad Request');
  });

  test('should return unknown error', () => {
    expect(errors.translate(4000)).toBe('Unknown error');
  });
})
