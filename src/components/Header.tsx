import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex items-center justify-center text-white bg-black h-14">
      <nav className="flex gap-8">
        <Link to="/">Create Employee</Link>
        <Link to="/employee-list">Employee List</Link>
      </nav>
    </header>
  );
};
