import { createUserSchema } from "@/schemas/validation/user";
import { createUser } from "@/services/users";
import { mappedErrors } from "@/utils/mapped-errors";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Card, Text, TextInput, Title } from "@tremor/react";
import { useState } from "react";
import { toast } from "sonner";
import { Link, useLocation } from "wouter";

import { NavBar } from "../nav-bar";
import { Footer } from "../footer";
import "../../../public/css/register.css";

export const CreateUser = () => {
  const [errors, setErrors] = useState({});

  const [, setNavigate] = useLocation();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["user"],
    mutationFn: (userData) => createUser(userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("User created");
      setNavigate("/");
    },
    onError: () => {
      toast.error("Error creating user");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      ...Object.fromEntries(formData),
      genderId: parseInt(formData.get("genderId"), 10),
      countryId: parseInt(formData.get("countryId"), 10),
    };
    const { success, errors } = mappedErrors(createUserSchema, data);
    if (!success) {
      console.log(errors);
      setErrors(errors);
      return;
    }
    e.target.reset();
    setErrors({});
    mutate(data);
  };
  return (
    <>
      <NavBar />
      <Card className="w-full max-w-xl m-auto">
        <h2 id="register">Register</h2>
        <form className="mt-5 form" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mb-6">
            <label>
              <h4>Name:</h4>
              <TextInput
                className="w-full px-3"
                label="Name"
                name="name"
                placeholder="Joe Doe"
                autoComplete="off"
                error={Boolean(errors.name)}
                errorMessage={errors.name}
              />
            </label>
            <label>
              <h4>Username:</h4>
              <TextInput
                className="w-full px-3"
                label="Username"
                name="userName"
                placeholder="JoeDoe"
                type="text"
                autoComplete="off"
                error={Boolean(errors.userName)}
                errorMessage={errors.userName}
              />
            </label>
            <label>
              <h4>Email:</h4>
              <TextInput
                className="w-full px-3"
                label="Email"
                name="email"
                placeholder="example@mail.com"
                type="email"
                autoComplete="off"
                error={Boolean(errors.email)}
                errorMessage={errors.email}
              />
            </label>
            <label>
              <h4>Password:</h4>
              <input
                className="w-full px-3"
                label="Password"
                name="password"
                placeholder="Type password here"
                type="password"
                autoComplete="off"
                error={Boolean(errors.password)}
                errorMessage={errors.password}
              />
            </label>

            <label>
              <h4>Confirm Password:</h4>
              <TextInput
                className="w-full px-3"
                label="Confirm Password"
                name="confirmPassword"
                placeholder="Repeat password here"
                type="password"
                autoComplete="off"
                error={Boolean(errors.confirmPassword)}
                errorMessage={errors.confirmPassword}
              />
            </label>
            <label>
              <h4>CountryId:</h4>
              <input
                className="w-full px-3"
                label="countryId"
                name="countryId"
                placeholder="enterId"
                type="number"
                autoComplete="off"
                error={Boolean(errors.countryId)}
                errorMessage={errors.countryId}
              />
            </label>
            <label>
              <h4>genderId:</h4>
              <input
                className="w-full px-3"
                label="genderId"
                name="genderId"
                placeholder="genderId"
                type="number"
                autoComplete="off"
                error={Boolean(errors.genderId)}
                errorMessage={errors.genderId}
              />
            </label>
          </div>
          <button id="registerBtn" className="w-full px-3">
            Create
          </button>
        </form>
        <div className="alreadyHaveAccount">
        <p>Already have an account?</p>
          <Link to="/login" className="hover:opacity-70">
            Login
          </Link>
        </div>
      </Card>
      <Footer />
    </>
  );
};
