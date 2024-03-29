import { getSession } from "next-auth/react";

// api üzerinden asenkron olarak session kontrolü yaptık
const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ error: "Unauthenticated User!" });
  } else {
    res.status(200).json({ message: "Success", session });
  }
};

export default handler;
