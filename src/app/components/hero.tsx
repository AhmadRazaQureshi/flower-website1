

import Image from "next/image";
import "../style/hero.css";
const Hero = () => {
    return (

        <div className="hero">
            <div className="hero-content">

                <h1>Welcome to Our Flower Shop</h1>
                <p>We sell high-quality flowers at affordable prices.</p>
                <button> Explore Now</button>
            </div>
    <div className="banner-container">
      <Image
        src="/banner.webp"
        alt="Flower Banner"
        width={1920}
        height={1080}
        layout="responsive"
      />

        </div>


            </div>
    );
}
export default Hero
