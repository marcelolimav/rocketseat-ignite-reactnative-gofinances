module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],

    plugins: [
      ["inline-dotenv"],
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@global": "./src/global",
            "@assets": "./src/assets",
            "@utils": "./src/utils",
            "@routes": "./src/routes",
            "@hooks": "./src/hooks",
          },
        },
      ],
    ],
  };
};
