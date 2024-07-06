import './App.scss';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Counter from './components/Counter/Counter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Counter />,
  },
  {
    path: "/:count",
    element: <Counter />,
  },
]);

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <RouterProvider router={router} />
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
