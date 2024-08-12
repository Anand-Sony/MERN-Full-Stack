import { useSearchParams } from "react-router-dom";

const PostList = ()=>{

    const [searchParams , setSearchParams] = useSearchParams();
    const filterValue = searchParams.get("filter");
    console.log(filterValue);

    return (
        <div>
            <h1> {filterValue==="latest" ? "Latest Post Details" : "All Post Details"} </h1>
            <p>Post 1</p>
            <p>Post 2</p>
            <p>Post 3</p>

            <button onClick={() => setSearchParams({filter : "latest"})} > Latest Post </button>
            <button onClick={() => setSearchParams({})} >Reset</button>
        </div>
    )
};
export default PostList;