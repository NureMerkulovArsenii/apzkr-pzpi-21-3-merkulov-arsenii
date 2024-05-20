/* tslint:disable */
/* eslint-disable */
export interface TwoFactorRequest {
  enable?: boolean | null;
  forgetMachine?: boolean;
  resetRecoveryCodes?: boolean;
  resetSharedKey?: boolean;
  twoFactorCode?: string | null;
}
