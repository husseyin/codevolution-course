import { getSession, signIn } from "next-auth/react";
import { useState, useEffect } from "react";

// session yoksa, giriş yapılmamışsa kullanıcı giriş ekranına yönlensin
const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = async () => {
      // session değerlerini çekiyoruz
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>Dashboard Page</h1>
    </>
  );
};

export default Dashboard;
