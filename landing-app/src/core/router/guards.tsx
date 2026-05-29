import React from "react";
import { Navigate } from "react-router-dom";

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const isAuthenticated = true; 

  if (!isAuthenticated) {
    // return <Navigate to="/signin" replace />; Solo en caso de ser una pagina protegida, redirige a login, en este caso no lo voy a usar
  }

  return <>{children}</>;
}
