import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import { Toaster } from "./components/ui/toaster";
import { ToastProvider } from "./hooks/use-toast";  

const App = () => {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </ToastProvider>
  );
};

export default App;
