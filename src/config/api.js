import axios from 'axios';

const API_URL_ENDPOINT = 'https://api.pandascore.co';
const ACCESS_TOKEN = 'd0Q0tNZWxtU_f_wpHcGBfi8bHD1X3SkVaUZBMQVt_m5xc18ZDjs';
// const PROXY_URL = 'https://esport-livescore.herokuapp.com';

// PATH
const LEAGUES = 'leagues';
const TEAMS = 'teams';

const headers = {
    'content-type': 'application/json',
    // 'Access-Control-Allow-Origin': 'https://esport-livescore-362bf.web.app',
    // mode: 'cors'
}

const PandascoreAPI = {
    // Get List Leagues
    async getListLeagues() {
        return await axios.get(`${API_URL_ENDPOINT}/${LEAGUES}?token=${ACCESS_TOKEN}`, headers);
    },

    async getListTeams(per_page) {
        return await axios.get(`${API_URL_ENDPOINT}/${TEAMS}?token=${ACCESS_TOKEN}&per_page=${per_page}`, headers);
    }
};

export default PandascoreAPI;