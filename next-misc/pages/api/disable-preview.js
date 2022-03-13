export default function handler(req, res) {
  // preview modu aktif hale getirdik
  // şimdi ise amaç preview modu devredışı bırakmak

  res.clearPreviewData();
  res.end("Preview mode disabled!");
}
