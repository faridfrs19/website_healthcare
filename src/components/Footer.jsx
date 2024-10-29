import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-slate-200 text-green-600 py-8 border-top-shadow">
      <div className="container mx-auto px-10">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <img src={logo} alt="" />
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Navigation</h2>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          {/* Social Media Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">© 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer