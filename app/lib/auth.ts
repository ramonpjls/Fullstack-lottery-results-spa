import axios from "axios";

interface AuthResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

const AUTH_TOKEN_KEY = "auth_token";

const authApi = axios.create({
  baseURL: "/api",
});

export async function login(): Promise<string> {
  try {
    const response = await authApi.post<AuthResponse>(
      "/login",
      new URLSearchParams({
        grant_type: "password",
        username: process.env.NEXT_PUBLIC_LOTTERY_USERNAME!,
        password: process.env.NEXT_PUBLIC_LOTTERY_PASSWORD!,
        scope: "",
        client_id: "",
        client_secret: "",
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const token = response.data.access_token;
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    return token;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
}

export function getStoredToken(): string | null {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

export function clearStoredToken(): void {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}
