import axios, { AxiosError } from "axios";
import { DrawItems, LotteryResult } from "./types";
import { login, getStoredToken, clearStoredToken } from "./auth";

const api = axios.create({
  baseURL: `/api/`,
});

api.interceptors.request.use((config) => {
  const token = getStoredToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      clearStoredToken();
      const originalRequest = error.config;
      if (originalRequest) {
        try {
          const token = await login();
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return api(originalRequest);
        } catch (authError) {
          console.error("Error refreshing auth token:", authError);
          throw authError;
        }
      }
    }
    return Promise.reject(error);
  }
);

export async function getLotteryResults(
  date?: string
): Promise<LotteryResult[]> {
  try {
    const response = await api.get("/winners", {
      params: date ? { date } : {},
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching lottery results:", error);
    throw error;
  }
}

export async function getLotteryNames(): Promise<DrawItems[]> {
  try {
    const response = await api.get("/draws");
    return response.data;
  } catch (error) {
    console.error("Error fetching lottery names:", error);
    throw error;
  }
}

export function getImageUrl(filename: string): string {
  return `/api/draw/img/${filename}`;
}
