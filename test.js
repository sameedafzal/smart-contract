const { ethers } = require("ethers");

let goerli = '0x9EE37a653De40Fb31f9148b1f2E7129A9A438889';
let mumbai = '0x2863A7cb0B6c4f8a4CD6246CcA7254fb8783d5c5';


let x = ethers.utils.solidityPack(
    ['address', 'address'],
    [goerli,mumbai]
)

let y = ethers.utils.solidityPack(
    ['address', 'address'],
    [mumbai,goerli]
)


console.log('setRemoteMumbai: ' + x);
console.log('setRemoteGoerli: ' + y);


// add value from estimateFee Function
let estimate = 747747698479;
let z = ethers.utils.solidityPack(["uint16", "uint256"], [1, estimate]);

console.log('adapterParams: ' + z);
console.log('estimateFee: ' + ethers.utils.formatEther(estimate) + ' ethers');