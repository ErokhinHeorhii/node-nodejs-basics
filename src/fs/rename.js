import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE_WRONG = path.join(__dirname, 'files', 'wrongFilename.txt');
const FILE_RIGHT = path.resolve(__dirname, 'files', 'wrongFilename.txt');

const isExist = async (path) => {
    try {
        await fs.access(path);
        return true;
    } catch(e) {
        return false;
    }
};

const rename = async () => {
    if(!await isExist(FILE_WRONG) || await isExist(FILE_RIGHT)) {
        throw new Error('FS operation failed');
    }
    await fs.rename(FILE_WRONG, FILE_RIGHT);
};

await rename();
