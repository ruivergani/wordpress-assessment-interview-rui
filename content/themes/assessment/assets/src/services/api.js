const API_URL = 'http://localhost:8888/wp-json/wp/v2';

export const fetchPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  return response.json();
};

export const fetchMovies = async () => {
  const response = await fetch(`${API_URL}/movie`);
  return response.json();
};
