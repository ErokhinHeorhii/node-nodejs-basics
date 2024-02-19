import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file_to_read = path.join(__dirname, 'files', 'fileToRead.txt');
const read = async () => {
        const readStream = createReadStream(file_to_read);
        readStream.on('data', (chunk) => {
            process.stdout.write(chunk);
        });
        readStream.on('end', () => {
            process.stdout.write('\n');
        });
        readStream.on('error', (err) => {
            console.error(err);
        });
};

await read();
