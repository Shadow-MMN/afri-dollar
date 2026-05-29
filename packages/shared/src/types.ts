// User types
export interface User {
  id: string;
  email: string;
  phoneNumber?: string;
  walletAddress?: string;
  firstName?: string;
  lastName?: string;
  isVerified: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Business types
export interface Business {
  id: string;
  userId: string;
  businessName: string;
  businessType: string;
  registrationNumber?: string;
  taxId?: string;
  country: string;
  region?: string;
  city?: string;
  address?: string;
  isKycVerified: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Wallet types
export interface Wallet {
  id: string;
  userId: string;
  publicKey: string;
  walletType: 'business' | 'treasury' | 'payroll';
  network: 'testnet' | 'mainnet';
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Transaction types
export interface Transaction {
  id: string;
  userId: string;
  walletId: string;
  type: 'deposit' | 'withdrawal' | 'transfer' | 'exchange' | 'payroll';
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  amount: string;
  assetCode: string;
  assetIssuer?: string;
  fromAddress?: string;
  toAddress?: string;
  stellarTxId?: string;
  metadata?: Record<string, unknown>;
  errorMessage?: string;
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: Record<string, unknown>;
  };
  timestamp: string;
}

// Pagination types
export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
