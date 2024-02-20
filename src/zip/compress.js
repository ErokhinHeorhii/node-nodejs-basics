import fs from 'fs';
import path from 'node:path';
import { createGzip } from 'zlib';
import { fileURLToPath } from 'node:url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file_to_comp = path.join(__dirname, 'files', 'fileToCompress.txt');
const archive_file = path.join(__dirname, 'files', 'archive.gz');


const compress = async () => {
    const readStream = fs.createReadStream(file_to_comp);
    const writeStream = fs.createWriteStream(archive_file);
    const gzip = createGzip();
    readStream.pipe(gzip).pipe(writeStream);
};

await compress();
