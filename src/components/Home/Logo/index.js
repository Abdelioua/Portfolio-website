import "./index.scss";
import LogoS from "../../../assets/images/ao.png";
import LogoOutlined from "../../../assets/images/a.png";
import { useEffect, useRef } from "react";
import gsap from "gsap-trial";

const Logo = () => {
  const bgRef = useRef();
  const solidRef = useRef();
  const outlineRef = useRef();

  useEffect(() => {
    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 2,
        opacity: 1,
      })
      .to(outlineRef.current, {
        duration: 2,
        opacity: 1,
      });
    gsap.fromTo(
      solidRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 0.7,
        duration: 4,
        delay: 4,
      }
    );
  }, []);
  return (
    <div ref={bgRef} className="logo-container">
      <img ref={solidRef} className="solid-logo" src={LogoS} alt="S" />
      <img
        ref={outlineRef}
        className="outlined-logo"
        src={LogoOutlined}
        alt="Soutlined"
      />
    </div>
  );
};

export default Logo;
