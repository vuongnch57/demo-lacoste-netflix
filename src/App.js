import { useEffect, useState } from "react";
import Corner from "./Icons/Corner";
import "./App.scss";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const progress = scrollTop / document.documentElement.clientHeight;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="App"
      style={{
        "--vw": window.innerWidth / 100,
        "--vh": window.innerHeight / 100,
      }}
    >
      <section
        className="introduction"
        style={{ "--progress": scrollProgress < 1 ? scrollProgress : 1 }}
      >
        <div className="sticky">
          <div className="container">
            <div
              className="mask"
              style={{ display: scrollProgress < 1 ? "" : "none" }}
            >
              <div className="video">
                <video
                  className="videoDesktop fill"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ objectFit: "cover" }}
                >
                  <source
                    type="video/mp4"
                    src="https://static1.lacoste.com/videos/marketing/lacoste-netflix-desk-light.mp4"
                  ></source>
                </video>
              </div>
            </div>
            <Corner className="corner-wrapper" />
            <Corner className="corner-wrapper" />
            <Corner className="corner-wrapper" />
            <Corner className="corner-wrapper" />
            <div
              className={`logo ${scrollProgress >= 0.9 ? "" : "logo-hidden"}`}
            />
            <div className="title">
              <div className="title-line">Are you</div>
              <div className="title-line">still watching&nbsp;?</div>
            </div>
            <div className="bottom">
              <p className="subtitle">
                Ready for THE crossover event&nbsp;? Intrigue, confrontation,
                investigating, seduction... nothing is beyond the reach of the
                Crocodile. Lacoste and chill: it's coming to Netflix&nbsp;!
              </p>
              <a
                className="link button small"
                href="https://shop-uk-staging.lacoste.com/gb/category/?cgid=Lacoste_Collections_Now_Trending_SS23_Netflix"
              >
                Discover Lacoste x Netflix
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="series-index">
        <div className="title-wrapper">
          <div className="illlustration-wrapper">
            <picture
              className={`picture ${
                scrollProgress > 1.6 ? "visible" : ""
              } illustration left`}
            >
              <source
                type="image/webp"
                srcSet="https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/illustration-stranger-things-a371d414.webp 300w,https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/illustration-stranger-things-4f5d9957.webp 722w"
              />
              <source
                type="image/png"
                srcSet="https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/illustration-stranger-things-7bb2193f.png 300w,https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/illustration-stranger-things-b4beaf1c.png 722w"
              />
              <img
                data-v-cb07ccd6=""
                loading="lazy"
                src="https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/illustration-stranger-things-b4beaf1c.png"
                alt=""
              />
            </picture>
            <picture
              className={`picture ${
                scrollProgress > 1.6 ? "visible" : ""
              } illustration right`}
            >
              <source
                type="image/webp"
                srcSet="https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/illustration-sex-education-fc91f33c.webp 300w,https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/illustration-sex-education-71bd4b36.webp 600w,https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/illustration-sex-education-07126b6e.webp 900w,https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/illustration-sex-education-4113037d.webp 1346w"
              />
              <source
                type="image/png"
                srcSet="https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/illustration-sex-education-dd37e9e1.png 300w,https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/illustration-sex-education-9d785cf7.png 600w,https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/illustration-sex-education-fe402c01.png 900w,https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/illustration-sex-education-220f01a5.png 1346w"
              />
              <img
                loading="lazy"
                src="https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/illustration-sex-education-9d785cf7.png"
                alt=""
              />
            </picture>
          </div>
          <h2 className={`title ${scrollProgress > 1.6 ? "visible" : ""}`}>
            <span>Trending Now</span>
          </h2>
        </div>
        {/* <div className="carousel">
          <div className="sticky-carousel">
            <div className="bullets"></div>
            <div className="items full-height">
              <div className="item-wrapper">
                <div className="item">
                  <a
                    href="https://shop-uk-staging.lacoste.com/netflix.html#/stranger-things"
                    className="link item item-1 current"
                    style={{ "--n": 0, "--n-alternate": 0 }}
                  >
                    <div className="image-wrapper">
                      <picture className="picture fill image video-can-play">
                        <source
                          type="image/webp"
                          srcSet="https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/series-stranger-things-navigation-image-6578a99d.webp 300w,https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/series-stranger-things-navigation-image-8b39f9c4.webp 600w,https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/series-stranger-things-navigation-image-b983f5df.webp 803w"
                        />
                        <source
                          type="image/jpg"
                          srcSet="https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/series-stranger-things-navigation-image-52d6cfbd.jpg 300w,https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/series-stranger-things-navigation-image-cdb12e91.jpg 600w,https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/series-stranger-things-navigation-image-088f5233.jpg 803w"
                        />
                        <img
                          loading="lazy"
                          src="https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/series-stranger-things-navigation-image-cdb12e91.jpg"
                          alt=""
                        />
                      </picture>
                      <div className="video">
                        <video
                          className="fill"
                          autoPlay
                          loop
                          muted
                          playsInline
                          style={{ objectFit: "cover" }}
                        >
                          <source
                            type="video/mp4"
                            src="https://static1.lacoste.com/videos/marketing/PREVIEW-STRANGER.mp4"
                          />
                        </video>
                      </div>
                    </div>
                    <div className="logo-wrapper">
                      <picture className="picture logo">
                        <source
                          type="image/webp"
                          srcSet="https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/series-stranger-things-logo-30340de3.webp 300w,https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/series-stranger-things-logo-ff04a753.webp 800w"
                        />
                        <source
                          type="image/png"
                          srcSet="https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/series-stranger-things-logo-c85c50fa.png 300w,https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/series-stranger-things-logo-3311bc05.png 800w"
                        />
                        <img
                          loading="lazy"
                          src="https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/series-stranger-things-logo-3311bc05.png"
                          alt=""
                        />
                      </picture>
                    </div>
                    <div className="patch-wrapper">
                      <picture className="picture fill patch">
                        <source
                          type="image/webp"
                          srcSet="https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/series-stranger-things-patch-988807d9.webp 300w,https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/series-stranger-things-patch-b1ac96c3.webp 662w"
                        />
                        <source
                          type="image/png"
                          srcSet="https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/series-stranger-things-patch-edd2e640.png 300w,https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/series-stranger-things-patch-316cbf6c.png 662w"
                        />
                        <img
                          loading="lazy"
                          src="https://shop-uk-staging.lacoste.com/on/demandware.static/-/Library-Sites-LacosteContent/en/v1681226185454/netflix/assets/series-stranger-things-patch-316cbf6c.png"
                          alt=""
                        />
                      </picture>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
}

export default App;
