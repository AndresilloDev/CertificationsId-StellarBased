import { Server, Networks } from "soroban-client";
import dotenv from "dotenv";

dotenv.config();

export const stellarConfig = {
  server: new Server(process.env.STELLAR_RPC_URL || "https://soroban-testnet.stellar.org"),
  network: Networks.TESTNET,
  contractId: process.env.CONTRACT_ID,
};
