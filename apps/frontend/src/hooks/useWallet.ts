import { useState, useEffect } from 'react';

interface WalletState {
  address: string | null;
  balance: number;
  loading: boolean;
  error: string | null;
}

export function useWallet(publicKey?: string): WalletState {
  const [state, setState] = useState<WalletState>({
    address: publicKey || null,
    balance: 0,
    loading: !!publicKey,
    error: null,
  });

  useEffect((): (() => void) | void => {
    if (!publicKey) return;

    let isMounted = true;
    setState((prev: WalletState): WalletState => ({ ...prev, loading: true, error: null }));

    fetch(`https://horizon-testnet.stellar.org/accounts/${publicKey}`)
      .then((res: Response) => {
        if (!res.ok) throw new Error('Stellar account not found');
        return res.json();
      })
      .then((data: { balances: Array<{ balance: string; asset_type: string }> }) => {
        if (!isMounted) return;
        const usdcBalance = data.balances.find((b) => b.asset_type === 'credit_alphanum4');
        setState({
          address: publicKey,
          balance: usdcBalance ? parseFloat(usdcBalance.balance) : 0,
          loading: false,
          error: null,
        });
      })
      .catch((err: Error) => {
        if (!isMounted) return;
        setState({
          address: publicKey,
          balance: 0,
          loading: false,
          error: err.message,
        });
      });

    return (): void => {
      isMounted = false;
    };
  }, [publicKey]);

  return state;
}
