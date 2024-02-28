import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-8">
  <div className="container w-3/4 gap-14 mx-auto flex flex-wrap">
    {/* Category Column */}
    <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-4">
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      <ul>
        <li>Web builder</li>
        <li>hosting</li>
        <li>Data Center</li>
        <li>Robotics Automation</li>
        {/* Add more categories as needed */}
      </ul>
    </div>

    {/* Contact Column */}
    <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-4">
      <h3 className="text-lg font-semibold mb-4">Contact</h3>
      <p>Contact</p>
     <p>Privacy policy</p>
     <p>Terms of service</p>
     <p>Categories</p>
     <p>About</p>
    </div>

    {/* Address Column */}
    <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-4">
      <p>United States  <i className="fa fa-chevron-down text-gray-400 px-2"></i></p>
     
    </div>
  </div>
</div>

  )
}

export default Footer