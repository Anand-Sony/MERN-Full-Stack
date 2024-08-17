import { useEffect , useReducer } from "react"
import axios from "axios";

const initialState = {
    loading : true,
    posts : [],
    error : "",
};

const reducer = (state , action) =>{
    switch(action.type){
        case "SUCCESS":
            return {
                loading : false,
                posts : action.data,
                error : "",
            };
        case "ERROR":
            return {
                loading : false,
                posts : [],
                error : action.message,
            };
        default : 
            return state;
    };
};

const PostListWithReducer = ()=>{
    const [state , dispatch] = useReducer(reducer , initialState);

    useEffect(()=>{
        async function fetchPosts(){
            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                dispatch({type : "SUCCESS" , data : response.data})
            }
            catch(error){
                dispatch({type : "ERROR" , message : error.message})
            }
        }
        fetchPosts();
    } , []);

    return (
        <div>
            {state.loading ? (
                <h3>Loading...</h3>
            ) : state.error ? (
                <h3>{state.error}</h3>
            ) : (
                state.posts.map((post)=>{
                    return(
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <hr />
                        </div>
                    );
                })
            ) }
        </div>
    )
};
export default PostListWithReducer;