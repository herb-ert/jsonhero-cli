import { loadJsonFile } from '../core/json';

export async function viewCommand(filePath: string) {
  try {
    const data = await loadJsonFile(filePath);
    console.log(JSON.stringify(data, null, 2));
  } catch (error: Error | any) {
    console.error(error.message);
    process.exit(1);
  }
}
