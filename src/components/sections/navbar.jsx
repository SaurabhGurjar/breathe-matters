import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="w-[1503px] flex justify-between items-center px-5 py-3 bg-white">
      <div>
        <Logo />
      </div>
      <ul className="flex items-center gap-10 font-normal text-[20px]">
        <li>
          <a href="#" className="text-[#101010] hover:text-[#008080]">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-[#101010] hover:text-[#008080]">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="text-[#101010] hover:text-[#008080]">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-[#101010] hover:text-[#008080]">
            Queries
          </a>
        </li>
        <li>
          <a href="#" className="text-[#101010] hover:text-[#008080]">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
