import { useState } from "react";
import { useRouter } from "next/router";

//eventList olarak gelen veriyi yakaladık
const EventList = ({ eventList }) => {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  //sayfayı refresh etmeden fetch ile verileri çektik
  const fetchSportsEvents = async () => {
    const response = await fetch(
      `http://localhost:4000/events?category=Sports`
    );
    const data = await response.json();

    //setEvent ile events değişkenine eventList atama yapılıyor
    setEvents(data);
    router.push("/events?category=Sports", undefined, { shallow: true });
  };

  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h1>List of Events</h1>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} {event.title} {event.date} | {event.category}
            </h2>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default EventList;

//sayfa refresh olduğunda category olmadığı için tüm dataları çekecek
//eğer category varsa ise dataları filtreleyerek çekecek
export const getServerSideProps = async (context) => {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=Sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  //filtrelenmiş veya saf datayı eventList olarak geri döndürüyor
  return {
    props: {
      eventList: data,
    },
  };
};
