import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero17 = (props) => {
  return (
    <>
      <div className="hero17-header78">
        <div className="hero17-column thq-section-max-width thq-section-padding">
          <div className="hero17-content1">
            <h1 className="hero17-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero17-text7">
                    Get Your Professional Resume Today!
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero17-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero17-text6">
                    Create a standout resume with our AI-powered service in just
                    3 easy steps. Our team of experts will review and deliver
                    your resume via WhatsApp for a seamless experience.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="hero17-actions">
            <button className="thq-button-filled hero17-button1">
              <span className="thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="hero17-text5">Criar meu currículo</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline hero17-button2">
              <span className="thq-body-small">
                {props.action2 ?? (
                  <Fragment>
                    <span className="hero17-text8">Learn More</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="hero17-content2">
          <div className="hero17-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal">
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero17-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero17-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero17-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero17-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero17-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="hero17-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero17-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero17-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero17-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero17-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero17-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero17-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
          </div>
          <div className="hero17-row-container2 thq-mask-image-horizontal thq-animated-group-container-horizontal">
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="hero17-placeholder-image22 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="hero17-placeholder-image23 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image9Alt}
                src={props.image9Src}
                className="hero17-placeholder-image24 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image10Alt}
                src={props.image10Src}
                className="hero17-placeholder-image25 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image11Alt}
                src={props.image11Src}
                className="hero17-placeholder-image26 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image12Alt}
                src={props.image12Src}
                className="hero17-placeholder-image27 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="hero17-placeholder-image28 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="hero17-placeholder-image29 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image9Alt}
                src={props.image9Src}
                className="hero17-placeholder-image30 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image10Alt}
                src={props.image10Src}
                className="hero17-placeholder-image31 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image11Alt}
                src={props.image11Src}
                className="hero17-placeholder-image32 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero17-placeholder-image33 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="hero17-container2">
            <Script
              html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero17-header78 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero17-column {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .hero17-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero17-text1 {
            text-align: center;
          }
          .hero17-text2 {
            text-align: center;
          }
          .hero17-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
          }
          .hero17-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero17-row-container1 {
            width: 100%;
          }
          .hero17-placeholder-image10 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image11 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image12 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image13 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image14 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image15 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image16 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image17 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image18 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image19 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image20 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image21 {
            width: 400px;
            height: 400px;
          }
          .hero17-row-container2 {
            width: 100%;
          }
          .hero17-placeholder-image22 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image23 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image24 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image25 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image26 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image27 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image28 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image29 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image30 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image31 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image32 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image33 {
            width: 400px;
            height: 400px;
          }
          .hero17-container2 {
            display: contents;
          }
          .hero17-text5 {
            display: inline-block;
          }
          .hero17-text6 {
            display: inline-block;
          }
          .hero17-text7 {
            display: inline-block;
          }
          .hero17-text8 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .hero17-content2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .hero17-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero17-button1 {
              width: 100%;
            }
            .hero17-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero17.defaultProps = {
  image11Alt: 'Hero Image',
  action1: undefined,
  content1: undefined,
  image3Alt: 'Hero Image',
  image4Src:
    'https://images.unsplash.com/photo-1637371880025-dc6b0d4020ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM3NTkzOXw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Alt: 'Hero Image',
  image1Src:
    'https://images.unsplash.com/photo-1525810857351-68862c0663f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM3NTk0MHw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Alt: 'Hero Image',
  image12Src:
    'https://images.unsplash.com/photo-1732966713411-1bcf1273eaa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM3NTkzOHw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1551636898-47668aa61de2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM3NTkzOXw&ixlib=rb-4.0.3&q=80&w=1080',
  image8Alt: 'Hero Image',
  image1Alt: 'Professional Resume Image',
  image11Src:
    'https://images.unsplash.com/photo-1732634122760-a83041f2b62c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM3NTkzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  image10Alt: 'Hero Image',
  image4Alt: 'Hero Image',
  image12Alt: 'Hero Image',
  image6Alt: 'Hero Image',
  heading1: undefined,
  image9Src:
    'https://images.unsplash.com/photo-1524673360092-e07b7ae58845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM3NTkzOHw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1574272421924-40f99bc56c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM3NTkzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  image7Src:
    'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM3NTkzOHw&ixlib=rb-4.0.3&q=80&w=1080',
  action2: undefined,
  image9Alt: 'Hero Image',
  image6Src:
    'https://images.unsplash.com/photo-1559941727-6fb446e7e8ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM3NTkzOHw&ixlib=rb-4.0.3&q=80&w=1080',
  image10Src:
    'https://images.unsplash.com/photo-1695653423034-d15c9f3d1328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM3NTkzOXw&ixlib=rb-4.0.3&q=80&w=1080',
  image8Src:
    'https://images.unsplash.com/photo-1611810175241-8b32d1aa8942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM3NTkzOHw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Src:
    'https://images.unsplash.com/photo-1473181488821-2d23949a045a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM3NTkzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'Hero Image',
}

Hero17.propTypes = {
  image11Alt: PropTypes.string,
  action1: PropTypes.element,
  content1: PropTypes.element,
  image3Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image12Src: PropTypes.string,
  image5Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  heading1: PropTypes.element,
  image9Src: PropTypes.string,
  image2Src: PropTypes.string,
  image7Src: PropTypes.string,
  action2: PropTypes.element,
  image9Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image10Src: PropTypes.string,
  image8Src: PropTypes.string,
  image3Src: PropTypes.string,
  image2Alt: PropTypes.string,
}

export default Hero17
