import { comments } from "../../data/comments";

const Comment = ({ comment }) => {
  return (
    <>
      <div>
        {comment.id} {comment.text}
      </div>
    </>
  );
};

export default Comment;

export const getStaticPaths = async () => {
  const paths = comments.map((comment) => {
    return {
      params: {
        commentId: comment.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };

  //   return {
  //     paths: [
  //       { params: { commentId: "1" } },
  //       { params: { commentId: "2" } },
  //       { params: { commentId: "3" } },
  //     ],
  //     fallback: false,
  //   };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { commentId } = params;

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  console.log(comment);

  //eğer fetch ile veriyi yakalamaya kalksaydık localhost:3000
  //üzerinde çalıştığı için npm run build ederken verileri görmeyecekti
  //bu nedenle de proje build edilemeyecek ve deploy işlemi olmayacaktı

  //   const response = await fetch(
  //     `http://localhost:3000/api/comments/${commentId}`
  //   );
  //   const data = response.json();

  return {
    props: { comment },
  };
};
