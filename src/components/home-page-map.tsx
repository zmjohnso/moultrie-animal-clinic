"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

export function HomePageMap() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <div className="w-full h-full min-h-[300px] rounded-md overflow-hidden relative">
      {!isMapLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <span className="sr-only">Loading map...</span>
          <MapPin className="h-12 w-12 text-gray-400" />
        </div>
      )}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.5511120403247!2d-81.31808368489!3d29.846099981951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e6d9f0b1d7e5e7%3A0x1b5c5b1d1b1b1b1b!2s3450%20US-1%2C%20St%20Augustine%2C%20FL%2032086!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map of Moultrie Animal Clinic"
        onLoad={() => setIsMapLoaded(true)}
        className={isMapLoaded ? "opacity-100" : "opacity-0"}
      ></iframe>
    </div>
  );
}
