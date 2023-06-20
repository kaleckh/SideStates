"use client";
import React, { useRef, useEffect } from "react";
// import Header from "./header/page";
import Head from "next/head";
// import Footer from "./footer/page";
import Image from "next/image";
import { PatternFormat } from "react-number-format";
import styles from "../page.module.css";
// import { useRouter } from "next/router";
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
            src={`/logo.webp`}
            alt="Lexmark used and new printer"
            width={150}
            height={100}
          />
          <div className={styles.columnContainer}>
            <div />
            <div className={styles.infoBig}>Copiers Arizona</div>
            <div className={styles.mediumColumn}>
              <div className={styles.infoSmall}>info@copiersutah.com</div>
              <div className={styles.infoMedium}>Ph: (801) 261-0510</div>
            </div>
          </div>
        </div>
      </div>

      {/* <Header /> */}
      <div className={styles.section}>
        <div className={styles.title}>Most Reliable Copiers Around</div>
        <div>We Only Sell Reliable Copiers</div>
        <div className={styles.fifty}>
          <button className={styles.button}>See Specs</button>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            height: "fit-content",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <div className={styles.backContainer}></div>
          <div className={styles.lineColumn}>
            <div className={styles.color}>{}</div>
            <div style={{ width: "150%" }} className={styles.line} />
          </div>
          <div className={styles.row}>
            <div className={styles.copierContainer}>
              <Image src={`/8160.webp`} width={200} height={300} />
              <button
                style={{ width: "100%" }}
                onClick={() => {
                  router.push("/buy");
                }}
                className={styles.button}
              >
                Leasing Terms
              </button>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ padding: "5px" }} className={styles.title}>
                  Model Number:
                </div>
                <div className={styles.title}>{modelNumber}</div>
              </div>
            </div>
            {quote ? (
              <Form />
            ) : (
              <div className={styles.column}>
                <div className={styles.bigTitle}>
                  Lexmark XC 8160 Multifunction Printer
                </div>
                <div className={styles.aboutRow}>
                  <div
                    onClick={() => {
                      setGray(true);
                    }}
                    className={
                      gray ? `${styles.focusTitleGray}` : `${styles.focusTitle}`
                    }
                  >
                    About
                  </div>
                </div>
                <div className={styles.line}></div>
                <div>
                  <div>
                    <div className={styles.bulletContainer}>
                      <div className={styles.bullet}>1s</div>
                      <div className={styles.paragraphSmall}>
                        Print speeds at {printSpeed} pages per minute!
                      </div>
                    </div>
                    <div className={styles.bulletContainer}>
                      <div className={styles.bullet}>1s</div>
                      <div className={styles.paragraphSmall}>
                        Largest print size is {paperSize} inches
                      </div>
                    </div>
                    <div className={styles.bulletContainer}>
                      <div className={styles.bullet}>1s</div>
                      <div className={styles.paragraphSmall}>
                        First page out time is {timeOut} seconds
                      </div>
                    </div>
                    <div className={styles.bulletContainer}>
                      <div className={styles.bullet}>1s</div>
                      <div className={styles.paragraphSmall}>{lastBullet}</div>
                    </div>
                    <div className={styles.bulletContainer}>
                      <div className={styles.bullet}>1s</div>
                      <div className={styles.paragraphSmall}>
                        {almostLastBullet}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div style={{ height: "40%" }} className={styles.konikaBottom}>
            <div className={styles.bottomProductContainer}>
              <div className={styles.paragraph}>{brandDescription}</div>
              <div className={styles.paragraph}>{description}</div>
            </div>
          </div>
        </div>
        <div className={styles.boxContainer}>
          <div className={styles.titleMid}>Other Reliable Models</div>
          <div className={styles.box}>
            <div>
              <Image src={"/xc6152.webp"} height={120} width={120} />
            </div>
            <div className={styles.titleSmall}>Lexmark XC6152</div>
            <div className={styles.buttonContainer1}>
              <button className={styles.button1}>See Details</button>
            </div>
          </div>
          <div className={styles.box}>
            <div>
              <Image src={"/8163.webp"} height={120} width={100} />
            </div>
            <div className={styles.titleSmall}>Lexmark XC8163</div>
            <div className={styles.buttonContainer1}>
              <button className={styles.button1}>See Details</button>
            </div>
          </div>
          <div className={styles.box}>
            <div>
              <Image src={"/6153.webp"} height={120} width={100} />
            </div>
            <div className={styles.titleSmall}>Lexmark XC6153</div>
            <div className={styles.buttonContainer1}>
              <button className={styles.button1}>See Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
