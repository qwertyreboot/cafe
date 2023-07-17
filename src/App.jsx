import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Add from "./pages/Add";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/add",
      element: <Add />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
