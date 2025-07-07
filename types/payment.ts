// types/payment.ts
import { BaseEntity } from './index';

export interface Payment extends BaseEntity {
  amount: number;
  currency: string;
  status: PaymentStatus;
  paymentDate: string;
  paymentMethod?: string;
  reference?: string;
  description?: string;
  deviceId: string;
}

export enum PaymentStatus {
  PENDING = 'pending',
  SUCCESSFUL = 'successful',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
}

export interface PaymentSummary {
  totalLoanAmount: number;
  amountPaid: number;
  amountRemaining: number;
  dailyPayment: number;
  nextPaymentDate: string;
  percentagePaid: number;
  percentageRemaining: number;
  isActive: boolean;
}

export interface PaymentHistory {
  payments: Payment[];
  totalCount: number;
  summary: PaymentSummary;
}

export interface MakePaymentRequest {
  amount: number;
  paymentMethod: string;
  deviceId: string;
}

export interface PaymentState {
  history: Payment[];
  summary: PaymentSummary | null;
  isLoading: boolean;
  error: string | null;
}