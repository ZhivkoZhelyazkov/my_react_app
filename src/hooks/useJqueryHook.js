import { useEffect } from 'react';
import { loadjs } from 'loadjs';

/*
In React Router, if we redirect to the new route then JS libraries are not loaded.
Especially plugins which were injecting the HTML elements after the page load is complete.
Now, react routing will not load the page as everything here is virtual DOM,
so the solution is to load the JS libraries after routing is done.

1. npm install loadjs
2. import loadjs from 'loadjs';
3. Call it in componentDidMount() of the React Component
    loadjs('./js/modernizr.js', () => {});
*/


// const loadjs = require('loadjs');

const useJqueryHook = () => {
    useEffect(() => {
        loadjs('/js/jquery-3.2.1.min.js', function () {
            loadjs('/js/jquery.magnific-popup.min.js', function () {
                loadjs('/js/jquery.backstretch.min.js', function () {
                    loadjs('/slick/slick.min.js', function () {});
                });
            });
        });
    }, []);
  };

  export default useJqueryHook;