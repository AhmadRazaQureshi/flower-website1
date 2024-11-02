import "../style/footer.css"
const Footer = () => {
    return (
        <footer className="footer-container">
        <div className="footer-left">
          <h2>Flower Website</h2>
          <p>This is a sample flower website</p>
        </div>
        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul>
            <li>
            <a href="#">Home</a>
            </li>
            <li>
                <a href="#about">About Us</a>
            </li>
            <li>
            <a href="#flower">Flowers</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
          </ul>
          </div>
      <div className="footer-right">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="https://github.com/AhmadRazaQureshi" target="_blank">
            Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ahmad-raza-78a5762a6/" target="_blank">
              Linkdln
            </a>
          </li>
        </ul>
        <p>&copy; 2024 Flower Website. All rights reserved.</p>
      </div>
    </footer>
  

    )
}

export default Footer