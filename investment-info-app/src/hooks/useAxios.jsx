import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = ({ url, method, data = null, dependencyValue }) => {
    axios.defaults.baseURL = 'https://api.preqin.com/';
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [accessToken, setAccessToken] = useState(null);

    const fetchToken = async () => {
        const tokenUrl = 'connect/token';

        const requestData = new URLSearchParams();
        requestData.append('username', 'dummydatafeeds@preqin.com');
        requestData.append('apikey', '8f0bc69bc2a643f8bb8034a15081962e');
        requestData.append('grant_type', 'password');

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        };

        try {
            const tokenResponse = await axios.post(tokenUrl, requestData, config);
            setAccessToken(tokenResponse.data.access_token);
        } catch (tokenError) {
            setError(tokenError);
        }
    };

    const fetchData = async () => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
        };

        try {
            const result = await axios({
                method,
                url,
                data,
                headers: config.headers,
            });

            setResponse(result.data);
        } catch (fetchError) {
            setError(fetchError);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchToken(); // Fetch token before making the actual request
    }, []);

    useEffect(() => {
        if (accessToken) {
            fetchData(); // Make actual request after obtaining the access token
        }
    }, [accessToken, method, url, data, dependencyValue]);

    return { response, error, loading };
};

export default useAxios;
