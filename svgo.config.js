export default {
  multipass: true,
  plugins: [
    "removeMetadata",
    "removeComments",
    "removeDimensions",
    "cleanupAttrs",
    "mergePaths",
    {
      name: "convertPathData",
      params: { floatPrecision: 2 },
    },
  ],
};
