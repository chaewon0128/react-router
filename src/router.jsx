import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import App from "./App";
import Author from "./screens/Author";
import Book from "./screens/Book";
import Chapter from "./screens/Chapter";
import Character from "./screens/Character"
import NotFound from "./screens/NotFound";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement : <NotFound />
      },
      {
        path: "about",
        element: <About />,
        errorElement : <NotFound />
      },
      {
        path: "author/:name",
        element: <Author />,
        errorElement : <NotFound />,
        children : [
        {
            path:":books",
            element : <Book />,
            children : [
          { path : "characters", element : <Character />,      errorElement : <NotFound />},
        { path : "chapters",element : <Chapter />,      errorElement : <NotFound />},
        ]
        }
      ]
      },
    ]
  }
]);
