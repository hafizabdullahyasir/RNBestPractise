
export default function (api) {
    api.cache(true);
    return {
      presets: [
        [
          "babel-preset-expo",
          {
            jsxImportSource: "@welldone-software/why-did-you-render",
          },
        ],
      ],
    };
  };