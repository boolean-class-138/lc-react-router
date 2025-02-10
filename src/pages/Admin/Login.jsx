import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  email: "",
  password: "",
};

export default function Login() {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleFormField = (fieldName, value) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [fieldName]: value,
    }));

    // Per svuotare l'errore alla modifica sucessiva
    if (error) {
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // ⚠️ Finto login
    if (
      formData.email === "samuele.madrigali@gmail.com" &&
      formData.password === "password"
    ) {
      navigate("/admin");
    } else {
      setError("Credenziali non corrette");
    }
  };

  return (
    <div className="py-4">
      <h1 className="text-center text-lg font-bold">Effettua l'accesso</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium" htmlFor="email">
            Email *
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 border-neutral-300 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Inserisci l'email"
            required
            value={formData.email}
            onChange={(e) => handleFormField("email", e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="password">
            Password *
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 border-neutral-300 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Inserisci password"
            required
            value={formData.password}
            onChange={(e) => handleFormField("password", e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            className="bg-amber-500 p-2 rounded-md text-white"
            type="submit"
          >
            Login
          </button>
          {error && (
            <div className="bg-red-200 text-red-500 mt-4 py-2">{error}</div>
          )}
        </div>
      </form>
    </div>
  );
}
