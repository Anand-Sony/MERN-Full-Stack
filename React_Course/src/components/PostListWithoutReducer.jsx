import { useState , useEffect } from "react"
import axios from "axios";

const PostListWithoutReducer = ()=>{
    const [loading , setLoading] = useState(false);
    const [posts , setPosts] = useState([]);
    const [error , setError] = useState(null) ;

    useEffect(()=>{
        setLoading(true);

        async function fetchPosts(){
            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
                setPosts(response.data);
                setLoading(false)
            }
            catch(error){
                setError(error.message);
                setLoading(false);
            }
        }
        fetchPosts();
    } , []);

    return(
        <div>
            {loading ? (<h3> Loading... </h3> ) : error ? (<h3> {error} </h3>) : posts.map((post)=>{
                return (
                <div key={post.id}>
                    <h4> {post.title} </h4>
                    <p> {post.body} </p>
                    <hr />
                </div>
            )})}
        </div>
    )
};
export default PostListWithoutReducer;