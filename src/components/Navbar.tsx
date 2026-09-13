import Logo from "../photos/logo-text.png"
const Navbar = () => {
  return (
  <div className="border-b-2  border-gray-100">
    <header className="w-full  bg-white container mx-auto">
      <div className="mx-auto flex items-center justify-between px-6">

        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-1.5 text-[11px] font-bold text-gray-900"
        >
        <img src={Logo} alt="" />
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="/"
            className="text-[8px] font-medium text-pink-500"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-[8px] font-medium text-gray-500 transition hover:text-pink-500"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-[8px] font-medium text-gray-500 transition hover:text-pink-500"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-[8px] font-medium text-gray-500 transition hover:text-pink-500"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-[8px] font-medium text-gray-500 transition hover:text-pink-500"
          >
            Contact
          </a>
        </nav>

        {/* Right side */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#signin"
            className="text-[8px] font-medium text-gray-500"
          >
            Sign In
          </a>

          <a
            href="#signup"
            className="rounded-full bg-pink-500 px-3 py-1.5 text-[7px] font-semibold text-white"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile menu */}
        <button className="text-xl text-gray-800 md:hidden">
          ☰
        </button>

      </div>
    </header>
    </div>
    
  );
};

export default Navbar;
