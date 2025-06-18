import axios from 'axios';

// Use environment variable from Next.js
const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_BASE_URL });

const formDataURL = [

];

api.interceptors.request.use((req) => {
    let userTokenData;
    try {
        userTokenData = JSON.parse(typeof window !== 'undefined' && sessionStorage.getItem('chessToken'));
    } catch (error) {
        userTokenData = null;
    }

    const token = userTokenData?.token || null;

    // Default Content-Type
    req.headers['Content-Type'] = 'application/json';

    // Override if formData URLs match
    if (formDataURL.includes(req.url)) {
        req.headers['Content-Type'] = 'multipart/form-data';
    }

    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && [401, 403].includes(error.response.status)) {
            if (typeof window !== 'undefined') {
                sessionStorage.removeItem('chessToken');
            }
        }
        return Promise.reject(error);
    }
);

export default api;
