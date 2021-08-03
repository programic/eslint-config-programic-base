describe('valid config', () => {
  // eslint-disable-next-line global-require
  const config = require('../..');

  it('is an object', () => {
    expect(config).not.toBeNull();
    expect(typeof config).toBe('object');
    expect(Array.isArray(config)).toBe(false);
  });

  it('only extends eslint:recommended and airbnb-base', () => {
    expect(Array.isArray(config.extends)).toBe(true);
    expect(config.extends[0]).toBe('eslint:recommended');
    expect(config.extends[1]).toBe('airbnb-base');
    expect(config.extends).toHaveLength(2);
  });
});
