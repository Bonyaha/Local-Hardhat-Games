// replace the name of the contract with which one you want to deploy!
const contractName = "Game3";

async function main() {
  const Game = await hre.ethers.getContractFactory(contractName);
  // if you need to add constructor arguments for the particular game, add them here:
  const game = await Game.deploy();
    
  console.log(`${contractName} deployed to address: ${game.target}`);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });