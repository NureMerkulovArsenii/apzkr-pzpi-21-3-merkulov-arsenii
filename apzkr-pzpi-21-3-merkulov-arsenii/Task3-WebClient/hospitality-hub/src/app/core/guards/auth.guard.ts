import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const accessToken = localStorage.getItem('access_token');
  if (!accessToken) {
    return false;
  }

  const expiration = localStorage.getItem("expires_in");
  const isoLoginTime = localStorage.getItem("login_time");

  if (!expiration || !isoLoginTime) {
    return false;
  }

  const expiresIn = parseInt(expiration);
  const loginTime = new Date(isoLoginTime);
  const now = new Date();
  const diff = now.getTime() - loginTime.getTime();
  const diffInSeconds = diff / 1000;

  if (diffInSeconds > expiresIn) {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_in');
    localStorage.removeItem('login_time');
    return false;
  }

  return true;
};
