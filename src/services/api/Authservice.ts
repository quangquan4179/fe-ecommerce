import axios from "axios";
import { axiosInstance } from "../custom_axios";
import { apiPjc } from "../custom_axios";

export const loginWithGoogle = async (tokenId: string) => {
  const res = await axiosInstance.get("auth/verifyGoogleToken", {
    headers: {
      Authorization: `Bear ${tokenId}`,
    },
  });

  return res.data;
};
export const login = async (email: string, password: string) => {
  const res = await axiosInstance.post("/api/admin/login", {
    email,
    password,
  });
  return res.data;
};

export const checkToken = async () => {
  const tokenId = localStorage.getItem("accessToken")?.toString();
  const res = await axiosInstance.get("auth/verifyToken", {
    headers: {
      Authorization: `Bearer ${tokenId}`,
    },
  });

  return res.data;
};

export const getUserById = async (userId: string) => {
  const res = await axiosInstance.get(`/api/admin/${userId}`);
  return res.data;
};
