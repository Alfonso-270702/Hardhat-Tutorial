import { ethers } from "hardhat";

async function main() {
  var factory = await ethers.getContractFactory("SchoolManagement");
  var SchoolManagement = await factory.deploy();

  console.log("Contract deployed to:", await SchoolManagement.getAddress());
}

main();
