const API_URL = 'http://localhost:8888/wp-json/wp/v2';

export const fetchPostById = async (id) => {
  const response = await fetch(`${API_URL}/posts/${id}?&_embed`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  return response.json();
};

export const fetchPostBySlug = async (slug) => {
  const response = await fetch(`${API_URL}/posts?slug=${slug}&_embed`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  const posts = await response.json();
  return posts.length > 0 ? posts[0] : null; // Return the first matching post
};

export const fetchMovies = async () => {
  const response = await fetch(`${API_URL}/movie?_embed`);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const data = await response.json();
  // Check if data is an array, if not return an empty array
  return Array.isArray(data) ? data : [];
};

// Fetch a single movie post by Slug
export const fetchSingleMoviePost = async (slug) => {
  const response = await fetch(`${API_URL}/movie?slug=${slug}&_embed`);
  if (!response.ok) {
    throw new Error('Failed to fetch movie');
  }
  const movies = await response.json();
  return movies.length > 0 ? movies[0] : null; // Return the first matching post
};
