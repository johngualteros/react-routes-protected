import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Landing, Home, Dashboard, Analytics, Admin } from "./pages";
function App() {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "John", id: "1", permissions: ["analize"], roles: ["admin"] });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <BrowserRouter>
      <Navigation />

      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route
          path="/analytics"
          element={
            <ProtectedRoute
              isAllowed={!!user && user.permissions.includes("analize")}
              redirectTo="/dashboard"
            >
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute
              isAllowed={!!user && user.roles.includes("admin")}
              redirectTo="/home"
            >
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/">Landing</Link>
        <Link to="/home">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
}
export default App;
