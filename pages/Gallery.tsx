import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";

function Gallery() {
  return (
    <div
      className=""
      style={{ width: "100%", height: "100%", background: "#253237" }}
    >
      <Parallax pages={3.2}>
        <ParallaxLayer offset={0} speed={1}>
          <div className=" w-screen h-screen bg-[#FFDBBA]"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.35} speed={0.2}>
          <picture>
            <img
              src="./gallery-cloud/gallery-cloud3.png"
              alt=""
              className=" w-[400px] md:w-[780px] ml-[70vw] md:ml-[80vw] mt-32 md:mt-0"
            />
          </picture>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.3}>
          <picture>
            <img
              src="./gallery-cloud/gallery-cloud2.png"
              alt=""
              className=" w-[400px] md:w-[780px] -ml-[45vw] md:-ml-[7vw] mt-14 md:mt-0"
            />
          </picture>
        </ParallaxLayer>
        <ParallaxLayer offset={0.55} speed={0.6}>
          <picture>
            <img
              src="./gallery-cloud/gallery-cloud7.png"
              alt=""
              className=" w-[400px] md:w-[780px] ml-[32vw] md:ml-[62vw] mt-14 md:mt-0"
            />
          </picture>
        </ParallaxLayer>
        <ParallaxLayer offset={0.65} speed={0.6}>
          {/* layer2 */}
          <picture>
            <img
              src="./gallery-cloud/gallery-cloud4.png"
              alt=""
              className=" w-[400px] md:w-[780px] ml-[2vw] md:ml-[25vw] mt-10 md:mt-0"
            />
          </picture>
        </ParallaxLayer>
        <ParallaxLayer offset={0.7} speed={0.8}>
          {/* itam */}
          <picture>
            <img
              src="./gallery-cloud/gallery-cloud1.png"
              alt=""
              className=" w-[400px] md:w-[800px] md:h-[25vw] ml-[25vw] md:ml-[60vw] mt-14 md:mt-0"
            />
          </picture>
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={0.7}>
          {/* itam tengah */}
          <picture>
            <img
              src="./gallery-cloud/gallery-cloud5.png"
              alt=""
              className=" w-[400px] md:w-[780px] ml-[20vw] mt-20 md:mt-0"
            />
          </picture>
        </ParallaxLayer>
        <ParallaxLayer offset={0.6} speed={0.75}>
          {/* itam */}
          <picture>
            <img
              src="./gallery-cloud/gallery-cloud6.png"
              alt=""
              className=" w-[400px] md:w-[780px] -ml-[45vw] md:-ml-[10vw] mt-24 md:mt-0"
            />
          </picture>
        </ParallaxLayer>
        <ParallaxLayer offset={0.3} speed={0.1}>
          <p className=" text-3xl text-center md:text-[4vw] font-bold ml-[5vw] md:ml-[5vw]">
            SALFIYAH GALLERY
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={0.98} speed={0.98}>
          <div className=" w-screen h-[500vw] bg-[#242424]"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} speed={0.98}>
          <div className=" w-screen h-[600vw] bg-[#242424]"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <div className=" ml-[10vw] md:ml-44 text-white py-[120px] w-[80vw] bg-gallery-bg1 bg-cover text-center font-nunito text-6xl font-bold">
            <p>THE</p>
            <p>FRINCT SHOW</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.7} speed={1}>
          <div className=" space-y-10 md:space-y-0 ml-[10vw] md:ml-64 flex flex-col md:flex-row justify-between items-center text-white py-[150px] w-[70vw]  text-left font-nunito text-6xl font-bold">
            <div>
              <p className=" text-base">THEAFT</p>
              <p>FASHION SHOW</p>
            </div>
            <picture>
              <img
                src="./gallery/gallery-item2-1.jpg"
                alt=""
                className="w-[80vw] md:w-[30vw] h-[80vw] md:h-[30vw] object-cover"
              />
            </picture>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.99} speed={1.2}>
          <picture>
            <img
              src="./gallery/gallery-item2-2.jpg"
              alt=""
              className="w-[40vw] md:w-[10vw] h-[40vw] md:h-[10vw] object-cover mt-52 md:mt-0 ml-[50vw] md:ml-[50%]"
            />
          </picture>
        </ParallaxLayer>
        <ParallaxLayer offset={2.25} speed={1.2}>
          <picture>
            <img
              src="./gallery/gallery-item3-2.png"
              alt=""
              className="w-[30vw] ml-[20%]"
            />
          </picture>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1.2}>
          <p className=" text-3xl md:text-7xl font-bold w-[25vw] text-white ml-[55%]">
            THE SHOES THAT BRING US TO THE TOP
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1.4}>
          <picture>
            <img
              src="./gallery/gallery-item3-1.png"
              alt=""
              className="w-[20vw] ml-[26%] mt-32 md:mt-0"
            />
          </picture>
        </ParallaxLayer>
        <ParallaxLayer offset={2.8} speed={1.4}>
          <div className="w-[70vw] flex flex-col md:flex-row justify-between text-white font-bold ml-[15vw]">
            <div className="flex flex-col items-center space-y-5">
              <picture>
                <img
                  src="/gallery/gallery-artistBg1.jpg"
                  alt=""
                  className=" w-[30vw] md:w-[20vw] md:h-[20vw]  h-[30vw] object-cover"
                />
              </picture>
              <p className=" text-xl">Victor Debryune</p>
            </div>
            <div className="flex flex-col items-center space-y-5">
              <picture>
                <img
                  src="/gallery/gallery-artistBg2.jpg"
                  alt=""
                  className=" w-[30vw] md:w-[20vw] md:h-[20vw]  h-[30vw] object-cover"
                />
              </picture>
              <p className=" text-xl">Clara Wattson</p>
            </div>
            <div className="flex flex-col items-center space-y-5">
              <picture>
                <img
                  src="/gallery/gallery-artistBg3.jpg"
                  alt=""
                  className=" w-[30vw] md:w-[20vw] md:h-[20vw]  h-[30vw] object-cover"
                />
              </picture>
              <p className=" text-xl">Sylvia Peterson</p>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.85} speed={1.7}>
          <div className="w-[70vw] flex flex-col md:flex-row space-y-12 md:space-y-0 justify-between text-white font-bold ml-[15vw]">
            <div className="flex flex-col items-center">
              <picture>
                <img
                  src="/gallery/gallery-artist1.png"
                  alt=""
                  className="w-[30vw] md:w-[20vw]"
                />
              </picture>
            </div>
            <div className="flex flex-col items-center">
              <picture>
                <img
                  src="/gallery/gallery-artist2.png"
                  alt=""
                  className="w-[30vw] md:w-[20vw]"
                />
              </picture>
            </div>
            <div className="flex flex-col items-center">
              <picture>
                <img
                  src="/gallery/gallery-artist3.png"
                  alt=""
                  className="w-[30vw] md:w-[20vw]"
                />
              </picture>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Gallery;
