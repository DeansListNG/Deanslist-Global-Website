import { TransactionBuilder, Umi, base58, signerIdentity } from "@metaplex-foundation/umi";
import { WalletContextState } from "@solana/wallet-adapter-react";
import { createSignerFromWalletAdapter } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { setComputeUnitPrice } from "@metaplex-foundation/mpl-toolbox";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { TransactionError, SendTransactionError, Connection } from "@solana/web3.js";

type ConfirmationResponse = {
  value: {
    err: TransactionError | null;
  };
};

export async function sendAndConfirmWithWalletAdapter(
  tx: TransactionBuilder,
  umi: Umi,
  wallet: WalletContextState,
  settings?: {
    commitment?: "processed" | "confirmed" | "finalized";
    network?: WalletAdapterNetwork;
    skipPreflight?: boolean;
  }
): Promise<{ signature: Uint8Array; confirmation: ConfirmationResponse }> {
  try {
    if (!wallet.publicKey) {
      throw new Error('Wallet public key is required');
    }

    // Log the wallet address (public key) before doing any functionality
    console.log("Wallet Address:", wallet.publicKey.toString());

    // Create signer from wallet adapter
    const signer = createSignerFromWalletAdapter(wallet);
    const umiWithSigner = umi.use(signerIdentity(signer));

    // Get latest blockhash
    const blockhash = await umiWithSigner.rpc.getLatestBlockhash();
    
    // Build transaction with compute unit price and blockhash
    const transaction = tx
      .prepend(setComputeUnitPrice(umiWithSigner, { microLamports: BigInt(100000) }))
      .setBlockhash(blockhash);

    // Build and sign transaction
    const signedTx = await transaction.buildAndSign(umiWithSigner);

    // Send transaction with skipPreflight: false (default)
    const signature = await umiWithSigner.rpc.sendTransaction(signedTx, {
      commitment: settings?.commitment || "confirmed",
      skipPreflight: true, // Ensure this is false for preflight check
    });

    // Log the transaction signature (Transaction ID)
    console.log("Transaction sent. Signature:", signature);

    // Confirm transaction
    const confirmation = await umiWithSigner.rpc.confirmTransaction(signature, {
      strategy: { type: "blockhash", ...blockhash },
      commitment: settings?.commitment || "confirmed",
    });

    if (confirmation.value.err) {
      throw new Error(`Transaction failed: ${confirmation.value.err}`);
    }

    return {
      signature: Uint8Array.from(base58.deserialize(signature)[0]),
      confirmation,
    };
  } catch (error) {
    const connection = new Connection("https://api.mainnet-beta.solana.com");

    if (error instanceof SendTransactionError) {
      // Catch SendTransactionError and retrieve logs
      const logs = await error.getLogs(connection);
      console.error('Transaction failed with logs:', logs);
    } else {
      console.error('Transaction failed:', error);
    }
    throw error;
  }
}