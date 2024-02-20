import fs from 'fs';
import path from 'node:path';
import { createGunzip } from 'zlib';
import { fileURLToPath } from 'node:url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file_to_comp = path.join(__dirname, 'files', 'fileToCompress.txt');
const archive_file = path.join(__dirname, 'files', 'archive.gz');



const decompress = async () => {
    const writeStream = fs.createWriteStream(file_to_comp);
    const readStream = fs.createReadStream(archive_file);
    const unZip = createGunzip();
    readStream.pipe(unZip).pipe(writeStream)
};

await decompress();
