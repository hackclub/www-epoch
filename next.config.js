module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        permanent: false,
        destination: "https://github.com/hackclub/epoch",
      },
      {
        source: "/games",
        destination: "https://serenityux.github.io/EpochGames",
        permanent: false,
      },
    ];
  },
};
