import { create } from 'apisauce';

// define the api, env vars are set in the .env file
export const v1Api = create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    'x-api-key': 'supersecretapikey',
    'x-user-token': 'someJWT'
  }
});

/**
 * Response Transform:
 * This is our hook into all incoming responses from our API. We can use this to ensure we get consistent data responses across our app.
 */
v1Api.addResponseTransform(response => {
  // Handle any missing resources
  if (response.status === 404) response.data = { error: true, message: 'We could not find the resource you were looking for.' };

  // Handle anything permission based from a 401 response from the API
  if (response.status === 401) response.data = { error: true, message: 'You do not have permission to view this resource' };
});
