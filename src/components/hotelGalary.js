import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Video } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HotelGallerySection = () => {
  // Sample media data - replace with your actual photos and videos
  const mediaItems = [
    {
        type: 'video',
        src: '/assets/videos/hotel.mp4',
        poster: '/assets/images/hero.jpg',
        title: 'Hotel Tour',
        description: 'Virtual walkthrough of our facilities'
      },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Luxury Hotel Exterior',
      description: 'Modern architecture meets traditional hospitality'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Premium Suite',
      description: 'Spacious rooms with modern amenities'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
      title: 'Hotel Restaurant',
      description: 'Fine dining with authentic Indian cuisine'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Conference Hall',
      description: 'State-of-the-art meeting facilities'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Hotel Reception',
      description: '24/7 guest service and hospitality'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && mediaItems[currentIndex].type === 'image') {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isPlaying, currentIndex, mediaItems.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? mediaItems.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === mediaItems.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  const currentItem = mediaItems[currentIndex];

  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <motion.div 
        className="space-y-8"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-xl text-gray-300 leading-relaxed">
          Nestled in the spiritual city of Kushinagar, Manokamana Hotel offers a perfect blend of comfort, 
          luxury, and traditional hospitality. Our hotel is strategically located on Deoria Road, 
          near Diwani Kachehari, providing easy access to major attractions and business centers.
        </p>
        <p className="text-xl text-gray-300 leading-relaxed">
          With modern amenities and warm service, we ensure every guest experiences the true essence 
          of Indian hospitality. Whether you're here for pilgrimage, business, or leisure, 
          Manokamana Hotel is your home away from home.
        </p>
        <div className="grid grid-cols-2 gap-6 mt-12">
          <motion.div 
            className="text-center p-6 bg-gray-700 rounded-2xl shadow-xl border border-gray-600"
            whileHover={{ scale: 1.05, backgroundColor: "rgb(55, 65, 81)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl font-bold text-amber-400 mb-2">20+</div>
            <div className="text-gray-300">Comfortable Rooms</div>
          </motion.div>
          <motion.div 
            className="text-center p-6 bg-gray-700 rounded-2xl shadow-xl border border-gray-600"
            whileHover={{ scale: 1.05, backgroundColor: "rgb(55, 65, 81)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl font-bold text-amber-400 mb-2">24/7</div>
            <div className="text-gray-300">Guest Service</div>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        className="relative"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Main Carousel Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-600 bg-gray-900">
          {/* Media Container */}
          <div className="relative aspect-w-4 aspect-h-3 h-96">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {currentItem.type === 'image' ? (
                  <img
                    src={currentItem.src}
                    alt={currentItem.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      src={currentItem.src}
                      poster={currentItem.poster}
                      className="w-full h-full object-cover"
                      controls={isVideoPlaying}
                      onPlay={() => setIsVideoPlaying(true)}
                      onPause={() => setIsVideoPlaying(false)}
                    />
                    {!isVideoPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                        <button
                          onClick={() => setIsVideoPlaying(true)}
                          className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-4 transition-all duration-300"
                        >
                          <Play className="w-12 h-12 text-white" />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Overlay with title and description */}
           
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Auto-play Control */}
          <button
            onClick={toggleAutoPlay}
            className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-300 z-10"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>

          {/* Media Counter */}
          <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm z-20 z-10">
            {currentIndex + 1} / {mediaItems.length}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-2 mt-6 px-4">
          {mediaItems.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex 
                  ? 'border-amber-400 scale-110' 
                  : 'border-gray-600 opacity-70 hover:opacity-100 hover:border-gray-400'
              }`}
            >
              <img
                src={item.type === 'image' ? item.src : item.poster}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <Play className="w-3 h-3 text-white" />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {mediaItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-amber-400' 
                  : 'w-2 bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HotelGallerySection;