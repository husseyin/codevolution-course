/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //redirects, yönlendirme kullanımı
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: false,

        //permanent:true => network, status code:308 Permanent Redirect
        //permanent:false => network, status code:307 Temporary Redirect
      },

      //eski bir link kullanılarak gidilmeye çalışıldığında
      //redirects ile yeni link üzerine yönlendirme verebiliriz
      {
        source: "/old-blog/:id",
        destination: "/new-blog/:id",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
