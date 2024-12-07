import SearchIcon from "@/app/SvgIcon/SearchIcon"
import Image from "next/image"


function Navbar() {
  return (
    <header className="flex justify-between items-center mb-8">
      <div className="flex items-center space-x-8">
        <Image src="/logo.svg" height={140} width={140} alt="LWS Xstream Logo" className="h-6" />
        <nav className=" hidden md:flex space-x-6">
          <a href="#" className="text-color-purple font-semibold">TOP STREAMING</a>
          <a href="#" className="text-gray-400 hover:text-white">GAMES</a>
          <a href="#" className="text-gray-400 hover:text-white">TEAMS</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input type="text" placeholder="Search"
            className="bg-color-gray rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-color-purple" />
         <SearchIcon/>
        </div>
        {/* <!-- যেহেতু videos.json এ কোনো Avatar দেয়া নাই, সেহেতু আপনি যেকোনো র‍্যান্ডম Avatar ব্যবহার করতে পারবেন --> */}
        <img src="/avatar.png" alt="User Avatar" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  )
}

export default Navbar
