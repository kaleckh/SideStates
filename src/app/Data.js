"use client";
import React, { useRef, useEffect } from "react";
// import Header from "./header/page";
import Head from "next/head";
import Link from "next/link";
// import Footer from "./footer/page";
import Image from "next/image";
import { PatternFormat } from "react-number-format";
import styles from "./page.module.css";
// import { useRouter } from "next/router";
import Footer from './components/Footer'
import ReCAPTCHA from "react-google-recaptcha";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useState } from "react";
const Home = () => {
  const [recaptchaResponse, setRecaptchaResponse] = useState(false);
  const tawkMessengerRef = useRef();
  const [gray, setGray] = useState(true);
  const [grayBottom, setGrayBottom] = useState(true);
  const [desktopNumber, setDesktopNumber] = useState(0);
  const [desktopBlack, setDesktopBlack] = useState(0);
  const [desktopColor, setDesktopColor] = useState(0);
  const [desktopEleven, setDesktopEleven] = useState(0);
  const [desktopLegal, setDesktopLegal] = useState(0);
  const [standingNumber, setStandingNumber] = useState(0);
  const [standingBlack, setStandingBlack] = useState(0);
  const [standingColor, setStandingColor] = useState(0);
  const [standingEleven, setStandingEleven] = useState(0);
  const [standingLegal, setStandingLegal] = useState(0);
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
              <Link href={'/'}>
                <div className={styles.titleSmallHeader}>Home</div>
              </Link>
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
      <div className={styles.flexSomething}>
        <div className={styles.homeBox}>
          <div className={styles.titleBox}>
            Make Every Print Count
          </div>
          <div className={styles.paragraphBox}>
            Introducing the top quality copiers with full warranties all toner included for the life of your lease
          </div>
          <button className={styles.button1}>Lease Today</button>
        </div>
        <Image alt={"lexmark 4143"} src={`/manCartoon.png`} width={450} height={300} />
      </div>
      <div className={styles.sectionNormal}>
        <div className={styles.copierContainer}>
          <h1 className={styles.bigTitle}>Lexmark XC 6153</h1>

          <Image alt={"lexmark 4143"} src={`/6153.webp`} width={300} height={250} />
        </div>
        <div className={styles.centerMain}>
          <div className={styles.titleRow}>
            Our Most Reliable
            <div className={styles.blue}>Multifunction Copier</div>
          </div>
          <div className={styles.bulletPoint}>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>Print speeds at 52 per minute</div>
            </div>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>largest Print size is 8.5 in x 14.0 in</div>
            </div>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>First page out time is 7 Seconds</div>
            </div>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>exceptional print quality with sharp text and vibrant images.</div>
            </div>
          </div>
          <div className={styles.fifty}>
            <Link href={'/6153'}>
              <button className={styles.button}>Lease Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.lineSmall}></div>
      </div>
      <div className={styles.sectionNormal}>
        <div className={styles.copierContainer}>
          <h1 className={styles.bigTitle}>Lexmark XC 8163</h1>

          <Image alt={"lexmark 4143"} src={`/8163.webp`} width={300} height={250} />
        </div>
        <div className={styles.centerMain}>
          <div className={styles.title}>
            Our Most Reliable Multifunction Copier
          </div>
          <div className={styles.bulletPoint}>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>Print speeds at 60 pages per minute</div>
            </div>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>largest Print size is  8.5 in x 14.0 in</div>
            </div>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>First page out time is 6.5 seconds</div>
            </div>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>exceptional print quality with sharp text and vibrant images.</div>
            </div>
          </div>
          <div className={styles.fifty}>
            <Link href={'/6153'}>
              <button className={styles.button}>Lease Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.lineSmall}></div>
      </div>
      <div className={styles.sectionNormal}>
        <div className={styles.copierContainer}>
          <h1 className={styles.bigTitle}>Lexmark XC 9225</h1>

          <Image alt={"lexmark 4143"} src={`/9225.webp`} width={300} height={250} />
        </div>
        <div className={styles.centerMain}>
          <div className={styles.title}>
            Our Most Reliable Multifunction Copier
          </div>
          <div className={styles.bulletPoint}>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>Print speeds at 25 pages per minute</div>
            </div>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>largest Print size is 12.6 x 18 in</div>
            </div>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>First page out time is 7 seconds</div>
            </div>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>exceptional print quality with sharp text and vibrant images.</div>
            </div>
          </div>
          <div className={styles.fifty}>
            <Link href={'/9335'}>
              <button className={styles.button}>Lease Now</button>
            </Link>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.lineSmall}></div>
        </div>
      </div>
      <div className={styles.sectionColumn}>
        <div className={styles.sentence}>
          Take Our Quiz And See Our Reccomended Copiers For You
        </div>
        <div className={styles.flexLarge}>
          <div style={{ width: "25%" }}>
            <div className={styles.column}>
              <div className={styles.smallTitle}>Floor Standing Copiers</div>
              <input className={styles.inputSingle}

                onChange={() => {
                  setStandingNumber(event.target.value)
                }}
                placeholder="How Many?"
                type="number"
              />

            </div>
          </div>
          <div className={styles.centerHor}>
            <div className={styles.smallColumn}>
              <div>
                <div className={styles.titleSmal}>Black & white </div>
                <div className={styles.row}>
                  <div className={styles.pointer} onClick={() => {
                    if (standingBlack + standingColor < standingNumber) {
                      setStandingBlack(standingBlack + 1)
                    }
                  }}>+</div>
                  <div className={styles.space}>{standingBlack}</div>
                  <div className={styles.pointer} onClick={() => {
                    if (standingBlack > 0) {
                      setStandingBlack(standingBlack - 1)
                    }
                  }}>-</div>
                </div>
              </div>
              <div>
                <div className={styles.titleSmal}>Color </div>
                <div className={styles.row}>
                  <div className={styles.pointer} onClick={() => {
                    if (standingBlack + standingColor < standingNumber) {
                      setStandingColor(standingColor + 1)
                    }
                  }}>+</div>
                  <div className={styles.space}>{standingColor}</div>
                  <div className={styles.pointer} onClick={() => {
                    if (standingColor > 0) {
                      setStandingColor(standingColor - 1)
                    }
                  }}>-</div>
                </div>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.smallColumn}>
              <div>
                <div className={styles.titleSmal}>11 x 17 needed </div>
                <div className={styles.row}>
                  <div className={styles.pointer} onClick={() => {
                    if (standingEleven + standingLegal < standingNumber) {
                      setStandingEleven(standingEleven + 1)
                    }
                  }}>+</div>
                  <div className={styles.space}>{standingEleven}</div>
                  <div className={styles.pointer} onClick={() => {
                    if (standingEleven > 0) {
                      setStandingEleven(standingEleven - 1)
                    }
                  }}>-</div>
                </div>
              </div>
              <div>
                <div className={styles.titleSmal}>Letter and Legal </div>
                <div className={styles.row}>
                  <div className={styles.pointer} onClick={() => {
                    if (standingEleven + standingLegal < standingNumber) {
                      setStandingLegal(standingLegal + 1)
                    }
                  }}>+</div>
                  <div className={styles.space}>{standingLegal}</div>
                  <div className={styles.pointer} onClick={() => {
                    if (standingLegal > 0) {
                      setStandingLegal(standingLegal - 1)
                    }
                  }}>-</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flexLarge}>
          <div style={{ width: "25%" }}>
            <div className={styles.column}>
              <div className={styles.smallTitle}>Desktop Copiers</div>
              <input className={styles.inputSingle}
                onChange={() => {
                  setStandingNumber(event.target.value)
                }}
                placeholder="How Many?"
                type="number"
              />

            </div>
          </div>
          <div className={styles.centerHor}>
            <div className={styles.smallColumn}>
              <div>
                <div className={styles.titleSmal}>Black & white </div>
                <div className={styles.row}>
                  <div className={styles.pointer} onClick={() => {
                    if (desktopBlack + desktopColor < standingNumber) {
                      setDesktopBlack(desktopBlack + 1)
                    }
                  }}>+</div>
                  <div className={styles.space}>{desktopBlack}</div>
                  <div className={styles.pointer} onClick={() => {
                    if (desktopBlack > 0) {
                      setDesktopBlack(desktopBlack - 1)
                    }
                  }}>-</div>
                </div>
              </div>
              <div>
                <div className={styles.titleSmal}>Color </div>
                <div className={styles.row}>
                  <div className={styles.pointer} onClick={() => {
                    if (desktopBlack + desktopColor < standingNumber) {
                      setDesktopColor(desktopColor + 1)
                    }
                  }}>+</div>
                  <div className={styles.space}>{desktopColor}</div>
                  <div className={styles.pointer} onClick={() => {
                    if (desktopColor > 0) {
                      setDesktopColor(desktopColor - 1)
                    }
                  }}>-</div>
                </div>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.smallColumn}>
              <div>
                <div className={styles.titleSmal}>11 x 17 needed </div>
                <div className={styles.row}>
                  <div className={styles.pointer} onClick={() => {
                    if (desktopEleven + desktopLegal < standingNumber) {
                      setDesktopEleven(desktopEleven + 1)
                    }
                  }}>+</div>
                  <div className={styles.space}>{desktopEleven}</div>
                  <div className={styles.pointer} onClick={() => {
                    if (desktopEleven > 0) {
                      setDesktopEleven(desktopEleven - 1)
                    }
                  }}>-</div>
                </div>
              </div>
              <div>
                <div className={styles.titleSmal}>Letter and legal </div>
                <div className={styles.row}>
                  <div className={styles.pointer} onClick={() => {
                    if (desktopEleven + desktopLegal < standingNumber) {
                      setDesktopLegal(desktopLegal + 1)
                    }
                  }}>+</div>
                  <div className={styles.space}>{desktopLegal}</div>
                  <div className={styles.pointer} onClick={() => {
                    if (desktopLegal > 0) {
                      setDesktopLegal(desktopLegal - 1)
                    }
                  }}>-</div>
                </div>
              </div>
            </div>
          </div>
          <button>Get Results</button>
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
                  <Image alt={"lexmark xc62152"} src={"/8163.webp"} height={250} width={250} />
                </div>
                <div className={styles.titleSmall}>Lexmark XC8163</div>
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
                  <Image alt={"lexmark xc8160"} src={'/9225.webp'} height={200} width={350} />
                </div>
                <div className={styles.titleSmall}>Lexmark X9335</div>
                <div className={styles.buttonContainer1}>
                  <Link href={"/9325"}>
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
          <h2 className={styles.black}>Get Your free Quote!</h2>
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

              <input
                style={{ outline: "none", backgroundColor: "transparent", border: "1px solid rgb(210,210,210)", borderRadius: "5px", padding: "15px", width: "90%", margin:"5px" }}

                className={styles.inputSingle}
                placeholder="Full name"
                type="text"
                name=""
                id=""
                required={true}
              // onChange={() => {
              //   setName(event.target.value);
              // }}
              />
              <input
                style={{ outline: "none", backgroundColor: "transparent", border: "1px solid rgb(210,210,210)", borderRadius: "5px", padding: "15px", width: "90%", margin:"5px" }}
                className={styles.inputSingle}
                placeholder="Email"
                type="text"
                name=""
                id=""
                required={true}
              // onChange={() => {
              //   setEmail(event.target.value);
              // }}
              />
            </div>
            <div className={styles.space}>

              <PatternFormat
                format="+1 (###) ### ####"
                allowEmptyFormatting
                mask="_"
                className={styles.phoneNumber}
                onChange={(event) => {
                  setNumber(event.target.value);
                }}
              />
            </div>

            <div className={styles.space}>

              <input
                style={{ outline: "none", backgroundColor: "transparent", border: "1px solid rgb(210,210,210)", borderRadius: "5px", padding: "15px", width: "90%" }}
                onChange={() => {
                  setMessage(event.target.value);
                }}
                className={styles.inputSingle}
                placeholder="Comments"
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
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center",
              }}
              className="recaptcha"
              sitekey={"6LdNLYElAAAAAIMv324AxwjVLAnHHIdnIWPEYeQi"}
              ref={captchaRef}
              onChange={verifyCallback}
            />
          </div>
          <button
            onClick={(e) => {
              // setQuoteToggle(!quoteToggle);
              // sendEmail(e);
            }}
            className={styles.buttonBlue}
          // disabled={!toggle}
          >
            Get My Quote
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
