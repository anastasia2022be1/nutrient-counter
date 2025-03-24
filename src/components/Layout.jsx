import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <div className="d-flex flex-column flex-grow-1">
      <Header />
      <main className="flex-grow-1">
        <div className="container mt-4">
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
