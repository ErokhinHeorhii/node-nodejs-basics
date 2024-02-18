import fs, { access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FOLDER_PATH = path.join(__dirname, 'files');
const COPIED_FOLDER_PATH = path.join(__dirname, 'files_copy');


const isFolderExist = async (path) => {
    try {
        await access(path, fs.constants.F_OK);
        return true;
    } catch(e) {
        return false;
    }
};

const copy = async () => {
    const funPredicate = !await isFolderExist(FOLDER_PATH) || await isFolderExist(COPIED_FOLDER_PATH);
    if (!!funPredicate) {
        throw new Error('FS operation failed');
    }
    const [data] = await Promise.all([ fs.readdir(FOLDER_PATH), fs.mkdir(COPIED_FOLDER_PATH)]);
    const copied_files = data.map(file => fs.copyFile(path.join(FOLDER_PATH,file), path.join(COPIED_FOLDER_PATH, file)));
    await Promise.all(copied_files);
};

await copy();
