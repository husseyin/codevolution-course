// import Image from "next/image";

const PetsPage = () => {
  return (
    <>
      {/* tüm resimleri göstermek için */}
      <div>
        {/* tüm resimlerin isimlerini bir dizi içerisine attık */}
        {["1", "2", "3", "4", "5"].map((path) => {
          // dizi içerisini map ile gezdik
          return (
            //   kural gereği div etiketine key verdik
            <div key={path}>
              {/* src yani dosya yolu olarak path ve uzantı olarak jpg verdik */}
              {/* public klasöründe olduğundan /1.jpg olarak erişebiliriz */}
              
              {/* her resimin indirme boyutu yüksek gelirken örn:10KB
                köprü görevindeyken sayfanın refresh olması gerekir */}
              {/* <img src={`/${path}.jpg`} alt="pet" width="280" height="420" /> */}
              
              {/* burada resim boyutları düzenlenerek daha düşük gelir örn:10B
                köprü görevindeyken sayfa refresh olmadan çalışır */}
              {/* <Image src={`/${path}.jpg`} alt="pet" width="280" height="420" /> */}
              Pets
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PetsPage;
