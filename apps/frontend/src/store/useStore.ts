// Minimal placeholder state manager (Zustand replacement stub)
import { useState, useEffect } from 'react';

interface GlobalState {
  walletAddress: string | null;
  balance: number;
}

let globalState: GlobalState = {
  walletAddress: null,
  balance: 0,
};

const listeners = new Set<(state: GlobalState) => void>();

interface UseStoreResult {
  walletAddress: string | null;
  balance: number;
  setWallet: (address: string, balance: number) => void;
}

export function useStore(): UseStoreResult {
  const [state, setState] = useState<GlobalState>(globalState);

  useEffect((): (() => void) => {
    const listener = (nextState: GlobalState): void => setState(nextState);
    listeners.add(listener);
    return (): void => {
      listeners.delete(listener);
    };
  }, []);

  const setWallet = (address: string, balance: number): void => {
    globalState = { ...globalState, walletAddress: address, balance };
    listeners.forEach((l) => l(globalState));
  };

  return {
    ...state,
    setWallet,
  };
}
