import type { RouteObject } from "react-router-dom";

export type Role = "OWNER";

export type  AppRouteObject = RouteObject & {
  name?: string;             
  sidebar?: boolean;             
  icon?: React.ReactElement;      
  children?: AppRouteObject[];    
  requiredRoles?: Role[];        
};
