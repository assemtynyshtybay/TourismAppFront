// import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <>
      <div className="page">
        <div className="background-image">
          <Navbar />
          <AppRouter />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
