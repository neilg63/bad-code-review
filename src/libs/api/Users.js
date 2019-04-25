/**
 * An example of using apisauce with another lib, commented out as we dont have aany backend services to talk to.
 */
// import { v1Api } from './api.js';
import Cookies from 'js-cookie';

// const AUTH_ENDPOINT = 'http://localhost/auth';

export async function validateToken (token) {
  // just send back our dev token if working locally
  if (process.env.REACT_APP_ENV === 'dev') {
    Cookies.set('fake_user_token', 123);
  }
  // const resp = await v1Api.post(AUTH_ENDPOINT, {token});
  return { status: 'valid' };
}
