import Logo from "../photos/logo-text.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">

      <div className="container mx-auto px-6">

        <div className="flex h-16 items-center justify-between">

          {/* Mobile menu */}

          <button className="text-xl md:hidden">
            ☰
          </button>


          {/* Logo */}

          <a href="/" className="flex items-center">
            <img
              src={Logo}
              alt="Dev Stack"
              className="w-24"
            />
          </a>


          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-6 md:flex">

            <a href="/" className="text-sm text-pink-500">
              Home
            </a>

            <a
              href="#technologies"
              className="text-sm text-gray-500 hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="text-sm text-gray-500 hover:text-pink-500"
            >
              Projects
            </a>

            <a
              href="#about"
              className="text-sm text-gray-500 hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm text-gray-500 hover:text-pink-500"
            >
              Contact
            </a>

          </nav>


          {/* Auth */}

          <div className="flex items-center gap-3">

            <button className="text-sm text-gray-500">
              Sign In
            </button>

            <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-4 py-2 text-xs font-semibold text-white">
              Sign Up
            </button>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;