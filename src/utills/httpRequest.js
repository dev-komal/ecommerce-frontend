import axios from 'axios';
import { getToken, removeToken, verifyToken } from './appUser';
import history from './history';
import FlashMessage from './FlashMessage'

/**
 * Export a default instance for requesting an APIs
 *
 * This instance includes auth Header
 */
export default () => {
    const authHeader = getToken();
    const validToken = verifyToken();

    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_END_POINT,
        timeout: 60000, // 1 minute
        headers: { Authorization: authHeader }
    });

    // Watch every response received from the server
    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response.status === 401) {
                removeToken();
                history.push('/');
            }
            if (error.response.status === 422) {
                FlashMessage({ message: error.response.data.message, type: 'error' });
            }
            return Promise.reject(error);
        }
    );
    return axiosInstance;
};
/**
will be used to call open APIs which does not accept Auth Header
 */
export const openHttpRequest = () =>
    axios.create({
        baseURL: process.env.REACT_APP_API_END_POINT,
        timeout: 60000 // 1 minutes
    });
