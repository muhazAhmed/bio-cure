module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
};
