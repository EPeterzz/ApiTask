const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const carsData = async (page = 1, perPage = 10) => {
    try {
        const endpoint = '/15047451/v1/uddi:110d353a-a81f-4552-845e-efa7284a7139'; // Corrected endpoint

        // Log the endpoint and request URL
        console.log(`Endpoint: ${BASE_URL}${endpoint}`);
      
        const url = `${BASE_URL}${endpoint}?page=${page}&perPage=${perPage}&serviceKey=${API_KEY}`;
        console.log('Request URL:', url); // Log the constructed request URL
        
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};