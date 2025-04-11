import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Testimonial17 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial17-max-width thq-section-max-width">
          <div className="testimonial17-container10">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="testimonial17-text26">Testimonials</span>
                </Fragment>
              )}
            </h2>
            <span className="testimonial17-text11 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="testimonial17-text27">
                    Read what our satisfied customers have to say about our
                    AI-powered resume service.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="thq-grid-2">
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card1"
                >
                  <div className="testimonial17-container12">
                    <img
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial17-image1"
                    />
                    <div className="testimonial17-container13">
                      <strong className="thq-body-large">
                        {props.author1Name ?? (
                          <Fragment>
                            <span className="testimonial17-text32">
                              Ana Silva
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author1Position ?? (
                          <Fragment>
                            <span className="testimonial17-text35">
                              Marketing Manager
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text14 thq-body-small">
                    {props.review1 ?? (
                      <Fragment>
                        <span className="testimonial17-text34">
                          I was impressed by the quality of the resume I
                          received. It exceeded my expectations and helped me
                          land my dream job.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card2"
                >
                  <div className="testimonial17-container14">
                    <img
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial17-image2"
                    />
                    <div className="testimonial17-container15">
                      <strong className="thq-body-large">
                        {props.author2Name ?? (
                          <Fragment>
                            <span className="testimonial17-text37">
                              Pedro Santos
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author2Position ?? (
                          <Fragment>
                            <span className="testimonial17-text24">
                              Software Engineer
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text17 thq-body-small">
                    {props.review2 ?? (
                      <Fragment>
                        <span className="testimonial17-text30">
                          The resume service is user-friendly and efficient. I
                          received personalized attention and a resume tailored
                          to my needs.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card3"
                >
                  <div className="testimonial17-container16">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial17-image3"
                    />
                    <div className="testimonial17-container17">
                      <strong className="thq-body-large">
                        {props.author3Name ?? (
                          <Fragment>
                            <span className="testimonial17-text29">
                              Mariana Costa
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author3Position ?? (
                          <Fragment>
                            <span className="testimonial17-text36">
                              HR Specialist
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text20 thq-body-small">
                    {props.review3 ?? (
                      <Fragment>
                        <span className="testimonial17-text25">
                          I highly recommend this service to anyone looking to
                          stand out in the job market. The team is professional
                          and delivers top-notch resumes.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card4"
                >
                  <div className="testimonial17-container18">
                    <img
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial17-image4"
                    />
                    <div className="testimonial17-container19">
                      <strong className="thq-body-large">
                        {props.author4Name ?? (
                          <Fragment>
                            <span className="testimonial17-text33">
                              Ricardo Oliveira
                            </span>
                          </Fragment>
                        )}
                      </strong>
                      <span className="thq-body-small">
                        {props.author4Position ?? (
                          <Fragment>
                            <span className="testimonial17-text28">
                              Sales Representative
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text23 thq-body-small">
                    {props.review4 ?? (
                      <Fragment>
                        <span className="testimonial17-text31">
                          The resume I received helped me secure multiple job
                          interviews. I am grateful for the personalized
                          approach and attention to detail.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial17-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial17-container10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-layout-space-fourunits);
            flex-direction: column;
          }
          .testimonial17-text11 {
            text-align: center;
          }
          .testimonial17-container12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image1 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial17-container13 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text14 {
            text-align: left;
          }
          .testimonial17-container14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image2 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial17-container15 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text17 {
            text-align: left;
          }
          .testimonial17-container16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image3 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial17-container17 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text20 {
            text-align: left;
          }
          .testimonial17-container18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image4 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial17-container19 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text23 {
            text-align: left;
          }
          .testimonial17-text24 {
            display: inline-block;
          }
          .testimonial17-text25 {
            display: inline-block;
          }
          .testimonial17-text26 {
            display: inline-block;
          }
          .testimonial17-text27 {
            display: inline-block;
          }
          .testimonial17-text28 {
            display: inline-block;
          }
          .testimonial17-text29 {
            display: inline-block;
          }
          .testimonial17-text30 {
            display: inline-block;
          }
          .testimonial17-text31 {
            display: inline-block;
          }
          .testimonial17-text32 {
            display: inline-block;
          }
          .testimonial17-text33 {
            display: inline-block;
          }
          .testimonial17-text34 {
            display: inline-block;
          }
          .testimonial17-text35 {
            display: inline-block;
          }
          .testimonial17-text36 {
            display: inline-block;
          }
          .testimonial17-text37 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .testimonial17-container10 {
              margin-bottom: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .testimonial17-container10 {
              margin-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .testimonial17-card1 {
              width: 100%;
            }
            .testimonial17-card2 {
              width: 100%;
            }
            .testimonial17-card3 {
              width: 100%;
            }
            .testimonial17-card4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial17.defaultProps = {
  author2Position: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1636041247125-6354b32c5fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM3NTkzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  review3: undefined,
  heading1: undefined,
  content1: undefined,
  author3Alt: 'Image of Mariana Costa',
  author4Alt: 'Image of Ricardo Oliveira',
  author2Src:
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM3NTkzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1519205196298-7fc29cb73b3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM3NTkzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: undefined,
  author1Alt: 'Image of Ana Silva',
  review2: undefined,
  review4: undefined,
  author1Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDM3NTkzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: undefined,
  author2Alt: 'Image of Pedro Santos',
  review1: undefined,
  author1Position: undefined,
  author3Position: undefined,
  author2Name: undefined,
}

Testimonial17.propTypes = {
  author2Position: PropTypes.element,
  author4Src: PropTypes.string,
  review3: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  author3Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author4Position: PropTypes.element,
  author3Src: PropTypes.string,
  author3Name: PropTypes.element,
  author1Alt: PropTypes.string,
  review2: PropTypes.element,
  review4: PropTypes.element,
  author1Name: PropTypes.element,
  author1Src: PropTypes.string,
  author4Name: PropTypes.element,
  author2Alt: PropTypes.string,
  review1: PropTypes.element,
  author1Position: PropTypes.element,
  author3Position: PropTypes.element,
  author2Name: PropTypes.element,
}

export default Testimonial17
