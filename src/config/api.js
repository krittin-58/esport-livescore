import axios from 'axios';

const API_URL_ENDPOINT = 'https://api.pandascore.co';
const ACCESS_TOKEN = '<Pandascore_Api_key_here>';

// PATH
const LEAGUES = 'leagues';
const TEAMS = 'teams';
const MATCHES = 'matches';
const SERIES = 'series';

const headers = {
    'content-type': 'application/json',
};

const PandascoreAPI = {
    // Get List Leagues
    async getListLeagues() {
        return await axios.get(`${API_URL_ENDPOINT}/${LEAGUES}?token=${ACCESS_TOKEN}`, headers);
    },

    // Get League specified id
    async getLeagueId(league_id) {
        return await axios.get(`${API_URL_ENDPOINT}/${LEAGUES}/${league_id}?token=${ACCESS_TOKEN}`, headers);
    },

    // Get Series for league_id
    async getSeriesforLeague(series_league_id) {
        return await axios.get(`${API_URL_ENDPOINT}/${LEAGUES}/${series_league_id}/${SERIES}?token=${ACCESS_TOKEN}`, headers);
    },

    // Get Matches for league id
    async getMatchesForLeague(league_id) {
        return await axios.get(`${API_URL_ENDPOINT}/${LEAGUES}/${league_id}/${MATCHES}?token=${ACCESS_TOKEN}&per_page=100`, headers);
    },

    // Get Matches Upcoming for league id
    async getMatchesUpcomingForLeague(league_id) {
        return await axios.get(`${API_URL_ENDPOINT}/${LEAGUES}/${league_id}/${MATCHES}/upcoming?token=${ACCESS_TOKEN}`, headers);
    },

    // Get Matches Running for league id
    async getMatchesRunningForLeague(league_id) {
        return await axios.get(`${API_URL_ENDPOINT}/${LEAGUES}/${league_id}/${MATCHES}/running?token=${ACCESS_TOKEN}`, headers);
    },

    // Get Matches Past for league id
    async getMatchesPastForLeague(league_id) {
        return await axios.get(`${API_URL_ENDPOINT}/${LEAGUES}/${league_id}/${MATCHES}/past?token=${ACCESS_TOKEN}`, headers);
    },

    // Get All Teams
    async getListTeams(per_page, videogame_id) {
        return await axios.get(`${API_URL_ENDPOINT}/${TEAMS}?token=${ACCESS_TOKEN}&per_page=${per_page}&filter[videogame_id]=${videogame_id}`, headers);
    },
};

export default PandascoreAPI;
