import { Link } from 'react-router-dom';
import { NavigationList } from './styles';

export function Navigation() {
  {/*
    - Link allows you to navigate between different pages or components within a React SPA without causing a full-page reload.
    - Only required components are rendered without causing a full-page reload
    - Replaces anchor <a> tags
  */}
  return(
    <NavigationList>
      <li>
        <Link to="/movies">Movie</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </NavigationList>
  )
}
