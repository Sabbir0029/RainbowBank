import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged, signOut,signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
import Initialize from "../Pages/Authentication/Firebase/Initialize";

Initialize()
const useFirebase = () =>{
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const GoogleProvider = new GoogleAuthProvider();
  // register function
  const register =(email, password,history)=>{
    setIsLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        saveUser(email, 'POST')
        history.replace('/Profile');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(()=> setIsLoading(false));
  }

  // 
  const signInWithGoogle = (location, history) =>{
    setIsLoading(true);
    signInWithPopup(auth, GoogleProvider)
    .then((result) =>{
      const user = result.user;
      saveUser(user.email, 'PUT');
      const destination = location?.state?.from || '/Profile';
         history.replace(destination);
    })
    .catch((error) =>{
      setError(error.message);
    }).finally(()=> setIsLoading(false));
  }
  // LogIn User Function
  const loginUser = (email,password,location, history)=>{
    setIsLoading(true)
      signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
         const destination = location?.state?.from || '/Profile';
         history.replace(destination);
       })
       .catch((error) => {
        setError(error.message);
       })
       .finally(()=> setIsLoading(false));
  }

  // On Auth State Changed
  useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              setUser(user);
          } else {
              setUser({});
          }
          setIsLoading(false)
        });
        return () => unSubscribe;
  },[])

  // 

  useEffect(()=>{
    fetch(`https://hidden-castle-66023.herokuapp.com/users/${user.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.admin))
  },[user.email])

  // LogOut function
  const logOut = ()=>{
    setIsLoading(true)
      signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        })
        .finally(()=> setIsLoading(false));
  }
  const saveUser = (email, method)=>{
    const user = {email,};
    fetch('https://hidden-castle-66023.herokuapp.com/users',{
      method: method,
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then()

  }

    return {
      user,
      isLoading,
      error,
      admin,
      signInWithGoogle,
      register,
      logOut,
      loginUser,
    }
}
export default useFirebase;