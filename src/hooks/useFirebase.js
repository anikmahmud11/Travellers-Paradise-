import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../pages/Login/Login/Firebase/firebase.init';
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const[isLoading, setIsLoading] = useState(true)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider);
            

    }
    const logOut=()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=>setIsLoading(false));
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false);
        });
    }, [])
    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut
        
    }

}
export default useFirebase;