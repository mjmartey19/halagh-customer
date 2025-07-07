// types/device.ts
import { BaseEntity } from './index';

export interface Device extends BaseEntity {
  model: string;
  imei?: string;
  totalAmount: number;
  remainingAmount: number;
  dailyPayment: number;
  status: DeviceStatus;
  userId: string;
  purchaseDate: string;
  lastPaymentDate?: string;
  nextPaymentDate?: string;
  amountOverdue?: number;
}

export enum DeviceStatus {
  ACTIVE = 'active',
  LOCKED = 'locked',
}



export interface DeviceStatusInfo {
  device: Device;
  paymentInfo: {
    totalAmount: number;
    paidAmount: number;
    remainingAmount: number;
    lastPaymentDate?: string;
    nextPaymentDate?: string;
    daysOverdue?: number;
    overDueAmount?: number;
  };
  lockInfo: {
    isLocked: boolean;
    lockReason?: string;
    daysUntilLock?: number;
    unlockRequirement?: string;
  };
}

export interface DeviceState {
  currentDevice: Device | null;
  deviceStatusInfo: DeviceStatusInfo | null;
  isLoading: boolean;
  error: string | null;
}