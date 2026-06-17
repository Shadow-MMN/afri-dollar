export interface StellarAccount {
  publicKey: string;
  balances: Array<{
    asset_type: string;
    balance: string;
    asset_code?: string;
  }>;
}

export const loadStellarAccount = async (publicKey: string): Promise<StellarAccount> => {
  const horizonUrl =
    process.env.NEXT_PUBLIC_STELLAR_HORIZON_URL || 'https://horizon-testnet.stellar.org';
  const response = await fetch(`${horizonUrl}/accounts/${publicKey}`);
  if (!response.ok) {
    throw new Error('Failed to load Stellar account');
  }
  return response.json() as Promise<StellarAccount>;
};
