import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Welcome = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the heading, paragraph, and button
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 1.2 }
    );
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 1.5 }
    );
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://wallpapers.com/images/high/pokemon-battle-background-mmg7wwn2m7rbjkyt.webp')`,
      }}
    >
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1
            ref={headingRef}
            className="text-4xl font-bold mb-4"
          >
            Swagat Hai Aapka
          </h1>
          <p
            ref={paragraphRef}
            className="text-lg mb-6"
          >
            Welcome to the Pokémon Battle Simulator!
          </p>
          <Link to="/arena">
            <button
              ref={buttonRef}
              className="bg-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-600 transition-all"
            >
              Let’s Go
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
