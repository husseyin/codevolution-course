import { useState } from "react";

const CommentsPage = () => {
  //commentlerin ataması
  const [comments, setComments] = useState([]);

  //ilk comment ataması
  const [comment, setComment] = useState("");

  //comments loads
  const fetchComments = async () => {
    //GET
    const response = await fetch(`api/comments`);
    const data = await response.json();

    setComments(data);
    console.log(data);
  };

  //comment submit
  const submitComment = async () => {
    //POST
    const response = await fetch(`/api/comments`, {
      method: "POST",
      //comment : comment ile value'den gelen değeri aldık ve json çevirdik
      body: JSON.stringify({ comment }),
      //json olarak geldiğini belirttik
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    console.log(data);
  };

  //comment delete
  const deleteComment = async (commentId) => {
    //DELETE
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });

    const data = await response.json();
    //güncel listeyi gösterme için
    fetchComments();
    console.log(data);
  };

  return (
    <>
      {/* textbox içerisine yazılan değeri value ile gönderiyoruz */}
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button onClick={submitComment}>Submit Comment</button>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.id} {comment.text}
            {/* comment silme işlemi için her comment yanına buton ekledik */}
            <button onClick={() => deleteComment(comment.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default CommentsPage;
