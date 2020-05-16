import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  //useLocation,
} from "react-router-dom";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import CalculusIntro from "./partials/CalculusIntro";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  let history = useHistory();

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <Router>
      <section {...props} className={outerClasses}>
        <div className="container-sm">
          <div className={innerClasses}>
            <div className="hero-content">
              <h1
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay="200"
              >
                Solução em <span className="text-color-primary">fretes</span>{" "}
                para o seu negócio!
              </h1>
              <div className="container-xs">
                <p
                  className="m-0 mb-32 reveal-from-bottom"
                  data-reveal-delay="400"
                >
                  25 anos de experiência em gestão de fretes.
                </p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <ButtonGroup>
                    <Button tag="a" color="primary" wideMobile>
                      <Link
                        to="/calculus_intro"
                        onClick={() => {
                          history.push("/calculus_intro");
                        }}
                      >
                        Faça uma cotação
                      </Link>
                    </Button>
                    <Button
                      tag="a"
                      color="dark"
                      wideMobile
                      href="#"
                    >
                      Seja nosso cliente
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
            <div
              className="hero-figure reveal-from-bottom illustration-element-01"
              data-reveal-value="20px"
              data-reveal-delay="800"
            >
              <a
                data-video="https://player.vimeo.com/video/416768488"
                href="#0"
                aria-controls="video-modal"
                onClick={openModal}
              >
                <Image
                  className="has-shadow"
                  src={require("./../../assets/images/video-placeholder.jpg")}
                  alt="Hero"
                  width={1200}
                  height={800}
                />
              </a>
            </div>
            <Modal
              id="video-modal"
              show={videoModalActive}
              handleClose={closeModal}
              video="https://player.vimeo.com/video/416768488"
              videoTag="iframe"
            />
          </div>
          <Switch>
            <Route path="/calculus_intro" component={CalculusIntro}></Route>
          </Switch>
        </div>
      </section>
    </Router>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
