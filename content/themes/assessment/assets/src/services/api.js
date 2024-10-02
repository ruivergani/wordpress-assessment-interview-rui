const API_URL = 'http://localhost:8888/wp-json/wp/v2';

export const fetchPosts = async () => {
  const response = await fetch(`${API_URL}/posts?slug=welcome&_embed`);
  return response.json();
};

export const fetchMovies = async () => {
  const response = await fetch(`${API_URL}/movie`);
  return response.json();
};

// Fetch a single post by ID
export const fetchSinglePost = async (id) => { 
  const response = await fetch(`${API_URL}/posts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  return response.json();
};
