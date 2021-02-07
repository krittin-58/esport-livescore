// import axios from 'axios';

const API_URL_ENDPOINT = 'https://api.pandascore.co';
const ACCESS_TOKEN = 'd0Q0tNZWxtU_f_wpHcGBfi8bHD1X3SkVaUZBMQVt_m5xc18ZDjs';
const PROXY_URL = 'https://esport-livescore.herokuapp.com';

// PATH
const LEAGUES = 'leagues';

const headers = {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}

const PandascoreAPI = {
    // Get List Leagues
    async getListLeagues() {
        const response = await fetch(`${PROXY_URL}/${API_URL_ENDPOINT}/${LEAGUES}?token=${ACCESS_TOKEN}`, headers);
        return response.json();
    }
}

export default PandascoreAPI;