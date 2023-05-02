import { useReducer } from 'react';
import { types } from './authTypes';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

const localStorageKey = 'user';

const init = () => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem(localStorageKey));

    return {
        logged: !!userFromLocalStorage,
        user: userFromLocalStorage
    };
}

export const AuthProvider = (props) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = (name = '') => {
        const user = { id: 'ABC', name: name };

        const action = { type: types.login, payload: user, };

        localStorage.setItem(localStorageKey, JSON.stringify(user));

        dispatch(action);
    };

    const logout = () => {
        localStorage.removeItem(localStorageKey);

        const action = { type: types.logout };
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login: login,
            logout: logout,
        }} >
            {props.children}
        </AuthContext.Provider>
    );
}
