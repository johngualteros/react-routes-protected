import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export const Landing = () => <h2>Landing Page (Public Page)</h2>;
export const Home = () => {
  return <h2>Home (Private Page)</h2>;
};
export const Dashboard = () => {
  return <h2>Dashboard (Private Page)</h2>;
};
export const Analytics = () => (
  <h2>Analytics (Private Page permission: analze)</h2>
);
export const Admin = () => <h2>Admin (Private Page permission: admin)</h2>;
