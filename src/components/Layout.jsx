import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <div className="container mt-4">
      <Header />
      <main>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
