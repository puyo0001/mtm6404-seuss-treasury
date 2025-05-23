import { Outlet } from "react-router-dom";
import { Header } from "./components/header";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
