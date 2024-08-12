import { useParams } from "react-router-dom";

const PostDetail = ()=>{
    const params = useParams();
    const postId = params.postId;

    return (
        <div>
            <h2>Post {postId} Detail</h2>
        </div>
    )
};
export default PostDetail;