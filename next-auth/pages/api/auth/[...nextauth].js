import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

// github ile giriş yapabilmesini sağlaya bilmek için
// providers kullanarak clientId ve clientSecret değerlerini veriyoruz
// clientId ve clientSecret değerlerini, github hesabı üzerinden,
// Settings/ Developer settings/ NextAuth
// github hesabı üzerinden alınan client değerleri önemli ve gizli olması gereken
// değerler olduğu için .env.local dosyası üzerinden aldık
export default NextAuth({
  providers: [
    // http://localhost:3000/api/auth/signin
    // gelen button ile github üzerinden giriş yaptıktan sonra
    // cookie kısmında jwt olarak token veriyor olacak ve anasayfaya yönlendirecek
    // http://localhost:3000/api/auth/signout
    // gelen button ile github üzerinden çıkış yapılacak jwt silinecek
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  //mongodb bağlantısı ve jwt tanımlaması
  database: process.env.MONGODB_URL,
  session: {
    jwt: true,
  },
  jwt: {
    secret: "huseyinniyesuh",
  },
  // callbacks: {
  //   async jwt(token, user) {
  //     if (user) {
  //       token.id = user.id;
  //     }
  //     return token;
  //   },
  //   async session(session, token) {
  //     session.user.id = token.id;
  //     return session;
  //   },
  // },
});

// MONGODB BAĞLANTISI İÇİN GEREKENLER!
// database bağlantısı için mongodb atlas kullandık
// monbodb atlas sitesi üzerinden giriş yaptıktan sonra
// sol taraftan DatabaseAccess menüsünü seçip,
// gelen ekranda hangi bölgede yayınlanacağını seçiyoruz,
// sonrasında AddNewDatabaseUser butonu ile
// database kullanıcı ekliyoruz,
// kullanıcı adı ve şifre belirledikten sonra geriye network kalıyor,
// sol taraftan NetworkAccess seçerek gelen ekranda Allow seçeneği ile
// IP olarak 0.0.0.0/0 otomatik atacaktır

// bu bilgileri .env.local dosyası içerisine DB_USER, DB_PASSWORD ve DB_URL olarak
// eklememiz gerekiyor ama DB_URL kısmını MongoDb üzerinden sol tarafta
// en üstte yer alan DEPLOYMENT altında Database seçeneğine gelerek
// Connect butonuyla ConnectYourApplication seçeneği ile ekrana gelen
// bağlantı stringini kopyalıyoruz, burada user, <password> ve database
// adını değiştirebiliriz. Bunalrı tamamladıktan sonra providers altına ekliyoruz
