import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/utils/Button";
import InputForm from "../../components/utils/InputForm";
import TextAreaForm from "../../components/utils/TextAreaForm";
import { apiClient } from "../../lib/api";
import { Post } from "../../types/post";

type Inputs = {
  title: string;
  body: string;
  photo?: File;
};

function PostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    setValue,
    getValues,
  } = useForm<Inputs>({ mode: "all" });
  const navigate = useNavigate();
  const createMutation = useMutation({
    mutationFn: (data: Inputs & { photo: File }) => {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("body", data.body);
      formData.append("image", data.photo);
      return apiClient
        .post<{ post: Post }>("/posts", formData)
        .then((res) => res.data.post);
    },
    onSuccess(data) {
      navigate("/posts/" + data.post_id);
    },
  });

  const onSubmit = handleSubmit(
    (data) => {
      if (createMutation.isPending) return;
      if (!data.photo) {
        setError("photo", {
          message: "Masukkan foto konten!",
        });
        return;
      }
      const photo = data.photo;
      createMutation.mutate({ ...data, photo });
    },
    () => {
      if (!getValues("photo")) {
        setError("photo", {
          message: "Masukkan foto konten!",
        });
      }
    },
  );

  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <h1 className="font-bold text-2xl my-8">Tambahkan konten baru</h1>
      <form
        onSubmit={onSubmit}
        noValidate
        className="max-w-md flex flex-col gap-y-4"
      >
        <div className="rounded-md shadow-sm">
          <InputForm
            id="title"
            type="text"
            label="Judul"
            placeholder="Masukkan judul"
            {...register("title", {
              required: "Masukkan judul konten!",
            })}
            errorText={errors.title?.message}
          />
        </div>
        <div className="rounded-md shadow-sm">
          <TextAreaForm
            id="body"
            type="text"
            label="Konten"
            placeholder="Masukkan konten"
            {...register("body", {
              required: "Masukkan body konten!",
            })}
            errorText={errors.body?.message}
          />
        </div>
        <div className="rounded-md shadow-sm">
          <InputForm
            id="photo"
            label="Foto"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const files = e.target.files;
              if (!files || files.length === 0) {
                setError("photo", {
                  message: "Masukkan foto konten!",
                });
                return;
              }
              const file = files[0];
              clearErrors("photo");
              setValue("photo", file);
            }}
            errorText={errors.photo?.message}
          />
        </div>
        <Button type="submit" disabled={createMutation.isPending}>
          Tambah Konten
        </Button>
      </form>
    </div>
  );
}

export default PostForm;
