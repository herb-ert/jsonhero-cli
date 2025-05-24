import { promises as fs } from 'fs';
import path from 'path';

export async function loadJsonFile<T = unknown>(filePath: string): Promise<T> {
  const resolvedPath = path.resolve(filePath);

  try {
    const content = await fs.readFile(resolvedPath, 'utf-8');
    return JSON.parse(content);
  } catch (error: Error | any) {
    if (error.code === 'ENOENT') {
      throw new Error(`File not found: ${resolvedPath}`);
    }

    if (error instanceof SyntaxError) {
      throw new Error(`Invalid JSON in file: ${resolvedPath}`);
    }

    throw new Error(`Error reading or parsing JSON from ${resolvedPath}: ${error.message}`);
  }
}
