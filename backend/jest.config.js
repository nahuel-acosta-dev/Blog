/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ["**/**/*.test.ts"],
    verbose: true,
    testTimeout: 30000,
    forceExit: true,
    //clearMocks: true
}