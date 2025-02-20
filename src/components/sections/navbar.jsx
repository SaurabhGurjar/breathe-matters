import Logo from "./logo";

const navItems = ["Home", "Products", "About", "Queries", "Contact"];

export default function Navbar() {
  return (
    <nav className="w-[1528px] flex justify-between items-center px-5 py-3 bg-white">
      <div>
        <Logo />
      </div>
      <ul className="hidden lg:flex items-center gap-10 font-normal text-[20px]">
        {navItems.map((item, index) => (
          <li key={index}>
            <a href="#" className="text-[#101010] hover:text-[#008080]">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
