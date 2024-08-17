import UseList from "./hooks/UseList";
const url = "https://jsonplaceholder.typicode.com/posts";
const initialState = {
    loading : true,
    posts : [],
    error : "",
};
const PostListWithCustomHook = ()=>{
    const state = UseList(url , initialState);
    return (
        <div>
            {state.loading ? (
                <h3>Loading...</h3>
            ) : state.error ? (
                <h3>{state.error}</h3>
            ) : (
                state.posts.map((post)=>{
                    return (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <hr />
                        </div>
                    )
                })
            )}
        </div>
    )
}
export default PostListWithCustomHook;