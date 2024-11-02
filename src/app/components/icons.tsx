import "../style/icon.css"
import Image from "next/image";
const Icons = () => {
    return (
              <div className="icons-container">
                <div className="icon">
                  <Image src="/free.png" alt="Free Delivery" width={30} height={30} />
                  <p>Free Delivery</p>
                </div>
                <div className="icon">
                  <Image src="/icon4.png" alt="Secure Payment" width={30} height={30} />
                  <p>Secure Payment</p>
                </div>
                <div className="icon">
                  <Image src="/icon3.jpg" alt="Offer & Gifts" width={30} height={30} />
                  <p>Offer & Gifts</p>
                  </div>
            </div>
          );
        }
        
        export default Icons;