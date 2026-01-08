import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/home"
  },
  {
    name: "About Us",
    href: "/about-us"
  },
  {
    name: "Advantages",
    href: "/advantages"
  },
  {
    name: "Mobile App",
    href: "/mobile-app"
  },

]

export default function Navbar() {
  return(
    <div className="w-full flex items-center justify-between py-4 px-9">
      {/* Links */}
      <div className="flex gap-6">
        {navLinks?.map(link => (
          <Link
            href={link.href}
            className="cursor-pointer"
          >{link.name}</Link>
        ))}
      </div>

      {/* Logo */}
      <div>
        <div className='w-9 h-9 bg-gradient-to-r from-black to-white flex items-center justify-center rounded-full mx-auto md:hidden'>
          <div className='w-6 h-6 bg-[#b81c1c] rounded-full'></div>
        </div>
        <div className='bg-[#b81c1c] w-[50px] h-[50px] p-2 border- rounded-full hidden md:flex flex-col justify-center'>
          <h1 className='text-2xl ml-2.5'>Tovah</h1>
        </div>
      </div>

      {/* Auth Btn */}
      <button className="w-[150px] bg-[#b81c1c] border-[#b81c1c] border-2 py-2.5 cursor-pointer">Sign Up</button>
    </div>
  )
}