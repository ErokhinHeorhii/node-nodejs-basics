import path from 'node:path'
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FOLDER_PATH = path.join(__dirname, 'files');
const FILE_PATH = path.join(FOLDER_PATH, 'fileToWrite.txt');


const write = async () => {
    const writeStream = fs.createWriteStream(FILE_PATH)
    process.stdin.pipe(writeStream);
    writeStream.on('finish', () => {
        console.log('File written OK.');
    });
    writeStream.on('error', (err) => {
        console.error(err.message);
    });
};

await write();
