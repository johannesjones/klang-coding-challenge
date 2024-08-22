module.exports = {
    preset: "ts-jest",
    testEnvironment: "jest-environment-jsdom", // Reference the installed package
    testEnvironmentOptions: {
        customExportConditions: [""],
    },
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest", // Transpile TypeScript files
        "^.+\\.(js|jsx)$": "babel-jest", // Transpile JavaScript files
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Setup file if needed
    testPathIgnorePatterns: [
        "/node_modules/",
        "/.next/",
        "__tests__/isr.test.tsx",
        "__tests__/ssr.test.tsx",
    ], // Ignore specific folders
    moduleNameMapper: {
        "/^@/(.*)$/": "<rootDir>/app/$1", // Map alias `@` to the `app` directory
    },
    transformIgnorePatterns: ["/node_modules/"], // Ignore transformations in node_modules
    moduleDirectories: ["node_modules", "app"], // Resolve modules from both `node_modules` and `app`
    collectCoverageFrom: ["app/**/*.{ts,tsx}"], // Collect coverage from the `app` folder
};
