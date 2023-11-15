import { useForm } from "react-hook-form";
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
  } = useForm<Inputs>({ mode: "all" });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
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

          <div className="mt-8 space-y-6">
            <div>
              <Button type="submit">Masuk</Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
