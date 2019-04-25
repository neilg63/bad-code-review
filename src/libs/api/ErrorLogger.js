import { v1Api } from 'Libs/api/api.js';

/**
 * Send some data to our server to store. This is generally only called in the react ErrorBoundaries to send data back to the server.
 * @param jsError - the raw js error object
 * @param userId
 * @returns {Promise<*>}
 */
export async function logClientSideError (jsError, userId) {
  const error = {
    user: userId,
    message: jsError.message,
    stack: jsError.stack
  };
  const resp = await v1Api.post(`/api/v1/log/error`, { error });
  if (resp.ok) return resp.data;
  else {
    console.error(resp.problem);
    return resp.data;
  }
}
