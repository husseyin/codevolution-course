//Client-side data fetching
//tarayıcı tarafında useEffect ile verileri çektik

import { useState, useEffect } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDasboardData] = useState(null);

  useEffect(() => {
    async function fetchDasboardData() {
      
      //localhost:4000 ile db.json dataları çalışabilmesi için
      //npm run serve-json yazıldıktan sonra projenin npm run dev edilmesi gerek
      const response = await fetch(`http://localhost:4000/dashboard`);
      const data = await response.json();
      setDasboardData(data);
      setIsLoading(false);
    }
    fetchDasboardData();
  }, []);

  if (isLoading) {
    return <h2>Loading..</h2>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {dashboardData.posts}</h2>
      <h2>Likes - {dashboardData.likes}</h2>
      <h2>Followers - {dashboardData.followers}</h2>
      <h2>Following - {dashboardData.following}</h2>
    </div>
  );
};

export default Dashboard;
