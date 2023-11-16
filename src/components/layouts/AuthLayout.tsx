import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../hooks/user";

function AuthLayout() {
  const { data, isLoading } = useUser();
  if (data) {
    return <Navigate to={"/"} />;
  }
  if (isLoading) {
    return null;
  }
  return <Outlet />;
}

export default AuthLayout;
