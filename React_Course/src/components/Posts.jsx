import { useState , useEffect } from "react";
import axios from "axios";

const Posts = ()=>{
    const [posts , setPosts] = useState([]);

    useEffect(()=>{    //useEffect :-1st parameter = callback function & 2nd parameter = array []
        async function fetchPosts(){
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            //console.log(response);
            setPosts(response.data);
        }
        fetchPosts();
    } , [])

    return(
        <div>
            <h2>Posts Lists</h2>
            {posts.map((post)=>(
                <div key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <hr />
                </div>
            ))}
        </div>
    )
};
export default Posts;
