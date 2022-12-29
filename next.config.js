module.exports = {
  async redirects() {
    return [
      {
        source: "/games",
        destination: "https://serenityux.github.io/EpochGames",
        permanent: false,
      },
    ];
  },
};
