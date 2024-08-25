import CommentForm from "./form";
import CommentList from "./list";
import useComments from "../../hooks/useComment";

export default function Comment() {
  const { text, setText, comments, onSubmit, onDelete } = useComments();

  return (
    <div className="my-10">
      <h2 className="text-xl my-2 font-sans font-bold">Comments</h2>
      <CommentForm onSubmit={onSubmit} text={text} setText={setText} />
      <CommentList comments={comments} onDelete={onDelete} />
    </div>
  );
}
