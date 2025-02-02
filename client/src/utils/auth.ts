import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token); // Decode the token and return the payload
    }
    return null; // If no token, return null
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    if (token) {
      return !this.isTokenExpired(token); // If token exists and is not expired
    }
    return false;
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    try {
      const decoded: JwtPayload = jwtDecode(token);
      const expirationTime = decoded.exp * 1000; // Convert expiration time to milliseconds
      return Date.now() > expirationTime; // Return true if the token is expired
    } catch (error) {
      return true; // If decoding fails, treat the token as expired
    }
  }

  getToken(): string {
    // TODO: return the token
    return localStorage.getItem('token');
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    localStorage.setItem('token', idToken); // Store token in localStorage
  
    // TODO: redirect to the home page
    window.location.href = '/home'; // Redirect to the home page (or any page)
  }

  logout() {
    // TODO: remove the token from localStorage
    localStorage.removeItem('token'); // Remove token from localStorage
    // TODO: redirect to the login page
    window.location.href = '/login'; // Redirect to the login page
  }
}

export default new AuthService();
