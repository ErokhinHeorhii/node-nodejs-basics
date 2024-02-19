import fs from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file_path = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
const hashFor = createHash('sha256');

console.log(__filename, __dirname)
const calculateHash = async () => {
    try {
        const input = await fs.readFile(file_path, 'utf8');
        const hashFor = createHash('sha256')
        hashFor.update(input)
        const digest = hashFor.digest('hex');
        console.log(digest)
    } catch (err) {
        console.error(err);
    }
};

await calculateHash();
