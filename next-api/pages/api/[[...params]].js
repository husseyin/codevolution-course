//[...params] olduğu zaman localhost:3000/api olarak girildiğinde
//eğer index.js dosyası yoksa 404 hatası verir
//çözüm, [[...params]] olarak değiştirmek

const handler = (req, res) => {
  const params = req.query.params;
  console.log(params);
  res.status(200).json(params);
};

export default handler;
