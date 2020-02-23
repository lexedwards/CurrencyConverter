import fetchCountries from '../src/api/fetchCountries';
import mockData from '../__mocks__/restCountries.json';
jest.mock('../src/api/fetchCountries', () => () => Promise.resolve(mockData));

describe('Country Data', () => {
  it('Fetches Data', done => {
    fetchCountries().then(done());
  });

  it('Returns Structured Data', done => {
    fetchCountries()
      .then(res => {
        expect(res).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              borders: expect.arrayContaining([expect.any(String)]),
              capital: expect.any(String),
              currencies: expect.arrayContaining([expect.any(Object)]),
              flag: expect.any(String),
              languages: expect.arrayContaining([expect.any(Object)]),
              latlng: expect.arrayContaining([expect.any(Number)]),
              name: expect.any(String),
              nativeName: expect.any(String),
              population: expect.any(Number),
              region: expect.any(String),
              timezones: expect.arrayContaining([expect.any(String)]),
              translations: expect.any(Object),
            }),
          ])
        );
      })
      .then(done());
  });
});
