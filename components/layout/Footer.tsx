import React from 'react'
const Footer = () => {
    return (
        <footer className="bg-off-blue text-white py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
      
      
      <div className="flex-1 pr-8">
        <span className="text-pink text-base font-bold mb-3 block">HEYLOG</span>
        <p className="text-gray text-base mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
        </p>
        <button className="px-8 py-3 bg-pink text-white rounded hover:bg-pink transition-colors text-base font-medium">
          Shop Now
        </button>
      </div>

      
      <div className="flex-1 w-full">
        <div className="grid grid-cols-1 grid-cols-2 gap-6 mb-6 ">
          
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Categories</h3>
            <ul>
              <li><a href="#" className="text-gray hover:text-white transition-colors">Beauty</a></li>
              <li><a href="#" className="text-gray hover:text-white transition-colors">Health</a></li>
              <li><a href="#" className="text-gray hover:text-white transition-colors">Furniture</a></li>
              <li><a href="#" className="text-gray hover:text-white transition-colors">Groceries</a></li>
            </ul>
          </div>
          
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <ul>
              <li><a href="#" className="text-gray hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="text-gray hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray hover:text-white transition-colors">Twitter</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>

   
    <div className="border-t border-gray mt-8 pt-4 text-center">
      <p className="text-gray text-sm">© 2025 Butterfly Company. All Rights Reserved.</p>
    </div>
  </div>
</footer>

      
    );
  };
  
  export default Footer;
  
