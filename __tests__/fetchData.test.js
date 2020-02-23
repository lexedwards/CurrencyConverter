import { http } from '../src/api/fetchData';
import moxios from 'moxios';

import testCountries from '../__mocks__/restCountries.json';

/**
 * This tests the API call itself, which isn't nessassary
 *  with third-party libraries (Axios).
 *
 * Hitting API limits, invalidation, mutating backend calls etc.
 * I should be testing the data once it's here and functions
 * called from that information
 */

describe('fetchData', () => {
  beforeEach(() => {
    moxios.install(http);
  });
  afterEach(() => {
    moxios.uninstall(http);
  });

  it('fetches successfully data from RestCountries', async done => {
    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: testCountries,
      });
    });

    const actualRes = await http.get('https://restcountries.eu/rest/v2/');
    expect(actualRes.data).toEqual(expect.arrayContaining(testCountries));
    done();
  });
});
