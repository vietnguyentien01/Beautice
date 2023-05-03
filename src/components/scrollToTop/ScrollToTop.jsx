import { useEffect, useState } from "react";
import CaretUp from "../../assets/imgs/icon/arrow-up.png";
import "./scrollToTop.css";

export default function ScrollToTop() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    
    return (
    <>
        {showTopBtn && <button className="scroll-container" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>
      <img src={CaretUp} alt="" />
    </button>}
    </>
  );
}
