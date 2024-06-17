/* tslint:disable */
/* eslint-disable */
export interface TwoFactorResponse {
  isMachineRemembered?: boolean;
  isTwoFactorEnabled?: boolean;
  recoveryCodes?: Array<string> | null;
  recoveryCodesLeft?: number;
  sharedKey?: string | null;
}
