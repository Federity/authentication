// Message construction using the ABNF format
// this is usually defined in the same function name from @solana/wallet-standard-utils
// Debashish Buragohain

import type { SolanaSignInInput } from '@solana/wallet-standard-features'

export function createSignInMessageText(input: SolanaSignInInput): string {
    let message = `${input.domain} wants you to sign in with your Solana account:\n`;
    message += `${input.address}`;

    if (input.statement) {
        message += `\n\n${input.statement}`;
    }

    const fields: string[] = [];
    if (input.uri) {
        fields.push(`URI: ${input.uri}`);
    }
    if (input.version) {
        fields.push(`Version: ${input.version}`);
    }
    if (input.chainId) {
        fields.push(`Chain ID: ${input.chainId}`);
    }
    if (input.nonce) {
        fields.push(`Nonce: ${input.nonce}`);
    }
    if (input.issuedAt) {
        fields.push(`Issued At: ${input.issuedAt}`);
    }
    if (input.expirationTime) {
        fields.push(`Expiration Time: ${input.expirationTime}`);
    }
    if (input.notBefore) {
        fields.push(`Not Before: ${input.notBefore}`);
    }
    if (input.requestId) {
        fields.push(`Request ID: ${input.requestId}`);
    }
    if (input.resources) {
        fields.push(`Resources:`);
        for (const resource of input.resources) {
            fields.push(`- ${resource}`);
        }
    }
    if (fields.length) {
        message += `\n\n${fields.join('\n')}`;
    }
    return message;
};
