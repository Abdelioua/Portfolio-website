import "./index.scss";
import Loader from "react-loaders";
import AnimatedText from "../AnitmatedText";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
  const [charClass, setCharCass] = useState("text-animate");
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_qbonw8p",
        formRef.current,
        "upKfrf0Qr0PP8LQ7s"
      )
      .then(
        () => {
          alert("email sent");
        },
        () => {
          alert("failed to send email");
        }
      );
  };
  useEffect(() => {
    setTimeout(() => {
      setCharCass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedText
              strArr={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
              charClass={charClass}
              idx={15}
            />
          </h1>
          <p>
            I'm intersted in Frontend web development roles, i have a background
            in backend development aswell, and i'm willing to relocate.
          </p>
          <div className="contact-form">
            <form ref={formRef} onSubmit={handleSubmit}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message..."
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-zone">
          <MapContainer center={[21.42251, 39.826168]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[21.42251, 39.826168]}>
              <Popup>Abderrahmane Lives Here!</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="info">
          Abderrahmane Abdelioua, <br /> Saudi Arabia <br /> Makkah, 24245{" "}
          <br /> Abderrahmane.abdelioua@gmail.com
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
