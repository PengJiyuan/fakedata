const fakeData = require('../lib/fakeme.cjs');
const fd = new fakeData();

describe('test function Fake.random.', () => {
  it('matches if sex is Chinese language.', () => {
    const expected = [
      expect.stringMatching(/^[a-zA-Z]+$/)
    ];
    const randomResult = fd.random(['Javascript', 'Css', 'Html', 'React', 'Vue'], 10);

    expect(randomResult.length).toBe(10);
    expect(randomResult).toEqual(
      expect.arrayContaining(expected)
    );
  });

  it('matches if list and count is empty but ok.', () => {
    const randomResult = fd.random();

    expect(randomResult.length).toBe(0);
    expect(randomResult).toEqual([]);
  });

  it('matches if seeds are the same.', () => {
    const seed = 'Random Test!';
    const ref = new fakeData({seed: seed}).random();
    for(let i = 0; i < 10; i++ ) {
      fd.seed(seed)
      expect(fd.random()).toEqual(ref)
    }
  })
});
