import { Route, Routes } from "react-router-dom";
import { ProviderPage } from "@/Provider";
import { Link } from "react-router-dom";
import MainPage from "@/Main/MainPage";

const _TestRoutes = [
  //
  { path: "/", Component: MainPage, title: "home" },
  { path: "/provider", Component: ProviderPage, title: "Provider" },
];
const TestRoutes = () => {
  return (
    <>
      <Routes>
        {_TestRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>

      <div className="fixed bottom-0 left-0 right-0 row-center overflow-auto justify-center gap-sm bg-prim p-lg text-owl">
        {_TestRoutes.map(({ path, title }) => (
          <Link
            className="button"
            key={path}
            to={path}
            style={{
              backgroundColor: window.location.pathname === path ? "var(--red)" : "var(--lord)",
            }}
            onClick={({ currentTarget }) => {
              currentTarget.parentElement?.querySelectorAll("a").forEach((a) => {
                a.style.backgroundColor = a === currentTarget ? "var(--red)" : "var(--lord)";
              });
            }}>
            {title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default TestRoutes;
