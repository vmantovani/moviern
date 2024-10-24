
export const fetchTopRatedMovies = async () => {

    const apiToken = process.env.EXPO_PUBLIC_MOVIE_API_TOKEN

    if (!apiToken) {
      throw new Error('API token is not defined');
    }

    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: apiToken
  }
};

  const res = await fetch(url, options)
  
  if (!res.ok) {
    throw new Error('Failed to fetch movies')
  }

  const json = await res.json()
  return json.results


}

