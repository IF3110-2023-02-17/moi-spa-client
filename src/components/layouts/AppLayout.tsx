import clsx from "clsx";
import { Link, NavLink, Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../hooks/user";

function AppLayout() {
  const { data, isLoading } = useUser();
  if (!isLoading && !data) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <header className="bg-primary w-full py-4 fixed top-0">
        <nav className="max-w-screen-lg mx-auto px-4 flex justify-between items-center">
          <Link to="/">
            <svg
              width="67"
              height="24"
              viewBox="0 0 67 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55 12C55 18.0751 50.0751 23 44 23C37.9249 23 33 18.0751 33 12C33 5.92487 37.9249 1 44 1C50.0751 1 55 5.92487 55 12Z"
                fill="#3822E1"
              />
              <path d="M59 1H67V24H59V1Z" fill="#F5C844" />
              <path d="M21.8253 0L32.6506 24H11L21.8253 0Z" fill="#EB7363" />
              <path d="M10.8253 0L21.6506 24H0L10.8253 0Z" fill="#EB7363" />
            </svg>
          </Link>
          <ul className="flex items-center gap-x-6">
            <NavigationLink to="/subscription" label="Subscription" />
            <NavigationLink to="/" label="Home" />
            <NavigationLink to="/menfess" label="Menfess" />
            <NavigationLink onClick={() => {}} label="Logout" />
          </ul>
        </nav>
      </header>
      <div className="pt-14">
        <Outlet />
      </div>
    </>
  );
}

function NavigationLink(props: {
  to?: string;
  onClick?: () => void;
  label: string;
}) {
  function getClassName({ isActive }: { isActive: boolean }) {
    return clsx(isActive ? "text-[#F5C844] font-bold" : "text-white");
  }

  if (props.onClick) {
    return (
      <button className={getClassName({ isActive: false })}>
        {props.label}
      </button>
    );
  }

  if (props.to) {
    return (
      <NavLink to={props.to} className={getClassName}>
        {props.label}
      </NavLink>
    );
  }

  return null;
}

export default AppLayout;
