// Stellar network constants
export const STELLAR_NETWORKS = {
  TESTNET: 'testnet',
  MAINNET: 'mainnet',
} as const;

export const STELLAR_HORIZON_URLS = {
  TESTNET: 'https://horizon-testnet.stellar.org',
  MAINNET: 'https://horizon.stellar.org',
} as const;

// Asset codes
export const ASSET_CODES = {
  USDC: 'USDC',
  XLM: 'XLM',
} as const;

// Transaction types
export const TRANSACTION_TYPES = {
  DEPOSIT: 'deposit',
  WITHDRAWAL: 'withdrawal',
  TRANSFER: 'transfer',
  EXCHANGE: 'exchange',
  PAYROLL: 'payroll',
} as const;

// Transaction status
export const TRANSACTION_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
  CANCELLED: 'cancelled',
} as const;

// Wallet types
export const WALLET_TYPES = {
  BUSINESS: 'business',
  TREASURY: 'treasury',
  PAYROLL: 'payroll',
} as const;

// Error codes
export const ERROR_CODES = {
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  AUTHENTICATION_ERROR: 'AUTHENTICATION_ERROR',
  AUTHORIZATION_ERROR: 'AUTHORIZATION_ERROR',
  NOT_FOUND: 'NOT_FOUND',
  CONFLICT: 'CONFLICT',
  STELLAR_ERROR: 'STELLAR_ERROR',
  DATABASE_ERROR: 'DATABASE_ERROR',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
} as const;

// HTTP status codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
} as const;
