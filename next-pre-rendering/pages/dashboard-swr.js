//SWR için, npm add swr
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch(`http://localhost:4000/dashboard`);
  const data = await response.json();

  return data;
};

//db.json datasında değer değişikliği yapıldığı zaman 
//dashboard.js sayfa yenilenmeyene kadar değişikliği algılayamacaktır ancak 
//dashboard-swr.js değişikliği hemen yansıtır
const DashboardSWR = () => {
  const { data, error } = useSWR("dashboard", fetcher);

  if (error) return "An error has occured";
  if (!data) return "Loading..";

  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following - {data.following}</h2>
    </div>
  );
};

export default DashboardSWR;
