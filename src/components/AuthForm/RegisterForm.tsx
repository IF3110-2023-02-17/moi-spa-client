import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { apiClient } from "../../lib/api";
import Button from "../utils/Button";
import InputForm from "../utils/InputForm";
import TextAreaForm from "../utils/TextAreaForm";

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
  estDate: string;
  name: string;
  description: string;
};

const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    getValues,
    setValue,
  } = useForm<Inputs>({ mode: "all" });
  const navigate = useNavigate();

  const registerMutation = useMutation({
    async mutationFn(data: Inputs) {
      return await apiClient.post("/user/register", data);
    },
    onError(error) {
      if (isAxiosError(error)) {
        if (typeof error.response?.data.message === "string") {
          setError("confirmPassword", {
            type: "manual",
            message: error.response?.data.message,
          });
        }
        setValue("password", "");
        setValue("confirmPassword", "");
      }
    },
    onSuccess() {
      navigate("/login");
    },
  });

  const onSubmit = handleSubmit((data) => {
    if (registerMutation.isPending) return;
    registerMutation.mutate(data);
  });

  return (
    <>
      <div className=" min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={onSubmit}
          noValidate
          className="p-4 m-4 max-w-md w-full space-y-4"
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
              id="name"
              type="text"
              label="Nama"
              placeholder="Masukkan nama"
              {...register("name", {
                required: "Masukkan nama studio!",
              })}
              errorText={errors.name?.message}
            />
          </div>

          <div className="rounded-md shadow-sm -space-y-px">
            <InputForm
              id="estDate"
              type="date"
              label="Est. Date"
              placeholder="Masukkan est. date"
              {...register("estDate", {
                required: "Masukkan est. date!",
              })}
              errorText={errors.estDate?.message}
            />
          </div>

          <div className="rounded-md shadow-sm -space-y-px">
            <TextAreaForm
              id="description"
              label="Deskripsi"
              placeholder="Masukkan deskripsi"
              {...register("description", {
                required: "Masukkan deskripsi!",
              })}
              errorText={errors.description?.message}
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

          <div className="rounded-md shadow-sm -space-y-px">
            <InputForm
              id="confirm-password"
              type="password"
              label="Konfirmasi Password"
              placeholder="Masukkan konfirmasi password"
              {...register("confirmPassword", {
                required: "Masukkan konfirmasi password!",
                validate(value) {
                  if (value !== getValues("password")) {
                    return "Konfirmasi password tidak sama!";
                  }
                  return true;
                },
              })}
              errorText={errors.confirmPassword?.message}
            />
          </div>

          <div className="mt-8">
            <div>
              <Button type="submit" disabled={registerMutation.isPending}>
                Daftar
              </Button>
            </div>
            <Link
              to={"/login"}
              className="w-full text-center block text-sm font-medium mt-4 underline"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
