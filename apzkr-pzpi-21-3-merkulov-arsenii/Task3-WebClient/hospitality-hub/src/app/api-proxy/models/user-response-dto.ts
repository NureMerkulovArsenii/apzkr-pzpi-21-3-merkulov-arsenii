/* tslint:disable */
/* eslint-disable */
export interface UserResponseDto {
  email?: string | null;
  emailConfirmed?: boolean;
  firstName?: string | null;
  id?: number;
  lastName?: string | null;
  phoneNumber?: string | null;
  roles?: Array<string> | null;
  twoFactorEnabled?: boolean;
}
