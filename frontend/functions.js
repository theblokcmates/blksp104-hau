const abi = [
    "function balanceOf(address _owner) public view returns (uint256 balance)",
    "function freeMint(address to, uint256 amount) public"
]

async function getBalance() {
    console.log('getBalance')
    const ethers = window.ethers;
    const signer = await window.provider.getSigner();
    const contract = new ethers.Contract("0xfa7df7b6b35f64d75ceb8f30062c2de4aca7bafc", abi, signer);

    const balance = await contract.balanceOf("0x83FE64Bc14b124f65Eb5249b9BA45b66e3eFFe4C")

    document.getElementById("balance").innerHTML = ethers.formatEther( balance )
    console.log('balance is', balance.toString());
}

async function freeMint() {
    const ethers = window.ethers;
    const signer = await window.provider.getSigner();
    const contract = new ethers.Contract("0xfa7df7b6b35f64d75ceb8f30062c2de4aca7bafc", abi, signer);

    const tx = await contract.freeMint("0x83FE64Bc14b124f65Eb5249b9BA45b66e3eFFe4C", "567000000000000000000");

    console.log('tx', tx);
}