"use client";
import React, { useRef, useEffect } from "react";
// import Header from "./header/page";
import Head from "next/head";
import Link from "next/link";
// import Footer from "./footer/page";
import Image from "next/image";
import { PatternFormat } from "react-number-format";
import styles from "../page.module.css";
// import { useRouter } from "next/router";
import Footer from '../components/Footer'
import ReCAPTCHA from "react-google-recaptcha";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useState } from "react";
const Home = () => {
  const [recaptchaResponse, setRecaptchaResponse] = useState(false);
  const tawkMessengerRef = useRef();
  const [gray, setGray] = useState(true);
  const [grayBottom, setGrayBottom] = useState(true);
  const [brandDescription, setBrandDescription] = useState();
  const [quote, setQuote] = useState(false);
  const [model, setModel] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [type, setType] = useState();
  const [timeOut, setTimeOut] = useState();
  const [printSpeed, setPrintSpeed] = useState();
  const [paperSize, setpaperSize] = useState();
  const [modelNumber, setModelNumber] = useState();
  const [lastBullet, setLastBullet] = useState();
  const [almostLastBullet, setAlmostLastBullet] = useState();
  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };
  const onLoad = () => {
    console.log("onLoad works!");
  };
  var verifyCallback = function (response) {
    setRecaptchaResponse(response);
  };
  const captchaRef = useRef(null);
  useEffect(() => {
    const storedModel = localStorage.getItem("Model");
    const photo = localStorage.getItem("Image");
    const time = localStorage.getItem("timeOut");
    const back = localStorage.getItem("type");
    const speed = localStorage.getItem("PagesPerMinute");
    const modelNumber = localStorage.getItem("modelNumber");
    const paperSize = localStorage.getItem("paperSize");
    const desc = localStorage.getItem("description");
    setModel(storedModel);
    setImage(photo);
    setType(back);
    setPrintSpeed(speed);
    setModelNumber(modelNumber);
    setpaperSize(paperSize);
    setTimeOut(time);
    setDescription(desc);

    if (localStorage.getItem("brand") === "lexmark") {
      setBrandDescription(
        "Lexmark, formerly an IBM company, had produced hands down the most reliable machines ever built. Their modular construction ensures the most efficient paper path in the industry. Independent BLI testing proved their top copier models performing with only 1 jam after 1,000,000 copies tested. Their dominant 85% of the market share in pharmacuetical and medical establishments is a testament to their unrivaled reliability"
      );
      setLastBullet(
        " Known for their fast print speeds and efficient performance."
      );
      setAlmostLastBullet(
        "Durability and reliability: Lexmark copiers are built to withstand heavy use and are known for their reliability, reducing downtime and ensuring consistent performance."
      );
    } else if (localStorage.getItem("brand") !== "lexmark") {
      setLastBullet(
        "High-quality output: Konica Minolta copiers are known for delivering exceptional print quality with sharp text and vibrant images."
      );
      setBrandDescription(
        "Konica Minolta offers the top color quality output in the industry. These machines are built to last with minimal disruption. With up to 12x18 paper sizes standard, there is nothing your office cannot do with these copiers."
      );
      setAlmostLastBullet(
        "Energy efficiency: Konica Minolta copiers are designed with energy-saving features, helping businesses reduce their environmental footprint and save on energy costs."
      );
    }
  }, []);

  return (
    <div className={styles.main}>
      <div>
        <TawkMessengerReact
          onLoad={onLoad}
          propertyId="5abd4931d7591465c7090c65"
          widgetId="default"
          useRef={tawkMessengerRef}
        />
      </div>

      <div className={styles.logoSpaceContainer}>
        <div className={styles.logoSpace}>
          <Image
            alt={"copiers arizona"}
            src={`/logo.webp`}

            width={270}
            height={270}
          />
          <div className={styles.columnContainer}>
            <div />
            <div className={styles.rowHead}>
              <div className={styles.titleSmallHeader}>Home</div>
              <Link href={'/products'}>
                <div className={styles.titleSmallHeader}>Our Models</div>
              </Link>
              <div className={styles.titleSmallHeader}>About Us</div>
            </div>
            <div className={styles.mediumColumn}>
              <div className={styles.infoSmall}>info@copiersutah.com</div>
              <div className={styles.infoMedium}>Ph: (801) 261-0510</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.line}></div>
      <div className={styles.section}>
        <div className={styles.copierContainer}>
          <h1 className={styles.bigTitle}>Lexmark XC 8160</h1>

          <Image alt={"lexmark 8160"} src={`/8160.webp`} width={200} height={300} />
        </div>
        <div className={styles.centerMain}>
          <div className={styles.title}>
            Our Most Reliable Multifunction Copier
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: "18px",
              margin: "15px",
              lineHeight: "30px",
            }}
          >
            The Lexmark 8160 is renowned for its exceptional reliability, making
            it a top choice among printers. Its robust build and well-engineered
            components ensure consistent and dependable performance, providing a
            hassle-free printing experience for users.
          </div>

          <div className={styles.fifty}>
            <button className={styles.button}>Lease Now</button>
          </div>
        </div>
      </div>
      <div className={styles.titleMedSmall}>Specs And Other Options</div>
      <div className={styles.center}>
        <Image alt={"down arrow"} src={"/down-arrow-5.webp"} width={100} height={100} />
      </div>
      <div className={styles.center}>
        <div className={styles.lineSmall}></div>
      </div>
      <div style={{ display: "flex", width: "100%", paddingTop: "20px", display: "flex", justifyContent: "center", paddingBottom: "100px", height:"fit-content" }}>
        <div
          style={{
            height: "fit-content",
            width: "75%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <div className={styles.column}>
            <div className={styles.bigTitle}>
              Lexmark XC 8160 Multifunction Printer
            </div>
            <div style={{height:"100%"}} className={styles.row}>

              <div>
                <div className={styles.fourty}>
                  <div className={styles.bulletContainer}>
                    <Image className={styles.gap} alt={"down arrow"} src={"/seen.webp"} width={25} height={25} />
                    <div className={styles.paragraphSmall}>
                      Print speeds at {printSpeed} pages per minute!
                    </div>
                  </div>
                  <div className={styles.bulletContainer}>
                    <Image className={styles.gap} alt={"down arrow"} src={"/seen.webp"} width={25} height={25} />
                    <div className={styles.paragraphSmall}>
                      Largest print size is {paperSize} inches
                    </div>
                  </div>
                  <div className={styles.bulletContainer}>
                    <Image className={styles.gap} alt={"down arrow"} src={"/seen.webp"} width={25} height={25} />
                    <div className={styles.paragraphSmall}>
                      First page out time is {timeOut} seconds
                    </div>
                  </div>
                  <div className={styles.bulletContainer}>
                    <Image className={styles.gap} alt={"down arrow"} src={"/seen.webp"} width={25} height={25} />
                    <div className={styles.paragraphSmall}>{lastBullet}</div>
                  </div>
                  <div className={styles.bulletContainer}>
                    <Image className={styles.gap} alt={"down arrow"} src={"/seen.webp"} width={25} height={25} />
                    <div className={styles.paragraphSmall}>
                      {almostLastBullet}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.copierContainer}>
                <Image alt={"lexmark 8160"} src={`/8160.webp`} width={250} height={350} />
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className={styles.centerBox}>
        <div style={{ paddingBottom: "10px" }} className={styles.title}>Our Select Reliable Choices</div>
        <div className={styles.titleSmall}>(Our favorite options)</div>
        <div className={styles.grid}>
          <div className={styles.flex}>
            <div className={styles.boxContainer}>
              <div className={styles.box}>
                <div className={styles.titleMed}>
                  Our Favorite Black And White option
                </div>
                <div>
                  <Image alt={"lexmark xc62152"} src={"/xc6152.webp"} height={250} width={250} />
                </div>
                <div className={styles.titleSmall}>Lexmark XC6152</div>
                <div className={styles.buttonContainer1}>
                  <Link className={styles.aFlex} href={"/6152"}>
                    <button className={styles.button1}>See Details</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.boxContainer}>
              <div className={styles.box}>
                <div className={styles.titleMed}>
                  Our Favorite Desktop Printer
                </div>
                <div>
                  <Image alt={"lexmark xc8160"} src={'/8160.webp'} height={250} width={200} />
                </div>
                <div className={styles.titleSmall}>Lexmark XC6152</div>
                <div className={styles.buttonContainer1}>
                  <Link href={"/6152"}>
                    <button className={styles.button1}>See Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.flex}>
            <div className={styles.boxContainer}>
              <div className={styles.box}>
                <div className={styles.titleMed}>
                  Our Favorite  And White Option
                </div>
                <div>
                  <Image alt={"lexmark xc6152"} src={"/xc6152.webp"} height={250} width={250} />
                </div>
                <div className={styles.titleSmall}>Lexmark XC6152</div>
                <div className={styles.buttonContainer1}>
                  <Link href={"/6152"}>
                    <button className={styles.button1}>See Details</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.boxContainer}>
              <div className={styles.box}>
                <div className={styles.titleMed}>
                  Our Favorite  And White Option
                </div>
                <div>
                  <Image alt={"lexmark xc6152"} src={"/xc6152.webp"} height={250} width={250} />
                </div>
                <div className={styles.titleSmall}>Lexmark XC6152</div>
                <div className={styles.buttonContainer1}>
                  <Link href={"/6152"}>
                    <button className={styles.button1}>See Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.centerBoxRow}>
        <div className={styles.container}>
          <div className={styles.titleForm}>Get Your free Quote Today!</div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              height: "80%",
              alignItems: "center",
            }}
          >
            <div className={styles.space}>
              <div className={styles.formContainer}>
                <div className={styles.titleSmall}>Full Name</div>

                <input
                  className={styles.inputSingle}
                  placeholder="Enter Full Name"
                  type="text"
                  name=""
                  id=""
                  required={true}
                  onChange={() => {
                    setName(event.target.value);
                  }}
                />

              </div>
              <div className={styles.formContainer}>
                <div className={styles.titleSmall}>Phone Number</div>
                <input
                  className={styles.inputSingle}
                  type="tel"
                  name="telphone"
                  placeholder="Full Phone Number"
                  pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                  maxLength="12"
                  title="Ten digits code"
                  onChange={() => {
                    setNumber(event.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div className={styles.spaceBottom}>
              <div>
                <div className={styles.titleSmall}>Email</div>
                <input className={styles.inputSingle} placeholder={"Enter Full Email"} type="text" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", width: "50%", paddingLeft: "10px" }}>
                <div className={styles.row}>
                  <input className={styles.circle} type="checkbox" />
                  <div className={styles.titleSmallNo}>Call</div>
                </div>
                <div className={styles.row}>
                  <input className={styles.circle} type="checkbox" />
                  <div className={styles.titleSmallNo}>Email</div>
                </div>


              </div>
            </div>

            <div style={{ width: "80%" }}>
              <div className={styles.titleSmall}>Message</div>
              <input
                onChange={() => {
                  setMessage(event.target.value);
                }}
                className={styles.inputSingleFull}
                placeholder="Full Message"
                type="text"
              />
            </div>

          </div>
          <div
            style={{ height: "25%", display: "flex" }}
            className={styles.padding}
          >

            <ReCAPTCHA
              style={{
                padding:"20px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center",
              }}
              className="recaptcha"
              sitekey={"6LdNLYElAAAAAIMv324AxwjVLAnHHIdnIWPEYeQi"}
              ref={captchaRef}
            />
          </div>
          <button
          className={styles.buttonBlue}
            onClick={() => {
              props.quote();
              handleClick();
            }}
            
          >
            Get My Free Quote
          </button>
        </div>
        <Image alt={"handshake"} src={'/handshake.webp'} height={600} width={500} />
      </div>
      <div className={styles.centerBoxColumn}>
        <div style={{ padding: "20px" }} className={styles.title}>About Copiers Arizona</div>
        <Image alt={"copiers arizona team"} style={{ borderRadius: "5px" }} src={'/team.webp'} height={450} width={350} />
        <div className={styles.paragraphContainerMed}>
          <div className={styles.paragraphNo}>

            At Copiers Arizona, we are dedicated to providing businesses in Arizona with reliable copiers that deliver exceptional performance. That's why we have partnered exclusively with Lexmark, a trusted industry leader known for their dependable office equipment. With our strong focus on reliability, you can trust that our selection of Lexmark copiers will meet and exceed your expectations.</div>
        </div>
        <div className={styles.paragraphContainerMed}>
          <div className={styles.paragraphNo}>

            With Lexmark's renowned dependability, our copiers ensure smooth and uninterrupted operations for your business. Whether you need a compact desktop printer or a powerful multifunction device, our range of reliable Lexmark models is designed to handle your printing and copying needs with ease. You can count on our copiers to consistently deliver high-quality results, minimizing downtime and maximizing productivity in your office.</div>
        </div>
        <div className={styles.paragraphContainerMed}>
          <div className={styles.paragraphNo}>

            Choose Copiers Arizona and Lexmark for unrivaled reliability in your office. Contact us today to explore our range of reliable copiers and discover the difference they can make in your business operations.</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
