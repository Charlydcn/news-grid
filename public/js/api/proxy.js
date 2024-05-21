const axios = require('axios');
const API_ENDPOINT = "https://newsapi.org/v2/top-headlines";
const API_KEY = "a3bc1825ad8d416fafdaf29e5477dc77";

module.exports = async (req, res) => {
    const url = `${API_ENDPOINT}?${new URLSearchParams(req.query).toString()}&apiKey=${API_KEY}`;
    try {
        const response = await axios.get(url);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data' });
    }
};