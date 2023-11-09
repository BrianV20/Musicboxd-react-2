import { checkResponse } from "@/utils/responses";

const { VITE_API_URL: baseUrl } = import.meta.env;
const authorizationHeader = `Bearer ${localStorage.getItem("token")}`;

export const getArtists= async (id) => {
  const response = await fetch(`${baseUrl}/Artist/GetArtists`, {
    headers: {
      Authorization: authorizationHeader,
    },
  });
  return checkResponse(response);
};

export const getArtist = async (id) => {
    const response = await fetch(`${baseUrl}/Artist/${id}`, {
      headers: {
        Authorization: authorizationHeader,
      },
    });
    return checkResponse(response);
  };

export const createArtist = async (user) => {
  const response = await fetch(`${baseUrl}/Artist/CreateArtist`, {
    method: "POST",
    headers: {
      Authorization: authorizationHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return checkResponse(response);
};

export const updateArtist = async (id, user) => {
  const response = await fetch(`${baseUrl}/Artist/${id}`, {
    method: "PUT",
    headers: {
      Authorization: authorizationHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return checkResponse(response);
};

export const deleteArtist = async (id) => {
  const response = await fetch(`${baseUrl}/Artist/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: authorizationHeader,
    },
  });
  return checkResponse(response);
};
