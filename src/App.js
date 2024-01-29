import { createContext, useState } from "react";
import "./App.css";
import Onboarding from "./components/Onboarding";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { SnackbarProvider } from "notistack";
import { SideBar } from "./components/panel/Sidebar";
export const AppContext = createContext(null);
function App() {
  const [state, setState] = useState({
    session: null,
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AppContext.Provider value={{ state, setState }}>
          <Onboarding />
        </AppContext.Provider>
      ),
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "panel",
          element: <SideBar />,
        },
      ],
    },
  ]);
  return (
    <SnackbarProvider  autoHideDuration={3000} maxSnack={3}>
      <RouterProvider router={router} />
    </SnackbarProvider>
  );
}

export default App;
