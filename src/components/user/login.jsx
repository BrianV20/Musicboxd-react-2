import { Loader } from "@/components/loader";
import { loginSchema } from "@/schemas/validation/auth";
import { loginUser } from "@/services/users";
import { checkIfIsEmailOrUsername, mappedErrors } from "@/utils/mapped-errors";
import { LoginIcon } from "@heroicons/react/outline";//ojo con esto
import { useMutation } from "@tanstack/react-query";
import { Button, Card, Text, TextInput, Title } from "@tremor/react";
import { useState } from "react";
import { toast } from "sonner";
import { useAuthStore } from "../../store/auth";

export const Login = () => {
    const [errors, setErrors] = useState({});
  
    const { handleLogin } = useAuthStore((state) => state);
  
    const { mutate, isPending } = useMutation({
      mutationKey: ["login"],
      mutationFn: (credentials) => loginUser(credentials),
      onSuccess: (data) => {
        handleLogin(data);
        toast.success("Welcome back!");
      },
      onError: () => {
        toast.error("Invalid credentials");
      },
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      const { usernameOrEmail, password } = data;
      const field = checkIfIsEmailOrUsername(usernameOrEmail);
      const credentials = {
        [field]: usernameOrEmail,
        password,
      };
      const { success, errors } = mappedErrors(loginSchema, credentials);
      if (!success) {
        setErrors(errors);
        return;
      }
      e.target.reset();
      setErrors({});
      mutate(credentials);
    };
    return (
      <>
        {isPending && <Loader />}
        <Card className="w-full max-w-xl m-auto">
          <Title>Login</Title>
          <form className="mt-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 mb-6">
              <label>
                <Text>Username or Email:</Text>
                <TextInput
                  className="w-full px-3"
                  label="Username or Email"
                  name="usernameOrEmail"
                  placeholder="Type username or email here"
                  autoComplete="off"
                  error={Boolean(errors.username)}
                  errorMessage={errors.username }
                />
              </label>
              <label>
                <Text>Password:</Text>
                <TextInput
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
            </div>
            <Button className="w-full px-3" icon={LoginIcon}>
              Login
            </Button>
          </form>
        </Card>
      </>
    );
  };