module.exports = async function (taskArgs, hre) {
    // get local contract
    const localContractInstance = await ethers.getContract(taskArgs.contract)

    try {
        let tx = await (await localContractInstance.setMinDstGas(10121, parseInt(await localContractInstance.FUNCTION_TYPE_SEND()), 80000)).wait();
        console.log(` tx: ${tx.transactionHash}`)
    } catch (e) {
        console.log(e)
    }
}
