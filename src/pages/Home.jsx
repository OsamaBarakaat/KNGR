import "../App.css";
import iphone from "../assets/iPhone 14 Pro.png";
import brand from "../assets/brand_7253182 1.png";
import vector1 from "../assets/Group 269.png";
import vector2 from "../assets/Vector (2).png";
const Home = () => {
  return (
    <div className="home">
      <div className="mainContentInHome">
        <div className="description">
          <div className="firstLine">
            Unite Your Shopping, All Brands One Place
            <img src={brand} alt="brand" className="brandInFirstLine" />
          </div>
          <div className="secondLine">
            Explore and shop Egypt&rsquo;s top local brands, all in one app.
            We&rsquo;ve made it simple to find and support quality businesses
            right at your fingertips.
          </div>
          <div className="thirdLine flex justify-center items-center">
            <button className="btn">
              <div className="logoBtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="47"
                  height="49"
                  viewBox="0 0 47 49"
                  fill="none"
                >
                  <path
                    d="M34.8833 15.5631L27.0555 23.0223L4.07715 0.57527C5.22956 -0.0922884 6.73118 -0.195387 8.06089 0.546918L34.8833 15.5631Z"
                    fill="white"
                  />
                  <path
                    d="M35.0766 33.2859L8.06083 48.4078C6.44638 49.3124 4.57405 48.9619 3.38672 47.8742L27.0581 25.4272L35.0793 33.2859H35.0766Z"
                    fill="white"
                  />
                  <path
                    d="M44.1344 27.7132L36.3899 32.0484L36.3281 32.0819L28.3096 24.2233L36.1374 16.7642L36.1991 16.7977L44.1371 21.2412C46.7186 22.6871 46.7186 26.2672 44.1371 27.7132H44.1344Z"
                    fill="white"
                  />
                  <path
                    d="M2.13484 46.6703C2.11872 46.6549 2.10261 46.6394 2.08649 46.6239C1.38806 45.9615 0.939453 45.0388 0.939453 43.9666V4.98271C0.939453 3.59347 1.69429 2.45424 2.7688 1.80988C2.78761 1.79699 2.8091 1.78668 2.8279 1.77637L25.8062 24.2233L2.13484 46.6703Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="download">Download on the</div>
              <div className="name">Google Play</div>
            </button>
            <button className="btn">
              <div className="logoBtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="53"
                  viewBox="0 0 44 53"
                  fill="none"
                >
                  <path
                    d="M36.4208 30.3912C34.9214 22.7804 41.5466 18.7149 42.0301 18.4302C41.0141 17.076 39.8342 16.0524 38.6427 15.3106C34.6825 12.8436 29.859 12.6136 26.9896 13.8758C26.9609 13.8873 26.9321 13.9017 26.9033 13.9132C24.103 15.1352 20.9199 15.1352 18.1196 13.9132C18.0909 13.9017 18.0621 13.8873 18.0333 13.8758C15.1639 12.6136 10.3404 12.8436 6.38027 15.3106C2.42014 17.7775 -1.42774 23.3411 0.523541 34.0082C2.47483 44.6754 9.595 51.1562 9.595 51.1562C9.595 51.1562 12.9824 54.0803 17.4606 52.1309C20.258 50.9118 21.5329 50.7019 22.0942 50.7162C22.3733 50.722 22.6525 50.722 22.9288 50.7162C23.49 50.7019 24.7649 50.9146 27.5624 52.1309C32.0405 54.0803 35.4279 51.1562 35.4279 51.1562C35.4279 51.1562 40.4155 46.6133 43.187 38.876C40.8069 37.7777 37.4022 35.3711 36.4208 30.3912Z"
                    fill="black"
                  />
                  <path
                    d="M21.2505 13.4736C21.2505 13.4736 19.9957 2.84384 31.9854 0.94043L31.9365 2.36655C31.7379 8.25216 27.1302 13.0423 21.2505 13.4736Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="download">Download on the</div>
              <div className="name">App Store</div>
            </button>
          </div>
        </div>
        <div className="iphone">
          <img src={iphone} alt="iphone" className="iphoneImg" />
          <img src={vector1} alt="vector1" className="vector1" />
          <img src={vector2} alt="vector2" className="vector2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
