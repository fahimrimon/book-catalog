import Navbar from "../Shared/Navbar";
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
    </div>
  )
}
