import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contact10 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="contact10-container1 thq-section-padding">
        <div className="contact10-max-width thq-section-max-width">
          <div className="contact10-content1 thq-flex-row">
            <div className="contact10-content2">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact10-text20">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Oly1Hr'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact10-text16">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_dp7DJ2'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="contact10-content3 thq-flex-row">
            <div className="contact10-container2">
              <img
                alt={props.location1ImageAlt}
                src={props.location1ImageSrc}
                className="contact10-image1 thq-img-ratio-16-9"
              />
              <h3 className="contact10-text12 thq-heading-3">
                {props.location1 ?? (
                  <Fragment>
                    <span className="contact10-text21">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Xyiue4'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-large">
                {props.location1Description ?? (
                  <Fragment>
                    <span className="contact10-text17">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_WR7B1M'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="contact10-container3">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small thq-button-flat contact10-link"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_EUIaQG'),
                    }}
                  ></span>
                </a>
              </div>
            </div>
            <div className="contact10-container4">
              <img
                alt={props.location2ImageAlt}
                src={props.location2ImageSrc}
                className="contact10-image2 thq-img-ratio-16-9"
              />
              <h3 className="contact10-text14 thq-heading-3">
                {props.location2 ?? (
                  <Fragment>
                    <span className="contact10-text18">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_MnogV6'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-large">
                {props.location2Description ?? (
                  <Fragment>
                    <span className="contact10-text19">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_cR2zIi'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="contact10-container5"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact10-container1 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact10-max-width {
            align-self: center;
          }
          .contact10-content1 {
            width: 100%;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
          }
          .contact10-content2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact10-content3 {
            width: 100%;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact10-container2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact10-image1 {
            object-fit: cover;
          }
          .contact10-text12 {
            text-align: center;
          }
          .contact10-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .contact10-container4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact10-image2 {
            object-fit: cover;
          }
          .contact10-text14 {
            text-align: center;
          }
          .contact10-container5 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .contact10-text16 {
            display: inline-block;
          }
          .contact10-text17 {
            display: inline-block;
          }
          .contact10-text18 {
            display: inline-block;
          }
          .contact10-text19 {
            display: inline-block;
          }
          .contact10-text20 {
            display: inline-block;
          }
          .contact10-text21 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .contact10-content1 {
              align-items: flex-start;
              justify-content: flex-start;
            }
            .contact10-content3 {
              position: relative;
              align-items: center;
              flex-direction: column;
            }
            .contact10-link {
              text-decoration: inherit;
            }
          }
          @media (max-width: 767px) {
            .contact10-content1 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .contact10-image1 {
              width: 100%;
            }
            .contact10-image2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .contact10-link {
              text-decoration: inherit;
            }
          }
        `}
      </style>
    </>
  )
}

Contact10.defaultProps = {
  location2ImageSrc:
    'https://images.unsplash.com/photo-1695654402840-2ced27739781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM3NTkzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1655071267921-66c47de45771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM3NTkzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  location2ImageAlt: 'Phone Icon',
  location1Description: undefined,
  location2: undefined,
  location2Description: undefined,
  location1ImageAlt: 'Office Location Image',
  heading1: undefined,
  location1: undefined,
}

Contact10.propTypes = {
  location2ImageSrc: PropTypes.string,
  content1: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location2ImageAlt: PropTypes.string,
  location1Description: PropTypes.element,
  location2: PropTypes.element,
  location2Description: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  heading1: PropTypes.element,
  location1: PropTypes.element,
}

export default Contact10
