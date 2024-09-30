// components/Layout.tsx
import { Outlet, Link } from "react-router-dom";

const layout = () => {
  return (
    <div>
      {/* Header / Navbar */}
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <p>Footer Content</p>
      </footer>
    </div>
  );
};

export default layout;
