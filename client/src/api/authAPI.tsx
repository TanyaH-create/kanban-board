import { UserLogin } from "../interfaces/UserLogin";

//user creating a login
const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    // Make a POST request to the login route
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo), // Convert user info to JSON
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }
    
    //if login is successful, a token will be sent in the response
    //from the login in server/auth-routes
    //store toke in data
    const data = await response.json();
    
    // If login is successful, store the JWT in localStorage
    localStorage.setItem('token', data.token);

    return true; // Indicating login was successful
  } catch (error) {
    console.error('Login failed:', error);

    return false; // Indicating login failed
  }
}

export { login };
