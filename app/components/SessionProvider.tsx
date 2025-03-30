"use client";

import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";

const ONE_MINUTE = 60 * 1000;
const SESSION_DURATION_MINUTES = 30;

interface SessionContextType {
  isAuthenticated: boolean;
}

const SessionContext = createContext<SessionContextType | null>(null);

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};

type SessionProviderProps = { children: ReactNode };

const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const checkSession = () => {
      const userDataString = localStorage.getItem("userdata");

      if (!userDataString) {
        setIsAuthenticated(false);

        router.push("/login");

        return;
      }

      const userData = JSON.parse(userDataString);
      const currentTime = Date.now();
      const expirationTime = SESSION_DURATION_MINUTES * ONE_MINUTE;

      if (currentTime - userData.timestamp > expirationTime) {
        localStorage.removeItem("userdata");

        setIsAuthenticated(false);

        router.push("/login");
      } else {
        setIsAuthenticated(true);
      }
    };

    const interval = setInterval(checkSession, 5 * ONE_MINUTE);

    checkSession();

    return () => clearInterval(interval);
  }, [router]);

  if (isAuthenticated === null) return null;

  return (
    <SessionContext.Provider value={{ isAuthenticated }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
