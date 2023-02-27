const { ethers } = require("ethers");

let goerli = '0x98Fc7D95BB5D7FBacb4C3C43cCc468c784EfCeA6';
let mumbai = '0xd249940F911f44260B5F118B3D3526e5D96f6803';

let x = ethers.utils.solidityPack(
    ['address', 'address'],
    [goerli,mumbai]
)

let y = ethers.utils.solidityPack(
    ['address', 'address'],
    [mumbai,goerli]
)

let z = ethers.utils.solidityPack(["uint16", "uint256"], [1, 1171384621311]);
console.log(ethers.utils.formatEther(1927222673898) + ' ethers');

console.log(x);
console.log(y);
console.log(z);
console.log()