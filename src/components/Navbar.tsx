import { useEffect, useState } from "react";
import { CiSun } from "react-icons/ci";
import { FaMoon} from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="w-full bg-blue-300 dark:bg-gray-900 shadow">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-lg font-bold text-white dark:text-gray-100 hover:text-blue-600">
          Mini Red Social 📝
        </h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-blue-200 text-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-105 transition"
        >
          {darkMode ? <CiSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
