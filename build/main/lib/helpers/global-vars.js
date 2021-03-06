"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GLOBAL_VARS = void 0;
const TX_OVERHEAD_NVERSION = 4;
const TX_OVERHEAD_INPUT_COUNT = 1;
const TX_OVERHEAD_OUTPUT_COUNT = 1;
const TX_OVERHEAD_NLOCKTIME = 4;
const TX_INPUT_OUTPOINT = 36;
// scriptPubKey length (compactSize) The length of the scriptPubKey field. 1 vbyte for a script up to 252 vbytes. Maximum of 3 vbytes for a maximum-length script (10,000 vbytes).
const TX_INPUT_SCRIPTSIGLENGTH = 1;
const TX_INPUT_NSEQUENCE = 4;
const TX_OUTPUT_NVALUE = 8;
// scriptPubKey length (compactSize) The length of the scriptPubKey field. 1 vbyte for a script up to 252 vbytes. Maximum of 3 vbytes for a maximum-length script (10,000 vbytes).
const TX_OUTPUT_SCRIPTPUBKEYLENGTH = 1;
exports.GLOBAL_VARS = {
    TX_OVERHEAD_BASE: TX_OVERHEAD_NVERSION + TX_OVERHEAD_INPUT_COUNT + TX_OVERHEAD_OUTPUT_COUNT + TX_OVERHEAD_NLOCKTIME,
    TX_OVERHEAD_NVERSION: TX_OVERHEAD_NVERSION,
    TX_OVERHEAD_INPUT_COUNT: TX_OVERHEAD_INPUT_COUNT,
    TX_INPUT_BASE: TX_INPUT_OUTPOINT + TX_INPUT_SCRIPTSIGLENGTH + TX_INPUT_NSEQUENCE,
    TX_INPUT_OUTPOINT: TX_INPUT_OUTPOINT,
    TX_INPUT_SCRIPTSIGLENGTH: TX_INPUT_SCRIPTSIGLENGTH,
    TX_INPUT_NSEQUENCE: TX_INPUT_NSEQUENCE,
    TX_OVERHEAD_OUTPUT_COUNT: TX_OVERHEAD_OUTPUT_COUNT,
    // ecdsa_signature (72) (about half of all signatures generated with a random nonce are this size, about half are one byte smaller, and a small percentage are smaller than that)
    TX_INPUT_SCRIPTSIG_P2PK: 73,
    TX_INPUT_SCRIPTSIG_P2PKH: 107,
    TX_INPUT_SCRIPTSIG_P2SH2OF3: 254,
    TX_OUTPUT_BASE: TX_OUTPUT_NVALUE + TX_OUTPUT_SCRIPTPUBKEYLENGTH,
    TX_OUTPUT_NVALUE: TX_OUTPUT_NVALUE,
    TX_OUTPUT_SCRIPTPUBKEYLENGTH: TX_OUTPUT_SCRIPTPUBKEYLENGTH,
    TX_OVERHEAD_NLOCKTIME: TX_OVERHEAD_NLOCKTIME,
    // Output scripts
    // OP_DUP OP_HASH160 OP_PUSH20 <public_key_hash> OP_EQUALVERIFY OP_CHECKSIG
    TX_OUTPUT_SCRIPTPUBKEY_P2PKH: 25,
    // OP_0 OP_PUSH20 <public_key_hash>
    TX_OUTPUT_SCRIPTPUBKEY_P2WPKH: 22,
    // OP_HASH160 OP_PUSH20 <script_hash> OP_EQUAL
    TX_OUTPUT_SCRIPTPUBKEY_P2SH2OF3: 23,
    // OP_0 OP_PUSH32 <script_hash>
    TX_OUTPUT_SCRIPTPUBKEY_P2WSH2OF3: 34,
    // OP_1 OP_PUSH32 <schnorr_public_key>
    TX_OUTPUT_SCRIPTPUBKEY_P2TR: 34,
    HASH_TYPE: 0x01,
    MAX_FEE_RATE: 0.4,
    AVG_FEE_RATE: 0.002,
    // transaction types
    CONTRACT_CALL: 1,
    CONTRACT_CREATION: 2,
    P2PKH: 3,
    DEPLOY_ERROR: 4,
    // vsize witness scale
    WITNESS_SCALE_FACTOR: 4,
    UTXO_VINDEX: 0
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLXZhcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2hlbHBlcnMvZ2xvYmFsLXZhcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLENBQUM7QUFDL0IsTUFBTSx1QkFBdUIsR0FBRyxDQUFDLENBQUM7QUFDbEMsTUFBTSx3QkFBd0IsR0FBRyxDQUFDLENBQUM7QUFDbkMsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLENBQUM7QUFDaEMsTUFBTSxpQkFBaUIsR0FBRyxFQUFFLENBQUM7QUFDN0Isa0xBQWtMO0FBQ2xMLE1BQU0sd0JBQXdCLEdBQUcsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLGtMQUFrTDtBQUNsTCxNQUFNLDRCQUE0QixHQUFHLENBQUMsQ0FBQztBQUUxQixRQUFBLFdBQVcsR0FBRztJQUN2QixnQkFBZ0IsRUFBRSxvQkFBb0IsR0FBRyx1QkFBdUIsR0FBRyx3QkFBd0IsR0FBRyxxQkFBcUI7SUFDbkgsb0JBQW9CLEVBQUUsb0JBQW9CO0lBQzFDLHVCQUF1QixFQUFFLHVCQUF1QjtJQUVoRCxhQUFhLEVBQUUsaUJBQWlCLEdBQUcsd0JBQXdCLEdBQUcsa0JBQWtCO0lBQ2hGLGlCQUFpQixFQUFFLGlCQUFpQjtJQUNwQyx3QkFBd0IsRUFBRSx3QkFBd0I7SUFDbEQsa0JBQWtCLEVBQUUsa0JBQWtCO0lBRXRDLHdCQUF3QixFQUFFLHdCQUF3QjtJQUVsRCxpTEFBaUw7SUFDakwsdUJBQXVCLEVBQUUsRUFBRTtJQUMzQix3QkFBd0IsRUFBRSxHQUFHO0lBQzdCLDJCQUEyQixFQUFFLEdBQUc7SUFFaEMsY0FBYyxFQUFFLGdCQUFnQixHQUFHLDRCQUE0QjtJQUMvRCxnQkFBZ0IsRUFBRSxnQkFBZ0I7SUFDbEMsNEJBQTRCLEVBQUUsNEJBQTRCO0lBRTFELHFCQUFxQixFQUFFLHFCQUFxQjtJQUU1QyxpQkFBaUI7SUFDakIsMkVBQTJFO0lBQzNFLDRCQUE0QixFQUFFLEVBQUU7SUFDaEMsbUNBQW1DO0lBQ25DLDZCQUE2QixFQUFFLEVBQUU7SUFDakMsOENBQThDO0lBQzlDLCtCQUErQixFQUFFLEVBQUU7SUFDbkMsK0JBQStCO0lBQy9CLGdDQUFnQyxFQUFFLEVBQUU7SUFDcEMsc0NBQXNDO0lBQ3RDLDJCQUEyQixFQUFFLEVBQUU7SUFFL0IsU0FBUyxFQUFFLElBQUk7SUFDZixZQUFZLEVBQUUsR0FBRztJQUNqQixZQUFZLEVBQUUsS0FBSztJQUNuQixvQkFBb0I7SUFDcEIsYUFBYSxFQUFFLENBQUM7SUFDaEIsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixLQUFLLEVBQUUsQ0FBQztJQUNSLFlBQVksRUFBRSxDQUFDO0lBQ2Ysc0JBQXNCO0lBQ3RCLG9CQUFvQixFQUFFLENBQUM7SUFDdkIsV0FBVyxFQUFFLENBQUM7Q0FDZixDQUFBIn0=