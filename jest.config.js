module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
};
