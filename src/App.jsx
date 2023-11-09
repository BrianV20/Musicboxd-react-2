import React from "react";

import { useFetch } from './useFetch'

import { AuthProvider } from "./context/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./Router";
// import { NavBar } from "src/components/nav-bar";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";
// import { UserLogin } from "./components/user/user-login";

const queryClient = new QueryClient();

import './App.css'

function App() {
  const { data, loading } = useFetch('https://localhost:7196/api/User/GetUsers')

  return (
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Toaster position="top-right" richColors />
      <Router />
    </AuthProvider>
  </QueryClientProvider>
  )
}

export default App
