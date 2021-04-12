import React, { useContext, useEffect, useState } from 'react';

import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
} 

export function AuthProvider( {children} ){
    
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password, username) {
        return auth.createUserWithEmailAndPassword(email, password)
                    .then( () => {
                        updateUsername(username);
                    });
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }
    
    function logout() {
        return auth.signOut();
    }

    function updateUsername(username){
        var user = auth.currentUser;

        user.updateProfile({ displayName : username, photoURL : null 
        }).then(() => { 
            console.log('Profile completed');
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect( () => {
        const unsubscribe = auth.onAuthStateChanged( (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        setCurrentUser,
        signup,
        login,
        logout
    };

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}