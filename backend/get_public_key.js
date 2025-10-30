const StellarSdk = require("stellar-sdk");

// Tu seed phrase
const seed = "floor shuffle knife must oil intact door pledge panic addict danger energy film muscle parent menu much action merge beyond wrong once can slice";

const keypair = StellarSdk.Keypair.fromSecret(seed);
console.log("Public Key:", keypair.publicKey());
