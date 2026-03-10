import { useEffect, useRef } from 'react';

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error: any) => {
        console.error('Video autoplay failed:', error);
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
        The spark who generates their creativity
      </h1>

    </section>
  );
}

export default Hero;