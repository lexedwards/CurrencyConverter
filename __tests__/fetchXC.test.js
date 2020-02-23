import fetchXC from '../src/api/fetchXC';
import mockData from '../__mocks__/oxcLatest.json';
jest.mock('../src/api/fetchXC', () => () => Promise.resolve(mockData));

describe('Exchange Rate Data', () => {
  it('Fetches Data', done => {
    fetchXC().then(done());
  });

  it('Returns Structures Data', done => {
    fetchXC()
      .then(res => {
        expect(res).toEqual(
          expect.objectContaining({
            timestamp: expect.any(Number),
            base: 'USD',
            rates: expect.objectContaining({
              USD: 1,
            }),
          })
        );
      })
      .then(done());
  });
});
