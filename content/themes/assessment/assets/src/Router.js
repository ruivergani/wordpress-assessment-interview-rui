import { Routes, Route } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './js/pages/Home';
import { About } from './js/pages/About';
import { Movie } from './js/pages/Movie';
import { NotFound } from './js/pages/NotFound';

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/movies' element={<Movie />}></Route>
        {/* Catch-all route for undefined paths (404 page) */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default Router;
