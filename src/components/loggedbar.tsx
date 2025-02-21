export default function LoggedOutBar() {  
  return (
      <header className="bg-blue/70 p-4 flex items-center">
          {/* Logo */}
          <h1 className="text-center text-white text-xl font-bold w-1/5">
              <a href="/">LDS Calendari</a>
          </h1>
          <nav className="w-4/5 flex justify-center">
              <ul className="flex w-full">
                  <li className="flex-1 text-center text-white transition-all duration-200 hover:scale-110">
                      <a href="/">Home</a>
                  </li>
                  <li className="flex-1 text-center text-white transition-all duration-200 hover:scale-110">
                      <a href="/week">About Us</a>
                  </li>
                  <li className="flex-1 text-center text-white transition-all duration-200 hover:scale-110">
                      <a href="/signin">Sign In</a>
                  </li>
                  <li className="flex-1 text-center text-white transition-all duration-200 hover:scale-110">
                      <a href="/signup">Sign Up</a>
                  </li>
              </ul>
          </nav>
      </header>
  );
}
