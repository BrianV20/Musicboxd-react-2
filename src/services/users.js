import { checkResponse } from "@/utils/services";

const { VITE_API_URL: baseUrl } = import.meta.env;
const authorizationHeader = `Bearer ${localStorage.getItem("token")}`;

export const getUsers = async () => {
  const response = await fetch(`${baseUrl}/User/GetUsers`, {
    headers: {
      Authorization: authorizationHeader,
    },
  });
  return checkResponse(response);
};

export const getUser = async (id) => {
  const response = await fetch(`${baseUrl}/User/${id}`, {
    headers: {
      Authorization: authorizationHeader,
    },
  });
  return checkResponse(response);
};

export const createUser = async (user) => {
  console.log(user);
  const response = await fetch(`${baseUrl}/User/Register`, {
    method: "POST",
    headers: {
      Authorization: authorizationHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return checkResponse(response);
};

export const loginUser = async (user) => {
  console.log(user)
  const response = await fetch(`${baseUrl}/User/Login`, {
    method: "POST",
    headers: {
      Authorization: authorizationHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return checkResponse(response);
};

export const updateUser = async (id, user) => {
  const response = await fetch(`${baseUrl}/User/${id}`, {
    method: "PUT",
    headers: {
      Authorization: authorizationHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return checkResponse(response);
};

export const deleteUser = async (id) => {
  const response = await fetch(`${baseUrl}/User/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: authorizationHeader,
    },
  });
  return checkResponse(response);
};
