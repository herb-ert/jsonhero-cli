import { promises as fs } from 'fs';

export async function loadJsonFile(filePath: string): Promise<unknown> {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (error: Error | any) {
    throw new Error(`Error reading or parsing JSON from ${filePath}: ${error}`);
  }
}
