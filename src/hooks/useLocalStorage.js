import { useState } from 'react';


const useLocalStorage = (key, initialValue) => {

    // check if it's in localstorage
    const [state, setState] = useState(() => {
        try {
            let item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch(err) {
            console.log(err);
            return initialValue;
        }
    });

    const setItem = (value) => {
        try {
            // save to localStorage
            localStorage.setItem(key, JSON.stringify(value));

            // save to state
            setState(value);

        } catch(err) {
            console.log(err);
        }
    };

    return [
        state,
        setItem
    ];
};

export default useLocalStorage;