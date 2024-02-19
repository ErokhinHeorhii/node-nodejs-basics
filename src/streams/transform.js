import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {Transform} from 'stream';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const transform = async () => {
    const transformReverce = new Transform(
        {
            transform(chunk, encod, fn) {
                const reverce = chunk.toString().split('').reverse().join('')
                this.push(reverce)
                fn()
                console.log(reverce)
            }
        }
    )
    process.stdin.pipe(transformReverce).pipe(process.stdout);
    console.log(process.stdout)
};

await transform();
