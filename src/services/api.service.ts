export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  token?: string;
  error?: string;
}

export interface Friend {
  id: number;
  username: string;
  createdAt: string;
}

export interface User {
  id: number;
  username: string;
  createdAt: string;
}

export async function login(username: string, password: string): Promise<ApiResponse> {
  console.log('Attempting login with username:', username);
  
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || data.error || `HTTP ${response.status}: ${response.statusText}`,
        error: data.message || data.error || `HTTP ${response.status}: ${response.statusText}`,
      };
    }

    return {
      success: true,
      data,
      token: data.token,
    };
  } catch (error) {
    console.error('Login failed:', error);
    
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return {
        success: false,
        message: 'Network error: Unable to connect to the server. Please check if the API server is running.',
        error: error.message,
      };
    }
    
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
        error: error.message,
      };
    }
    
    return {
      success: false,
      message: 'Unknown error occurred',
      error: String(error),
    };
  }
}

export async function logout(): Promise<void> {
  localStorage.removeItem('token');
  localStorage.removeItem('user');

  window.location.href = '/';
}

export async function getFriends(): Promise<Friend[]> {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No token found');

  const res = await fetch('http://localhost:3000/friends', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch friends');
  }

  const data = await res.json();
  return data.friendsList;
}

export async function getMe(): Promise<User> {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No token found');

  const res = await fetch('http://localhost:3000/me', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch user information');
  }

  const data = await res.json();
  console.log('Fetched user data:', data);
  return data;
}