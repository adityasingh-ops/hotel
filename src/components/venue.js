import React, { useState } from 'react';
import { Users, Calendar, MapPin, Star, Heart, PartyPopper, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const VenueBookingSection = () => {
  const sendEmail = (venueType) => {
    const subject = `Venue Booking Inquiry - ${venueType}`;
    const body = `Hello Manokamana Hotel,

I would like to inquire about booking the ${venueType} for my upcoming event. Please provide:

1. Availability for my preferred dates
2. Pricing details and packages
3. Included amenities and services
4. Catering options
5. Decoration policies
6. Any additional charges
Event Details:
- Venue: ${venueType}
- Expected Guests: 
- Event Date: 
- Event Type: 
- Special Requirements: git@github.com:adityasingh-ops/hotel.git
Thank you for your time. I look forward to hearing from you soon.

Best regards,`;
    
    window.location.href = `mailto:adi7753071602@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const venues = [
    {
      title: "Grand Marriage Hall",
      capacity: "200-300 Guests",
      price: "₹25,000",
      period: "per day",
      image: "🏰 Spacious Grand Hall",
      features: [
        "Spacious hall for large gatherings",
        "Modern sound system included",
        "Stage setup available",
        "Air conditioning throughout",
        "Bridal room facility",
        "Catering kitchen access",
        "Decorative lighting options",
        "Ample parking space"
      ],
      type: "Grand Marriage Hall",
      icon: <Crown className="w-6 h-6" />,
      color: "from-purple-600 to-pink-600",
      ideal: "Perfect for weddings, large celebrations"
    },
    {
      title: "Intimate Function Hall", 
      capacity: "50-100 Guests",
      price: "₹12,000",
      period: "per day",
      image: "💎 Cozy Celebration Space",
      features: [
        "Intimate setting for close gatherings",
        "Premium interior design",
        "Flexible seating arrangements",
        "Built-in bar counter",
        "Private entrance",
        "Dedicated service staff",
        "Audio-visual equipment",
        "Climate controlled environment"
      ],
      type: "Intimate Function Hall",
      icon: <Heart className="w-6 h-6" />,
      color: "from-rose-500 to-orange-500",
      ideal: "Perfect for engagements, small parties"
    },
    {
      title: "Royal Lawn Garden",
      capacity: "300-500 Guests",
      price: "₹30,000",
      period: "per day",
      image: "🌺 Beautiful Outdoor Garden",
      features: [
        "Expansive open-air venue",
        "Lush green landscaping",
        "Gazebo/mandap setup available",
        "String lighting arrangements",
        "Separate catering area",
        "Guest seating for 500+",
        "Photography-friendly backdrop",
        "Weather contingency options"
      ],
      type: "Royal Lawn Garden",
      icon: <PartyPopper className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
      ideal: "Perfect for grand weddings, outdoor events"
    }
  ];

  const eventTypes = [
    { name: "Wedding Ceremonies", icon: "💒" },
    { name: "Reception Parties", icon: "🎊" },
    { name: "Engagement Functions", icon: "💍" },
    { name: "Birthday Celebrations", icon: "🎂" },
    { name: "Anniversary Parties", icon: "🥂" },
    { name: "Corporate Events", icon: "🏢" },
    { name: "Cultural Programs", icon: "🎭" },
    { name: "Family Gatherings", icon: "👪" }
  ];

  return (
    <motion.section 
      className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Venue & Event Spaces
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your special moments into unforgettable memories at our premium venue spaces. 
            From intimate gatherings to grand celebrations, we have the perfect setting for every occasion.
          </p>
        </motion.div>

        {/* Event Types */}
        <motion.div 
          className="mb-20"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Perfect For All Occasions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {eventTypes.map((event, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-700 hover:border-amber-500 transition-all duration-300"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-3">{event.icon}</div>
                <h4 className="text-white font-semibold text-sm">{event.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Venue Cards */}
        <div className="grid lg:grid-cols-3 gap-10">
          {venues.map((venue, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800/70 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden hover:shadow-amber-500/20 transition-all duration-500 border border-gray-700 hover:border-amber-500 group"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -10 }}
              viewport={{ once: true }}
            >
              {/* Image Section */}
              <div className={`h-64 bg-gradient-to-br ${venue.color} flex items-center justify-center text-white text-2xl font-semibold relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <span className="relative z-10 text-center px-4">{venue.image}</span>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full">
                  {venue.icon}
                </div>
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  {venue.ideal}
                </div>
              </div>
              
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {venue.title}
                  </h3>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                
                {/* Capacity */}
                <div className="flex items-center mb-4 text-gray-300">
                  <Users className="w-5 h-5 mr-2 text-amber-400" />
                  <span className="font-semibold">{venue.capacity}</span>
                </div>
                
                {/* Pricing */}
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-amber-400">{venue.price}</span>
                  <span className="text-gray-400 ml-2 text-lg">/ {venue.period}</span>
                </div>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {venue.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start text-gray-300 text-sm"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                {/* Book Button */}
                <motion.button
                  onClick={() => sendEmail(venue.type)}
                  className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-black py-4 px-6 rounded-2xl font-bold hover:from-amber-500 hover:to-orange-600 transform transition-all duration-300 shadow-lg hover:shadow-amber-500/25 group-hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Calendar className="inline w-5 h-5 mr-2" />
                  Book This Venue
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700">
            <h3 className="text-3xl font-bold text-white mb-6">Need a Custom Package?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our event planning team can create customized packages combining venue, catering, 
              decoration, and accommodation to make your celebration truly special.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                onClick={() => window.open('tel:+918299656792')}
                className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Call for Custom Quote
              </motion.button>
              <motion.button
                onClick={() => sendEmail('Custom Event Package')}
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ✨ Request Custom Package
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VenueBookingSection;