import { checkResponse } from "@/utils/responses";

const { VITE_API_URL: baseUrl } = import.meta.env;
const authorizationHeader = `Bearer ${localStorage.getItem("token")}`;

export const getReview = async (id) => {
  const response = await fetch(`${baseUrl}/Review/${id}`, {
    headers: {
      Authorization: authorizationHeader,
    },
  });
  return checkResponse(response);
};

export const createReview = async (user) => {
  const response = await fetch(`${baseUrl}/Review/CreateReview`, {
    method: "POST",
    headers: {
      Authorization: authorizationHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return checkResponse(response);
};

export const updateReview = async (id, user) => {
  const response = await fetch(`${baseUrl}/Review/${id}`, {
    method: "PUT",
    headers: {
      Authorization: authorizationHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return checkResponse(response);
};

export const deleteReview = async (id) => {
  const response = await fetch(`${baseUrl}/Review/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: authorizationHeader,
    },
  });
  return checkResponse(response);
};