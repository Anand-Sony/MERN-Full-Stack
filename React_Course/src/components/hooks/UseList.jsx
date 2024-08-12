import { useEffect , useReducer } from "react";
import axios from "axios";

const reducer  = (state , action)=>{
    switch(action.type){
        case "SUCCESS":
            return {
                loading : false,
                posts : action.data,
                error : "",
            }
        case "ERROR":
            return {
                loading : false,
                posts : [],
                error : action.message,
            }
        default : 
            return state;
    }
};
const UseList = (url , initialState)=>{
    const [state , dispatch] = useReducer(reducer , initialState);
    useEffect(()=>{
        async function fetchPosts(){
            try{
                const response = await axios.get(url);
                dispatch({type : "SUCCESS" , data : response.data})
            }
            catch(error){
                dispatch({type : "ERROR" , message:error.message})
            }
        }
        fetchPosts();
    } , [url]);
    return state;
};
export default UseList;