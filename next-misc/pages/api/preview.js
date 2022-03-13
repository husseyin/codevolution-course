export default function handler(req, res) {
  res.setPreviewData({ user: "Vishwas" });
  // res.end("Preview mode enabled.");

  // http://localhost:3000/api/preview?redirect=/news
  // news/index.js sayfasına yönlenir
  res.redirect(req.query.redirect);

  // bunları sayfanın application, cookies kısmı üzerinde görebiliriz
  // amaç preview modu aktif etmek
}
