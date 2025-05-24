import { mkdirSync, rmSync, writeFileSync } from 'fs';
import path from 'path';
import { loadJsonFile } from '../src/core/json';

const testDir = path.resolve(__dirname, 'tmp');
const testFile = path.join(testDir, 'test.json');

beforeAll(() => {
  mkdirSync(testDir, {recursive: true});
  writeFileSync(testFile, JSON.stringify({hello: 'world'}));
});

afterAll(() => {
  rmSync(testDir, {recursive: true, force: true});
});

test('loads valid JSON', async () => {
  const data = await loadJsonFile(testFile);
  expect(data).toEqual({hello: 'world'});
});

test('throws on invalid path', async () => {
  await expect(loadJsonFile('nonexistent.json')).rejects.toThrow(/File not found/);
});

test('throws on invalid JSON syntax', async () => {
  const invalidFile = path.join(testDir, 'bad.json');
  writeFileSync(invalidFile, '{ bad json }');
  await expect(loadJsonFile(invalidFile)).rejects.toThrow(/Invalid JSON/);
});
