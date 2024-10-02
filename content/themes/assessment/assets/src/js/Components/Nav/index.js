import { Link } from 'react-router-dom';

export function Navigation() {
  {/*
    - Link allows you to navigate between different pages or components within a React SPA without causing a full-page reload.
    - Only required components are rendered without causing a full-page reload
    - Replaces anchor <a> tags
  */}
  return(
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/movies">Movie</Link>
      </li>
    </ul>
  )
}
