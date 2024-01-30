import "./App.css";
import { useForm } from "react-hook-form";
import TextInput from "./TextInput";

function App() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async () => {
    alert("Qeydiyyat ugurla yerine yetirildi");
  };

  return (
    <div className="register">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="text"
          placeholder="Ad"
          name="ad"
          register={register("ad", {
            required: "Ad daxil edilmelidir",
          })}
          error={errors.ad ? errors.ad.message : ""}
        />

        <TextInput
          type="password"
          placeholder="Parol"
          name="parol"
          register={register("parol", {
            required: "Parol daxil edilmelidir",
          })}
          error={errors.parol ? errors.parol.message : ""}
        />

        <TextInput
          type="password"
          name="paroltekrari"
          placeholder="Parol tekrari"
          register={register("paroltekrari", {
            validate: (value) => {
              const { parol } = getValues();

              if (parol !== value) {
                return "Parollar uygunlashmir";
              }
            },
          })}
          error={
            errors.paroltekrari && errors.paroltekrari.type === "validate"
              ? errors.paroltekrari?.message
              : ""
          }
        />

        <button type="submit"></button>
      </form>
    </div>
  );
}

export default App;
