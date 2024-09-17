import React from 'react'
import image from "../public/Ayush.jpg";
import image2 from "../cq.jpeg";
import { Users, FileText, BookOpen, Star } from 'lucide-react';

const Homepage = () => {

  const features = [
    { name: 'Networks', icon: Users, description: 'Connect with AYUSH professionals and startups' },
    { name: 'Apply', icon: FileText, description: 'Submit your AYUSH startup application' },
    { name: 'Resources', icon: BookOpen, description: 'Access AYUSH research and development materials' },
    { name: 'Initiatives', icon: Star, description: 'Explore government AYUSH initiatives and programs' },
  ];


  return (
    <div className="font-sans bg-white">
    {/* Background Image */}
    <div 
      className="fixed inset-0 z-0 opacity-10"
      style={{
        backgroundImage: "url('/api/placeholder/1920/1080')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    ></div>

    {/* Content */}
    <div className="relative z-10">
      {/* Header */}
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={image} alt="AYUSH Logo" className="h-14" />
            <h1 className="text-2xl font-bold text-orange-600">AYUSH Startup India</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              {features.map((feature) => (
                <li key={feature.name}>
                  <a href={`#${feature.name.toLowerCase()}`} className="text-blue-900 hover:text-orange-600">
                    {feature.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Featured Sections */}
        <section className="py-16 bg-gradient-to-b from-orange-50 to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Explore AYUSH Startup Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <div key={feature.name} className="bg-white rounded-lg shadow-lg p-6 border border-orange-200 hover:border-orange-400 transition-colors duration-300">
                  <feature.icon className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">{feature.name}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <a
                    href={`#${feature.name.toLowerCase()}`}
                    className="inline-block bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300"
                  >
                    Explore {feature.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-12">
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-900">12</p>
                <p className="text-gray-600">Registered AYUSH Startups</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-900">100</p>
                <p className="text-gray-600">Portal Users</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <p className="text-center">&copy; 2024 AYUSH Startup India. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </div>
  )
}

export default Homepage