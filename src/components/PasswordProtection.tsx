import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const PasswordProtection = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === "renditeoptimierer") {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      toast.success("Zugang gewährt");
    } else {
      toast.error("Falsches Passwort");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    navigate("/");
    toast.success("Erfolgreich abgemeldet");
  };

  if (isAuthenticated) {
    return (
      <div>
        {children}
        <button
          onClick={handleLogout}
          className="fixed bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Abmelden
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-primary text-center mb-6">
          Geschützter Bereich
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Passwort eingeben"
              className="w-full"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Zugang anfordern
          </button>
        </form>
      </div>
    </div>
  );
};