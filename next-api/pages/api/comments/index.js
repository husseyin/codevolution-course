import { comments } from "../../../data/comments";

//comments.js dosyası üzerinden dataları çekip apimize verdik
const handler = (req, res) => {
  //GET ve POST işlemleri olarak ayırt ettik
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    //post edilen commenti aldık
    const comment = req.body.comment;
    //yeni commenti ekleyebilmek için gerekli alanları verdik
    const newComment = {
      id: Date.now(),
      text: comment,
    };

    //comments commentse yeni commenti gönderdik
    comments.push(newComment);

    //201 kodu ile eklendiğini onayladık
    res.status(201).json(newComment);
  }
};

export default handler;
