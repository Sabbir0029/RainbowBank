import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";


const Initialize = () =>{
    initializeApp(firebaseConfig);
}

export default Initialize;