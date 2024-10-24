
export const fetchTopRatedMovies = async () => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjc2YzkxMmJlMzI4OTAyZmY3ZDQ1NWMwN2Q5MDE0YiIsIm5iZiI6MTcyOTYxMDE3Ny43NjAzODcsInN1YiI6IjY3MTdiZTFmZGNiN2ZmODExZTQ3NzU4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9u9JtQCXuseqodJqvdVlo0Hms_ZP69FhD_fzXn9y3co'
  }
};

  const res = await fetch(url, options)
  
  if (!res.ok) {
    throw new Error('Failed to fetch movies')
  }

  const json = await res.json()
  return json.results


}

