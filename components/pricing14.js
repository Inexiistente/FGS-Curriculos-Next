import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Pricing14 = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <>
      <div className="pricing14-pricing23 thq-section-padding">
        <div className="pricing14-max-width thq-section-max-width">
          <div className="pricing14-section-title">
            <span className="pricing14-text10 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="pricing14-text103">
                    Choose the perfect plan for you
                  </span>
                </Fragment>
              )}
            </span>
            <div className="pricing14-content">
              <h2 id="TabelaPreco" className="pricing14-text11 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="pricing14-text91">Pricing plan</span>
                  </Fragment>
                )}
              </h2>
            </div>
          </div>
          <div className="pricing14-tabs">
            {!isMonthly && (
              <button
                onClick={() => setIsMonthly(true)}
                className="pricing14-button1 thq-button-animated thq-button-outline"
              >
                <span className="thq-body-small">Monthly</span>
              </button>
            )}
            {!isMonthly && (
              <button
                onClick={() => setIsMonthly(false)}
                className="pricing14-button2 thq-button-animated thq-button-filled"
              >
                <span className="thq-body-small">Yearly</span>
              </button>
            )}
          </div>
          {isMonthly && (
            <div className="pricing14-container1">
              <div className="pricing14-column1 thq-card">
                <div className="pricing14-price10">
                  <div className="pricing14-price11">
                    <p className="pricing14-text14 thq-body-large">
                      {props.plan1 ?? (
                        <Fragment>
                          <span className="pricing14-text58">Basic plan</span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing14-text15 thq-heading-3">
                      {props.plan1Price ?? (
                        <Fragment>
                          <span className="pricing14-text100">
                            Basic Plan - $29
                          </span>
                        </Fragment>
                      )}
                    </h3>
                  </div>
                  <div className="pricing14-list1">
                    <div className="pricing14-list-item10">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature1 ?? (
                          <Fragment>
                            <span className="pricing14-text69">
                              AI-powered resume creation
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item11">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature2 ?? (
                          <Fragment>
                            <span className="pricing14-text73">
                              Human-reviewed resumes
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item12">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature3 ?? (
                          <Fragment>
                            <span className="pricing14-text60">
                              Delivery via WhatsApp
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button3 thq-button-animated thq-button-outline">
                  <span className="thq-body-small">
                    {props.plan1Action ?? (
                      <Fragment>
                        <span className="pricing14-text83">Get Started</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-column2 thq-card">
                <div className="pricing14-price12">
                  <div className="pricing14-price13">
                    <p className="pricing14-text20 thq-body-large">
                      {props.plan2 ?? (
                        <Fragment>
                          <span className="pricing14-text77">
                            Business plan
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing14-text21 thq-heading-3">
                      {props.plan2Price ?? (
                        <Fragment>
                          <span className="pricing14-text95">
                            Pro Plan - $49
                          </span>
                        </Fragment>
                      )}
                    </h3>
                  </div>
                  <div className="pricing14-list2">
                    <div className="pricing14-list-item13">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature1 ?? (
                          <Fragment>
                            <span className="pricing14-text59">
                              Everything in Basic Plan
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item14">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature2 ?? (
                          <Fragment>
                            <span className="pricing14-text96">
                              Cover letter creation
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item15">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature3 ?? (
                          <Fragment>
                            <span className="pricing14-text80">
                              Customized design templates
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item16">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature4 ?? (
                          <Fragment>
                            <span className="pricing14-text102">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button4 thq-button-animated thq-button-filled">
                  <span className="thq-body-small">
                    {props.plan2Action ?? (
                      <Fragment>
                        <span className="pricing14-text66">Get Started</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-column3 thq-card">
                <div className="pricing14-price14">
                  <div className="pricing14-price15">
                    <p className="pricing14-text27 thq-body-large">
                      {props.plan3 ?? (
                        <Fragment>
                          <span className="pricing14-text99">
                            Enterprise plan
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing14-text28 thq-heading-3">
                      {props.plan3Price ?? (
                        <Fragment>
                          <span className="pricing14-text64">
                            Premium Plan - $79
                          </span>
                        </Fragment>
                      )}
                    </h3>
                  </div>
                  <div className="pricing14-list3">
                    <div className="pricing14-list-item17">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature1 ?? (
                          <Fragment>
                            <span className="pricing14-text101">
                              Everything in Pro Plan
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item18">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature2 ?? (
                          <Fragment>
                            <span className="pricing14-text61">
                              LinkedIn profile optimization
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item19">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature3 ?? (
                          <Fragment>
                            <span className="pricing14-text72">
                              Unlimited revisions
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item20">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature4 ?? (
                          <Fragment>
                            <span className="pricing14-text85">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item21"></div>
                  </div>
                </div>
                <button className="pricing14-button5 thq-button-animated thq-button-filled">
                  <span className="thq-body-small">
                    {props.plan3Action ?? (
                      <Fragment>
                        <span className="pricing14-text65">Get Started</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          )}
          {!isMonthly && (
            <div className="pricing14-container2">
              <div className="pricing14-column4 thq-card">
                <div className="pricing14-price16">
                  <div className="pricing14-price17">
                    <span className="pricing14-text34 thq-body-large">
                      {props.plan11 ?? (
                        <Fragment>
                          <span className="pricing14-text94">Basic plan</span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing14-text35 thq-heading-3">
                      {props.plan1Price1 ?? (
                        <Fragment>
                          <span className="pricing14-text82">$200/yr</span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan1Yearly1 ?? (
                        <Fragment>
                          <span className="pricing14-text70">
                            or $20 monthly
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list4">
                    <div className="pricing14-list-item22">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature11 ?? (
                          <Fragment>
                            <span className="pricing14-text62">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item23">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature21 ?? (
                          <Fragment>
                            <span className="pricing14-text81">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item24">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature31 ?? (
                          <Fragment>
                            <span className="pricing14-text98">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button6 thq-button-animated thq-button-outline">
                  <span className="thq-body-small">
                    {props.plan1Action1 ?? (
                      <Fragment>
                        <span className="pricing14-text84">Get started</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-column5 thq-card">
                <div className="pricing14-price18">
                  <div className="pricing14-price19">
                    <span className="pricing14-text41 thq-body-large">
                      {props.plan21 ?? (
                        <Fragment>
                          <span className="pricing14-text71">
                            Business plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing14-text42 thq-heading-3">
                      {props.plan2Price1 ?? (
                        <Fragment>
                          <span className="pricing14-text76">$299/yr</span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan2Yearly1 ?? (
                        <Fragment>
                          <span className="pricing14-text67">
                            or $29 monthly
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list5">
                    <div className="pricing14-list-item25">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature11 ?? (
                          <Fragment>
                            <span className="pricing14-text88">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item26">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature21 ?? (
                          <Fragment>
                            <span className="pricing14-text78">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item27">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature31 ?? (
                          <Fragment>
                            <span className="pricing14-text93">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item28">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature41 ?? (
                          <Fragment>
                            <span className="pricing14-text86">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button7 thq-button-animated thq-button-filled">
                  <span className="thq-body-small">
                    {props.plan2Action1 ?? (
                      <Fragment>
                        <span className="pricing14-text63">Get started</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-column6 thq-card">
                <div className="pricing14-price20">
                  <div className="pricing14-price21">
                    <span className="pricing14-text49 thq-body-large">
                      {props.plan31 ?? (
                        <Fragment>
                          <span className="pricing14-text89">
                            Enterprise plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing14-text50 thq-heading-3">
                      {props.plan3Price1 ?? (
                        <Fragment>
                          <span className="pricing14-text79">$499/yr</span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan3Yearly1 ?? (
                        <Fragment>
                          <span className="pricing14-text87">
                            or $49 monthly
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-list6">
                    <div className="pricing14-list-item29">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature11 ?? (
                          <Fragment>
                            <span className="pricing14-text90">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item30">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature21 ?? (
                          <Fragment>
                            <span className="pricing14-text75">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item31">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature31 ?? (
                          <Fragment>
                            <span className="pricing14-text97">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item32">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature41 ?? (
                          <Fragment>
                            <span className="pricing14-text74">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-list-item33">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature51 ?? (
                          <Fragment>
                            <span className="pricing14-text68">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-button8 thq-button-animated thq-button-filled">
                  <span className="thq-body-small">
                    {props.plan3Action1 ?? (
                      <Fragment>
                        <span className="pricing14-text92">Get started</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .pricing14-pricing23 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pricing14-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-section-title {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pricing14-text10 {
            text-align: center;
          }
          .pricing14-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text11 {
            text-align: center;
          }
          .pricing14-tabs {
            display: flex;
            align-items: flex-start;
          }
          .pricing14-button1 {
            gap: var(--dl-layout-space-halfunit);
            width: 120px;
            height: 60px;
            border-style: solid;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .pricing14-button2 {
            gap: var(--dl-layout-space-halfunit);
            color: var(--dl-color-theme-neutral-light);
            width: 120px;
            height: 60px;
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .pricing14-container1 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .pricing14-column1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .pricing14-price10 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price11 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text14 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text15 {
            font-size: 48px;
          }
          .pricing14-list1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item11 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button3 {
            width: 100%;
          }
          .pricing14-column2 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent1);
          }
          .pricing14-price12 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price13 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text20 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text21 {
            font-size: 48px;
          }
          .pricing14-list2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button4 {
            width: 100%;
          }
          .pricing14-column3 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
          }
          .pricing14-price14 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price15 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text27 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text28 {
            font-size: 48px;
          }
          .pricing14-list3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item20 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item21 {
            gap: var(--dl-layout-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button5 {
            width: 100%;
          }
          .pricing14-container2 {
            gap: 32px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .pricing14-column4 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .pricing14-price16 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price17 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text34 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text35 {
            font-size: 48px;
          }
          .pricing14-list4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item22 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item23 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item24 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button6 {
            width: 100%;
          }
          .pricing14-column5 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent1);
          }
          .pricing14-price18 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price19 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text41 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text42 {
            font-size: 48px;
          }
          .pricing14-list5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item25 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item26 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item27 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item28 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button7 {
            width: 100%;
          }
          .pricing14-column6 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
          }
          .pricing14-price20 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-price21 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-text49 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-text50 {
            font-size: 48px;
          }
          .pricing14-list6 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-list-item29 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item30 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item31 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item32 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-list-item33 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-button8 {
            width: 100%;
          }
          .pricing14-text58 {
            display: inline-block;
          }
          .pricing14-text59 {
            display: inline-block;
          }
          .pricing14-text60 {
            display: inline-block;
          }
          .pricing14-text61 {
            display: inline-block;
          }
          .pricing14-text62 {
            display: inline-block;
          }
          .pricing14-text63 {
            display: inline-block;
          }
          .pricing14-text64 {
            display: inline-block;
          }
          .pricing14-text65 {
            display: inline-block;
          }
          .pricing14-text66 {
            display: inline-block;
          }
          .pricing14-text67 {
            display: inline-block;
          }
          .pricing14-text68 {
            display: inline-block;
          }
          .pricing14-text69 {
            display: inline-block;
          }
          .pricing14-text70 {
            display: inline-block;
          }
          .pricing14-text71 {
            display: inline-block;
          }
          .pricing14-text72 {
            display: inline-block;
          }
          .pricing14-text73 {
            display: inline-block;
          }
          .pricing14-text74 {
            display: inline-block;
          }
          .pricing14-text75 {
            display: inline-block;
          }
          .pricing14-text76 {
            display: inline-block;
          }
          .pricing14-text77 {
            display: inline-block;
          }
          .pricing14-text78 {
            display: inline-block;
          }
          .pricing14-text79 {
            display: inline-block;
          }
          .pricing14-text80 {
            display: inline-block;
          }
          .pricing14-text81 {
            display: inline-block;
          }
          .pricing14-text82 {
            display: inline-block;
          }
          .pricing14-text83 {
            display: inline-block;
          }
          .pricing14-text84 {
            display: inline-block;
          }
          .pricing14-text85 {
            display: inline-block;
          }
          .pricing14-text86 {
            display: inline-block;
          }
          .pricing14-text87 {
            display: inline-block;
          }
          .pricing14-text88 {
            display: inline-block;
          }
          .pricing14-text89 {
            display: inline-block;
          }
          .pricing14-text90 {
            display: inline-block;
          }
          .pricing14-text91 {
            display: inline-block;
          }
          .pricing14-text92 {
            display: inline-block;
          }
          .pricing14-text93 {
            display: inline-block;
          }
          .pricing14-text94 {
            display: inline-block;
          }
          .pricing14-text95 {
            display: inline-block;
          }
          .pricing14-text96 {
            display: inline-block;
          }
          .pricing14-text97 {
            display: inline-block;
          }
          .pricing14-text98 {
            display: inline-block;
          }
          .pricing14-text99 {
            display: inline-block;
          }
          .pricing14-text100 {
            display: inline-block;
          }
          .pricing14-text101 {
            display: inline-block;
          }
          .pricing14-text102 {
            display: inline-block;
          }
          .pricing14-text103 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .pricing14-container1 {
              flex-direction: column;
            }
            .pricing14-column3 {
              width: 100%;
            }
            .pricing14-container2 {
              flex-direction: column;
            }
            .pricing14-column6 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .pricing14-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Pricing14.defaultProps = {
  plan1: undefined,
  plan2Feature1: undefined,
  plan1Feature3: undefined,
  plan3Feature2: undefined,
  plan1Feature11: undefined,
  plan2Action1: undefined,
  plan3Price: undefined,
  plan3Action: undefined,
  plan2Action: undefined,
  plan2Yearly1: undefined,
  plan3Feature51: undefined,
  plan1Feature1: undefined,
  plan1Yearly1: undefined,
  plan21: undefined,
  plan3Feature3: undefined,
  plan1Feature2: undefined,
  plan3Feature41: undefined,
  plan3Feature21: undefined,
  plan2Price1: undefined,
  plan2: undefined,
  plan2Feature21: undefined,
  plan3Price1: undefined,
  plan2Feature3: undefined,
  plan1Feature21: undefined,
  plan1Price1: undefined,
  plan1Action: undefined,
  plan1Action1: undefined,
  plan3Feature4: undefined,
  plan2Feature41: undefined,
  plan3Yearly1: undefined,
  plan2Feature11: undefined,
  plan31: undefined,
  plan3Feature11: undefined,
  heading1: undefined,
  plan3Action1: undefined,
  plan2Feature31: undefined,
  plan11: undefined,
  plan2Price: undefined,
  plan2Feature2: undefined,
  plan3Feature31: undefined,
  plan1Feature31: undefined,
  plan3: undefined,
  plan1Price: undefined,
  plan3Feature1: undefined,
  plan2Feature4: undefined,
  content1: undefined,
}

Pricing14.propTypes = {
  plan1: PropTypes.element,
  plan2Feature1: PropTypes.element,
  plan1Feature3: PropTypes.element,
  plan3Feature2: PropTypes.element,
  plan1Feature11: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan3Price: PropTypes.element,
  plan3Action: PropTypes.element,
  plan2Action: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan3Feature51: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  plan21: PropTypes.element,
  plan3Feature3: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan3Feature41: PropTypes.element,
  plan3Feature21: PropTypes.element,
  plan2Price1: PropTypes.element,
  plan2: PropTypes.element,
  plan2Feature21: PropTypes.element,
  plan3Price1: PropTypes.element,
  plan2Feature3: PropTypes.element,
  plan1Feature21: PropTypes.element,
  plan1Price1: PropTypes.element,
  plan1Action: PropTypes.element,
  plan1Action1: PropTypes.element,
  plan3Feature4: PropTypes.element,
  plan2Feature41: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan31: PropTypes.element,
  plan3Feature11: PropTypes.element,
  heading1: PropTypes.element,
  plan3Action1: PropTypes.element,
  plan2Feature31: PropTypes.element,
  plan11: PropTypes.element,
  plan2Price: PropTypes.element,
  plan2Feature2: PropTypes.element,
  plan3Feature31: PropTypes.element,
  plan1Feature31: PropTypes.element,
  plan3: PropTypes.element,
  plan1Price: PropTypes.element,
  plan3Feature1: PropTypes.element,
  plan2Feature4: PropTypes.element,
  content1: PropTypes.element,
}

export default Pricing14
