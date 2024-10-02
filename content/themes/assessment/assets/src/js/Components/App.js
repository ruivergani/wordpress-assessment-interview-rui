import React from 'react';
// Import Router Component
import { Router } from '../../Router';
import { BrowserRouter } from 'react-router-dom';

/**
 * App component.
 * @returns {JSXElement}
 */
const App = () => {
    return (
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    )
}

export default App;
