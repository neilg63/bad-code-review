import Addresses from './Addresses';

jest.mock('./Addresses');

describe('Address API', () => {
  it('searching should match snapshot', () => {
    const resp = Addresses.partialAddressSearch('7 leny road');
    expect(resp).toMatchSnapshot();
  });
});
