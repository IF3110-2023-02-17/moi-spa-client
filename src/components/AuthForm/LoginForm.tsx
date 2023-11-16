import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/user";
import { apiClient } from "../../lib/api";
import Button from "../utils/Button";
import InputForm from "../utils/InputForm";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<Inputs>({ mode: "all" });
  const { refetch } = useUser();
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async (data: Inputs) => {
      return await apiClient.post("/user/login", data).then(() => refetch());
    },
    onError(error) {
      if (isAxiosError(error)) {
        if (typeof error.response?.data.message === "string") {
          setError("password", {
            type: "manual",
            message: error.response?.data.message,
          });
        }
      }
    },
    onSuccess() {
      navigate("/");
    },
  });

  const onSubmit = handleSubmit((data) => {
    if (loginMutation.isPending) return;
    loginMutation.mutate(data);
  });

  return (
    <>
      <div className=" min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={onSubmit}
          noValidate
          className="p-4 m-4 max-w-md w-full space-y-8"
        >
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Selamat Datang Kembali!
            </h2>
          </div>

          <div className="rounded-md shadow-sm -space-y-px">
            <InputForm
              id="email"
              type="email"
              label="Email"
              placeholder="Masukkan email"
              {...register("email", {
                required: "Masukkan email kamu!",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email tidak valid",
                },
              })}
              errorText={errors.email?.message}
            />
          </div>

          <div className="rounded-md shadow-sm -space-y-px">
            <InputForm
              id="password"
              type="password"
              label="Password"
              placeholder="Masukkan password"
              {...register("password", {
                required: "Masukkan password kamu!",
              })}
              errorText={errors.password?.message}
            />
          </div>

          <div className="mt-8">
            <div>
              <Button type="submit" disabled={loginMutation.isPending}>
                Masuk
              </Button>
            </div>
            <Link
              to={"/register"}
              className="w-full text-center block text-sm font-medium mt-4 underline"
            >
              Daftar
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
