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
      <p>Email: contact@example.com</p>
      <p>Phone: (123) 456-7890</p>
    </div>

    {/* Address Column */}
    <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-4">
      <h3 className="text-lg font-semibold mb-4">Address</h3>
      <p>123 Street, City</p>
      <p>Country, ZIP Code</p>
    </div>
  </div>
</div>

  )
}

export default Footer