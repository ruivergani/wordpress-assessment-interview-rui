// Dependencies
import React from 'react'; // Ensure React is imported
import { createRoot } from 'react-dom/client';
import { render } from '@wordpress/element';
import domReady from '@wordpress/dom-ready';

// Components
import App from './js/Components/App';

// Style.
import './scss/App.scss';

// Render App.
domReady(() => {
    const rootElement = document.querySelector('#app');
    const root = createRoot(rootElement);
    root.render( // Use the new render method
        <App />
    );
});
