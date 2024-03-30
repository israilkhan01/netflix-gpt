export const PROFILE_IMAGE = "https://avatars.githubusercontent.com/u/44443989?v=4";

export const TMDB_API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.TMDB_API_TOKEN,
    }
};