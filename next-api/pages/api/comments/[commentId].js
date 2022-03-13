import { comments } from "../../../data/comments";

const handler = (req, res) => {
  //req ile seçilen id değerini çektik
  const { commentId } = req.query;

  if (req.method === "GET") {
    //id değerini database üzerinden aradık ve tanımlı commenti bulduk
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );

    //bulduğumuz commenti onaylayık
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    //id değerine göre silinecek comment bulundu
    const deleteComment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );

    //index değeri üzerinden silme işlemi yaptık
    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );
    //id değerinden başlayıp bir tane sil
    comments.splice(index, 1);

    //onaylandığını belirttik
    res.status(200).json(deleteComment);
  }
};

export default handler;
