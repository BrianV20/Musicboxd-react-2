import { checkResponse } from "@/utils/services";

const { VITE_API_URL: baseUrl } = import.meta.env;
const authorizationHeader = `Bearer ${localStorage.getItem("token")}`;

export const getReleases = async () => {
  const response = await fetch(`${baseUrl}/Releases/GetRelease`, {
    headers: {
      Authorization: authorizationHeader,
    },
  });
  return checkResponse(response);
};

export const getRelease = async (id) => {
  const response = await fetch(`${baseUrl}/Releases/${id}`, {
    headers: {
      Authorization: authorizationHeader,
    },
  });
  return checkResponse(response);
};

export const createRelease = async (user) => {
  const response = await fetch(`${baseUrl}/Releases/CreateRelease`, {
    method: "POST",
    headers: {
      Authorization: authorizationHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return checkResponse(response);
};

export const updateRelease = async (id, user) => {
  const response = await fetch(`${baseUrl}/Releases/${id}`, {
    method: "PUT",
    headers: {
      Authorization: authorizationHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return checkResponse(response);
};

export const deleteRelease = async (id) => {
  const response = await fetch(`${baseUrl}/Releases/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: authorizationHeader,
    },
  });
  return checkResponse(response);
};
