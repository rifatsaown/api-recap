import { iPost } from "../../shared/types";

const PostLoad = (props: Object) => {
  const { title, body, userId } = props as iPost;
  return (
    <div style={{ background: "lightgray", padding: "2rem", margin: "2rem" }}>
      <h3>Title : {title} </h3>
      <p>User Id : {userId} </p>
      <p>Body : {body} </p>
    </div>
  );
};

export default PostLoad;
