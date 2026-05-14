import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Layout() {
  return (
    <div className="d-flex flex-column flex-grow-1">
      <Header />
      <main className="flex-grow-1">
        <div className="container py-4">
          <div className="row">
            <div className="col-12 col-xl-10 offset-xl-1">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
