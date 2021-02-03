import axios from 'axios';

const API_URL_ENDPOINT = 'https://api.pandascore.co';
const ACCESS_TOKEN = 'd0Q0tNZWxtU_f_wpHcGBfi8bHD1X3SkVaUZBMQVt_m5xc18ZDjs';

// PATH
const LEAGUES = 'leagues';

const headers = {
    'content-type': 'application/json'
}

const PandascoreAPI = {
    // Get List Leagues
    getListLeagues() {
        return axios.get(`${API_URL_ENDPOINT}/${LEAGUES}?token=${ACCESS_TOKEN}`, headers);
    }
}

export default PandascoreAPI;