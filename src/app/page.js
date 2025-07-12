"use client";
import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Wifi, Car, Coffee, Utensils, AirVent, Fan, Star, Users, Clock, PersonStanding } from 'lucide-react';
import { motion } from 'framer-motion';
import HotelGallerySection from '@/components/hotelGalary';
import VenueBookingSection from '@/components/venue';

const ManokamanaHotelWebsite = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const sendEmail = (type, roomType = '') => {
    const subject = roomType ? `Booking Inquiry - ${roomType}` : `Contact - ${type}`;
    const body = roomType 
      ? `I would like to book a ${roomType} at Manokamana Hotel. Please provide availability and booking details.`
      : `Hello, I would like to inquire about Manokamana Hotel services.`;
    
    window.location.href = `mailto:adi7753071602@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const rooms = [
    {
      title: "Standard Non-AC Room",
      price: "₹999",
      period: "per night",
      image: "🛏️ Comfortable Standard Room",
      features: ["Comfortable bed", "Private bathroom", "Room service", "24/7 reception", "Free Wi-Fi"],
      type: "Standard Non-AC Room",
      icon: <Fan className="w-6 h-6" />
    },
    {
      title: "Deluxe AC Room", 
      price: "₹1,499",
      period: "per night",
      image: "❄️ Premium AC Experience",
      features: ["Air conditioning", "Premium bedding", "Private bathroom", "Room service", "Free Wi-Fi",],
      type: "Deluxe AC Room",
      icon: <AirVent className="w-6 h-6" />
    },
  ];

  const amenities = [
    { icon: <Wifi className="w-8 h-8" />, title: "Free Wi-Fi", desc: "High-speed internet" },
    { icon: <Car className="w-8 h-8" />, title: "Parking", desc: "Free parking available" },
    { icon: <PersonStanding className="w-8 h-8" />, title: "Service", desc: "24/7 Service" },
    { icon: <Clock className="w-8 h-8" />, title: "24/7 Service", desc: "Round the clock support" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-black/95 backdrop-blur-lg shadow-2xl border-b border-amber-500/20' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Manokamana Hotel
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'rooms', 'amenities', 'contact'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium text-gray-300 hover:text-amber-400 transition-all duration-300 relative ${
                    activeSection === item ? 'text-amber-400' : ''
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                  {activeSection === item && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-orange-500"></div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        id="home" 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <img src="/assets/images/hero.jpg" alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-20 bg-blend-lighten" />

        <motion.div 
          className="relative z-10 text-center text-white max-w-5xl mx-auto px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Welcome to<br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
              Manokamana Hotel
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-3xl mb-12 opacity-90 font-light"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Experience luxury and comfort in the heart of Kushinagar, Uttar Pradesh
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection('rooms')}
              className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-10 py-5 rounded-full text-xl font-bold hover:from-amber-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25"
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.25)" }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Stay
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('about')}
              className="border-2 border-amber-400 text-amber-400 px-10 py-5 rounded-full text-xl font-bold hover:bg-amber-400 hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-12 border-2 border-amber-400 rounded-full flex justify-center">
            <div className="w-2 h-4 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-24 bg-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">About Manokamana Hotel</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
          </motion.div>
          
          <HotelGallerySection/>

          {/* Location Info with Embedded Map */}
          <motion.div 
            className="mt-20 bg-gray-700 rounded-3xl shadow-2xl p-10 border border-gray-600"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Our Location</h3>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-amber-500 p-3 rounded-full">
                    <MapPin className="text-black w-6 h-6" />
                  </div>
                  <span className="text-gray-300 text-lg">Deoria Road, Near Diwani Kachehari</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-amber-500 p-3 rounded-full">
                    <MapPin className="text-black w-6 h-6" />
                  </div>
                  <span className="text-gray-300 text-lg">Kushinagar, Uttar Pradesh - 274402</span>
                </motion.div>
                
                <motion.button 
                  onClick={() => window.open('https://maps.app.goo.gl/NnNMb6Rn6nWk5VVf9', '_blank')}
                  className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🗺️ Open in Google Maps
                </motion.button>
              </div>
              
              {/* Embedded Map */}
              <div className="relative">
                <div className="bg-gray-600 rounded-2xl overflow-hidden shadow-xl border border-gray-500">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.123!2d83.889!3d26.745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ0JzQyLjAiTiA4M8KwNTMnMjAuNCJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Amenities Section */}
      <motion.section 
        id="amenities" 
        className="py-24 bg-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Hotel Amenities</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-gray-800 rounded-2xl shadow-xl border border-gray-700 hover:border-amber-500 transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                viewport={{ once: true }}
              >
                <div className="text-amber-400 mb-4 flex justify-center">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{amenity.title}</h3>
                <p className="text-gray-400">{amenity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Rooms Section */}
      <motion.section 
        id="rooms" 
        className="py-24 bg-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Our Rooms & Suites</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our range of comfortable and well-appointed rooms designed for your perfect stay
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {rooms.map((room, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-700 rounded-3xl shadow-2xl overflow-hidden hover:shadow-amber-500/10 transition-all duration-500 border border-gray-600 hover:border-amber-500"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -10 }}
                viewport={{ once: true }}
              >
                <div className="h-72 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 flex items-center justify-center text-white text-2xl font-semibold relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <span className="relative z-10">{room.image}</span>
                  <div className="absolute top-4 right-4 bg-amber-500 text-black p-2 rounded-full">
                    {room.icon}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{room.title}</h3>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-amber-400">{room.price}</span>
                    <span className="text-gray-400 ml-2 text-lg">/ {room.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {room.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center text-gray-300"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.button
                    onClick={() => sendEmail('booking', room.type)}
                    className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-black py-4 px-6 rounded-2xl font-bold hover:from-amber-500 hover:to-orange-600 transform transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    🏷️ Book Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
            <VenueBookingSection/>
      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-24 bg-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Get In Touch</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to experience the best hospitality in Kushinagar? Contact us today!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div 
              className="space-y-10"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 text-white">Contact Information</h3>
              
              <div className="space-y-8">
                <motion.div 
                  className="flex items-center space-x-6"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-4 rounded-full">
                    <Phone className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white">Phone</h4>
                    <p className="text-gray-300 text-lg">+91 8299656792</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-6"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-4 rounded-full">
                    <Mail className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white">Email</h4>
                    <p className="text-gray-300 text-lg">adi7753071602@gmail.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-6"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-4 rounded-full">
                    <MapPin className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white">Address</h4>
                    <p className="text-gray-300 text-lg">
                      Deoria Road, Near Diwani Kachehari<br />
                      Kushinagar, Uttar Pradesh - 274402
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="flex space-x-6 pt-6">
                <motion.button
                  onClick={() => window.open('tel:+917753071602')}
                  className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📞 Call Now
                </motion.button>
                <motion.button
                  onClick={() => sendEmail('inquiry')}
                  className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-8 py-4 rounded-2xl font-bold hover:from-amber-500 hover:to-orange-600 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📧 Send Email
                </motion.button>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-800 rounded-3xl p-10 shadow-2xl border border-gray-700"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 text-white">Business Hours</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-gray-700">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-amber-400 font-bold">24/7</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-700">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-amber-400 font-bold">24/7</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-amber-400 font-bold">24/7</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-24 bg-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          

          {/* Google Reviews Section */}
          <motion.div 
            className="mt-24"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-white text-center mb-16">What Our Guests Say</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700 hover:border-amber-500 transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    R
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-bold">Sudhir Prajapati</h4>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">
                  "This is a very good hotel. The staff here behaves very well. They provide good service. There is a big ground for parking, I am very happy. It is value for money."
                </p>
                <div className="text-gray-500 text-sm mt-4">Google Review</div>
              </motion.div>

              <motion.div 
                className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700 hover:border-amber-500 transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    P
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-bold">Rishi Maddhesia</h4>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">
                  "Very good hospitality and naturally blessed place for a quality time spend for family and friends.. specially the owner of the hotel Mr. Rahul Singh is a great person with very kind nature and big ❤️ ."               </p>
                <div className="text-gray-500 text-sm mt-4">Google Review</div>
              </motion.div>

              <motion.div 
                className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700 hover:border-amber-500 transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    A
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-bold">Javed Alam</h4>
                    <div className="flex text-amber-400">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                      <Star className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">
                  "Manokamna hotel is a newly made hotel in kaisa kushinagar this hotal is a good place to stay as well as marriage party.
Very big open area for parking and open hall is available here
This hotel is situated 400 meter away from kaisa deoria road opposite of deewani kachahari kaisa kushinagar"
                </p>
                <div className="text-gray-500 text-sm mt-4">Google Review</div>
              </motion.div>
            </div>

            <motion.div 
              className="text-center mt-12"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => window.open('https://maps.app.goo.gl/NnNMb6Rn6nWk5VVf9', '_blank')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ⭐ View All Reviews on Google
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ManokamanaHotelWebsite;