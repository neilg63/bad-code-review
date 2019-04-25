import { v1Api } from 'Libs/api/api';

export async function partialAddressSearch (search) {
  const resp = await v1Api.post(`/api/v1/addresses/search/partial`, { search });
  if (resp.ok) return resp.data;
  else {
    console.error(resp.problem);
    return resp.data;
  }
}

// define a concatenated object of methods here to allow for default and named export use
const exportFunctions = {
  partialAddressSearch
};

export default exportFunctions;
