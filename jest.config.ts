// jest.config.ts
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleNameMapper: {
    '^@/components(.*)$': '<rootDir>/src/components$1',
    '^@/pages(.*)$': '<rootDir>/src/pages$1',
    '^@/layouts(.*)$': '<rootDir>/src/layouts$1',
    '^@/containers(.*)$': '<rootDir>/src/containers$1',
  },
  collectCoverageFrom: ['src/*/*.{ts,tsx}'],
};
export default config;
