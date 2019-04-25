const Addresses = jest.genMockFromModule('../Addresses').default;

Addresses.partialAddressSearch = () => {
  return { addressData: [{ line1: '123' }] };
};

export default Addresses;
