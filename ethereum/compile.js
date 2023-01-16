// const path = require('path');
// const solc = require('solc');
// const fs = require('fs-extra');

// const buildPath = path.resolve(__dirname, 'build');
// console.log('Deleting build folder...');
// fs.removeSync(buildPath);

// console.log('Getting contract by path...')
// const campaignPath = path.resolve(__dirname, 'contracts', 'Record.sol');
// const source = fs.readFileSync(campaignPath, 'utf8');

// var input = {
//     language: 'Solidity',
//     sources: {
//         'Record.sol' : {
//             content: source
//         }
//     },
//     settings: {
//         outputSelection: {
//             '*': {
//                 '*': [ '*' ]
//             }
//         }
//     }
// };

// var output = JSON.parse(solc.compile(JSON.stringify(input)));

// output = output.contracts['Record.sol'];

// //will search for the folder to ensure it exists
// //and if not, will make one

// fs.ensureDirSync(buildPath);

// for (let contract in output){
//   fs.outputJsonSync(
//     path.resolve(buildPath, contract.replace('.sol','') + '.json'), output[contract]
//   );
// }