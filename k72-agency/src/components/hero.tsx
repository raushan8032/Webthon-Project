import { useEffect, useRef } from 'react';

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const smallVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error: any) => {
        console.error('Video autoplay failed:', error);
      });
    }
    if (smallVideoRef.current) {
      smallVideoRef.current.play().catch((error: any) => {
        console.error('Small video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <section className="hero">

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="backgroundVideo"
      >
        <source src="/videos/v1.mp4" type="video/mp4" />
      </video>

      <div className="overlay"></div>

      <h1 className="heroText">
        <span>The spark</span>
        <video
          ref={smallVideoRef}
          autoPlay
          muted
          loop
          playsInline
          className="smallVideo"
        >
          <source src="/videos/v1.mp4" type="video/mp4" />
        </video>
        <span>who generates their creativity</span>
      </h1>

    </section>
  );
}

export default Hero;