export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest' 
    },
    collectCoverage: true,
    moduleNameMapper: {
        '\\.css$': 'identity-obj-proxy'
    },
    setupFilesAfterEnv: [
        "<rootDir>/setupTests.js"
     ]
}