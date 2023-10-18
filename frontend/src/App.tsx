import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <>
      <main className="flex justify-center items-center h-[100vh] w-full ">
        <ErrorBoundary fallback={<NotFound />}>
          <Home />
        </ErrorBoundary>
      </main>
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route></Route>
      </Routes> */}
    </>
  );
}

export default App;
