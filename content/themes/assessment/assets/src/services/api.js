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
  const response = await fetch(`${API_URL}/movie`);
  return response.json();
};

// Fetch a single movie post by ID
export const fetchSingleMoviePost = async (id) => {
  const response = await fetch(`${API_URL}/movie/${id}?&_embed`);
  if (!response.ok) {
    throw new Error('Failed to fetch movie post');
  }
  return response.json();
};
