API_KEY = import.meta.VITE_API_KEY;
const request = {
  //   originals: `https://api.themoviedb.org/3/tv/changes?page=1`,
  originals: `/discover/tv?API_KEY={API_KEY}&language=en-us&with_networks=213`,
  trending: `/trending/all/week?API_KEY={API_KEY}&language=en-US`,
  top_rated: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
};
export default request;