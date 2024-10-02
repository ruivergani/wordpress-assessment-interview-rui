import { Routes, Route } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './js/pages/Home';
import { About } from './js/pages/About';
import { Movie } from './js/pages/Movie';
import { NotFound } from './js/pages/NotFound';
import { SinglePost }  from './js/pages/SinglePost';
import { SingleMoviePost } from './js/pages/SingleMoviePost';

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movie />} />
        {/* Route for Single Post by slug */}
        <Route path="/post/:slug" element={<SinglePost />} />
        <Route path="/:slug" element={<SinglePost />} />
        {/* Route for Single Movie Post by ID */}
        <Route path="/movie/:id" element={<SingleMoviePost />} />
        {/* Catch-all route for undefined paths (404 page) */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default Router;
