import { FC, useReducer, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';

import Cookies from 'js-cookie';
import axios from 'axios';

import { authDemoApi } from '../../api';
import { AuthContext, authReducer } from '.';
import { IUser } from '../../interfaces';

export interface AuthState {
    isLoggedIn: boolean;
    user?: IUser;
}

const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined,
}

interface Props {
    children?: React.ReactNode
}

export const AuthProvider:FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( authReducer, AUTH_INITIAL_STATE );
    const { data, status } = useSession();

    useEffect(() => {
      if ( status === 'authenticated' ) {
        dispatch({ type: '[Auth] - Login', payload: data?.user as IUser })
      }
    
    }, [ status, data ])
    

    const loginUser = async( email: string, password: string ): Promise<boolean> => {
        try {
            const { data } = await authDemoApi.post('/user/login', { email, password });
            const { token, user } = data;
            Cookies.set('token', token );
            dispatch({ type: '[Auth] - Login', payload: user });
            return true;
        } catch (error) {
            return false;
        }

    }


    const registerUser = async( name: string, email: string, password: string ): Promise<{hasError: boolean; message?: string}> => {
        try {
            const { data } = await authDemoApi.post('/user/register', { name, email, password });
            const { token, user } = data;
            Cookies.set('token', token );
            dispatch({ type: '[Auth] - Login', payload: user });
            return {
                hasError: false
            }

        } catch (error) {
            if ( axios.isAxiosError(error) ) {
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }

            return {
                hasError: true,
                message: 'No se pudo crear el usuario - intente de nuevo'
            }
        }
    }


    const logout = () => {
        Cookies.remove('firstName');
        Cookies.remove('lastName');
        Cookies.remove('address');
        Cookies.remove('address2');
        Cookies.remove('zip');
        Cookies.remove('city');
        Cookies.remove('country');
        Cookies.remove('phone');
        
        signOut();
    }



    return (
        <AuthContext.Provider value={{
            ...state,
            loginUser,
            registerUser,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
};