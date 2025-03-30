"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SESSION_DURATION_MINUTES = 5; // change to 30 later on

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

const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const checkSession = () => {
      const userDataString = localStorage.getItem("userdata");

      if (!userDataString) {
        console.log("No session found");
        setIsAuthenticated(false);
        router.push("/login");
        return;
      }

      const userData = JSON.parse(userDataString);
      const currentTime = Date.now();
      const expirationTime = SESSION_DURATION_MINUTES * 60 * 1000;

      if (currentTime - userData.timestamp > expirationTime) {
        console.log("Session expired");
        localStorage.removeItem("userdata");
        setIsAuthenticated(false);
        router.push("/login");
      } else {
        setIsAuthenticated(true);
      }
    };

    const interval = setInterval(checkSession, 60 * 1000);

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
