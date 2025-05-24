import { loadJsonFile } from '../core/json';
import path from 'path';

export async function viewCommand(filePath: string): Promise<void> {
  const resolvedPath = path.resolve(filePath);

  try {
    const data = await loadJsonFile(resolvedPath);
    console.log(JSON.stringify(data, null, 2));
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Unknown error occurred';
    console.error(`Failed to view JSON: ${message}`);
    process.exit(1);
  }
}
