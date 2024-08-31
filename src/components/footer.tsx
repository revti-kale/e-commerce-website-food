const Footer = () => {
    return (
      <footer className="bg-green-800 text-white py-10 mt-16">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              We offer the best quality fresh produce and groceries. Our goal is to provide fresh, healthy, and organic options delivered right to your doorstep.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent">Home</a></li>
              <li><a href="#" className="hover:text-accent">Shop</a></li>
              <li><a href="#" className="hover:text-accent">Blog</a></li>
              <li><a href="#" className="hover:text-accent">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter and get $20 off your first purchase.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your Email Address..."
                className="py-3 px-5 w-full rounded-full text-gray-800"
              />
              <button className="bg-accent absolute top-[50%] right-2 transform -translate-y-[50%] py-2 px-4 rounded-full hover:bg-accentDark text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  