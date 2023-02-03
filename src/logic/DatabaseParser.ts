import { parentPort, workerData } from "worker_threads";
import { Parser } from "@dbml/core";

export default class DatabaseParser {
  parse() {
    const databaseObject = Parser.parse(workerData.content, 'dbml');
    const schemas = databaseObject.schemas.map((item) => {
      return {
        name: item.name,
        tables: item.tables.map((table) => table.name),
      };
    });
    const result = {
      name: databaseObject.name,
      schemas,
    }
    console.log('parser results\n', result)
    return parentPort.postMessage(result);
  }
}

// const { Worker } = require('worker_threads');

// const parse = (content) => {
//   return new Promise((resolve, reject) => {
//     const workerPath = `${__dirname}/parserWorker.js`;

//     const worker = new Worker(workerPath, {
//       workerData: { content },
//     });
//     worker.on('message', resolve);
//     worker.on('error', reject);
//     worker.on('exit', (code) => {
//       if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
//     });
//   });
// };

// module.exports = parse;
