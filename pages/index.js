import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'

const Home = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="home-container">
        <Head>
          <title>FGS Curriculos</title>
          <meta property="og:title" content="FGS Curriculos" />
        </Head>
        <Navbar8
          link1={
            <Fragment>
              <span className="home-text100">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SdfObb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text101">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_fOjp6E'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text102">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TA5OKc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text103">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_K-xAHd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="home-text104">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_woIwQZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text105">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_p9G8is'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text106">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_fIlSc6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text107">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pVE_pI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text108">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_yd41LI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text109">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2Rd3n6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page1Description={
            <Fragment>
              <span className="home-text110">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4awUUh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="home-text111">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_puOsSG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="home-text112">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-V0kxV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="home-text113">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_eR_aMa'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Navbar8>
        <Hero17
          action1={
            <Fragment>
              <span className="home-text114">Criar meu currículo</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text115">Saber mais</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text116">
                Crie um currículo de destaque com nosso serviço de IA em apenas
                3 etapas fáceis. Nossa equipe de especialistas analisará e
                enviará seu currículo via WhatsApp para uma experiência
                perfeita.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text117">
                Obtenha seu currículo profissional hoje mesmo!
              </span>
            </Fragment>
          }
          image3Src="https://images.unsplash.com/photo-1588483977150-9c2127ab7bcc?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGNvZmZlfGVufDB8fHx8MTc0NDM3NjQ2OHww&amp;ixlib=rb-4.0.3&amp;w=1500"
          image7Src="https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGRlc2t8ZW58MHx8fHwxNzQ0Mzc2NDU1fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
          image9Src="https://images.unsplash.com/photo-1606166325683-e6deb697d301?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGNvbXB8ZW58MHx8fHwxNzQ0Mzc2MzgxfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        ></Hero17>
        <Features24
          feature1Title={
            <Fragment>
              <span className="home-text118">
                Serviço de currículo com tecnologia de IA
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text119">
                Entrega de currículos via WhatsApp
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text120">
                <span>Currículos revisados ​​</span>
                <br />
                <br />
              </span>
            </Fragment>
          }
          feature1ImgSrc="https://images.unsplash.com/photo-1637689810282-4692c7677feb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHN1Y2Vzc3xlbnwwfHx8fDE3NDQzNzY3MDl8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          feature1Description={
            <Fragment>
              <span className="home-text124">
                Obtenha currículos profissionais em 3 etapas fáceis
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text125">
                Entrega de currículos via WhatsApp em pouco tempo
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text126">
                Receba currículos revisados ​​por nossa equipe
              </span>
            </Fragment>
          }
        ></Features24>
        <CTA26
          action1={
            <Fragment>
              <span className="home-text127">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lB8idR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text128">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ph4jkY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text129">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_olaeHw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></CTA26>
        <Features25
          feature1Title={
            <Fragment>
              <span className="home-text130">
                Currículos com tecnologia de IA
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text131">
                Qualidade revisada por nossa equipe !
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text132">Entrega pelo WhatsApp</span>
            </Fragment>
          }
          feature1ImgSrc="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxlbnRlcnByaXNlfGVufDB8fHx8MTc0NDM3OTk1MHww&amp;ixlib=rb-4.0.3&amp;w=1500"
          feature1Description={
            <Fragment>
              <span className="home-text133">
                Nossa tecnologia avançada de IA ajuda a criar currículos
                personalizados com base em suas informações e preferências de
                trabalho.
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text134">
                Cada currículo é cuidadosamente revisado por nossa equipe de
                especialistas para garantir qualidade e relevância.
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text135">
                Receba seu currículo finalizado diretamente no WhatsApp para
                maior praticidade e acesso rápido.
              </span>
            </Fragment>
          }
        ></Features25>
        <Pricing14
          plan1={
            <Fragment>
              <span className="home-text136">Simples</span>
            </Fragment>
          }
          plan2={
            <Fragment>
              <span className="home-text137">Profissional</span>
            </Fragment>
          }
          plan3={
            <Fragment>
              <span className="home-text138">Plano empresarial</span>
            </Fragment>
          }
          plan11={
            <Fragment>
              <span className="home-text139">Basic plan</span>
            </Fragment>
          }
          plan21={
            <Fragment>
              <span className="home-text140">Business plan</span>
            </Fragment>
          }
          plan31={
            <Fragment>
              <span className="home-text141">Enterprise plan</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text142">
                Escolha o plano perfeito para você
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text143">Tabela de Planos</span>
            </Fragment>
          }
          plan1Price={
            <Fragment>
              <span className="home-text144">CV Basico - $9,90</span>
            </Fragment>
          }
          plan2Price={
            <Fragment>
              <span className="home-text145">Cv Pro - $19,90</span>
            </Fragment>
          }
          plan3Price={
            <Fragment>
              <span className="home-text146">Cv Ingles - $29,90</span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="home-text147">Começar</span>
            </Fragment>
          }
          plan1Price1={
            <Fragment>
              <span className="home-text148">$200/yr</span>
            </Fragment>
          }
          plan2Action={
            <Fragment>
              <span className="home-text149">Começar </span>
            </Fragment>
          }
          plan2Price1={
            <Fragment>
              <span className="home-text150">$299/yr</span>
            </Fragment>
          }
          plan3Action={
            <Fragment>
              <span className="home-text151">Começar</span>
            </Fragment>
          }
          plan3Price1={
            <Fragment>
              <span className="home-text152">$499/yr</span>
            </Fragment>
          }
          plan1Action1={
            <Fragment>
              <span className="home-text153">Get started</span>
            </Fragment>
          }
          plan1Yearly1={
            <Fragment>
              <span className="home-text154">or $20 monthly</span>
            </Fragment>
          }
          plan2Action1={
            <Fragment>
              <span className="home-text155">Get started</span>
            </Fragment>
          }
          plan2Yearly1={
            <Fragment>
              <span className="home-text156">or $29 monthly</span>
            </Fragment>
          }
          plan3Action1={
            <Fragment>
              <span className="home-text157">Get started</span>
            </Fragment>
          }
          plan3Yearly1={
            <Fragment>
              <span className="home-text158">or $49 monthly</span>
            </Fragment>
          }
          plan1Feature1={
            <Fragment>
              <span className="home-text159">Currículo básico</span>
            </Fragment>
          }
          plan1Feature2={
            <Fragment>
              <span className="home-text160">Currículos revisados</span>
            </Fragment>
          }
          plan1Feature3={
            <Fragment>
              <span className="home-text161">Visual limpo</span>
            </Fragment>
          }
          plan2Feature1={
            <Fragment>
              <span className="home-text162">Tudo do Plano Básico</span>
            </Fragment>
          }
          plan2Feature2={
            <Fragment>
              <span className="home-text163">
                Criação de carta de apresentação
              </span>
            </Fragment>
          }
          plan2Feature3={
            <Fragment>
              <span className="home-text164">
                Modelos de design personalizados
              </span>
            </Fragment>
          }
          plan2Feature4={
            <Fragment>
              <span className="home-text165">Versao mais destacda</span>
            </Fragment>
          }
          plan3Feature1={
            <Fragment>
              <span className="home-text166">Tudo do Plano Pro</span>
            </Fragment>
          }
          plan3Feature2={
            <Fragment>
              <span className="home-text167">
                Tradução profissional + versão nacional
              </span>
            </Fragment>
          }
          plan3Feature3={
            <Fragment>
              <span className="home-text168">Revisões ilimitadas</span>
            </Fragment>
          }
          plan3Feature4={
            <Fragment>
              <span className="home-text169">
                Adaptado para o mercado internacional
              </span>
            </Fragment>
          }
          plan1Feature11={
            <Fragment>
              <span className="home-text170">Feature text goes here</span>
            </Fragment>
          }
          plan1Feature21={
            <Fragment>
              <span className="home-text171">Feature text goes here</span>
            </Fragment>
          }
          plan1Feature31={
            <Fragment>
              <span className="home-text172">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature11={
            <Fragment>
              <span className="home-text173">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature21={
            <Fragment>
              <span className="home-text174">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature31={
            <Fragment>
              <span className="home-text175">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature41={
            <Fragment>
              <span className="home-text176">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature11={
            <Fragment>
              <span className="home-text177">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature21={
            <Fragment>
              <span className="home-text178">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature31={
            <Fragment>
              <span className="home-text179">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature41={
            <Fragment>
              <span className="home-text180">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature51={
            <Fragment>
              <span className="home-text181">Feature text goes here</span>
            </Fragment>
          }
        ></Pricing14>
        <Steps2
          step1Title={
            <Fragment>
              <span className="home-text182">Crie seu currículo</span>
            </Fragment>
          }
          step2Title={
            <Fragment>
              <span className="home-text183">Revisão de IA</span>
            </Fragment>
          }
          step3Title={
            <Fragment>
              <span className="home-text184">Human Review</span>
            </Fragment>
          }
          step4Title={
            <Fragment>
              <span className="home-text185">Receba seu currículo</span>
            </Fragment>
          }
          step1Description={
            <Fragment>
              <span className="home-text186">
                Preencha nosso criador de currículos fácil de usar com suas
                informações e experiência profissional.
              </span>
            </Fragment>
          }
          step2Description={
            <Fragment>
              <span className="home-text187">
                Nossa tecnologia de IA analisará seu currículo para garantir que
                ele atenda aos padrões do setor e esteja otimizado para o ATS.
              </span>
            </Fragment>
          }
          step3Description={
            <Fragment>
              <span className="home-text188">
                Nossa equipe de redatores profissionais de currículos analisará
                e aprimorará seu currículo para que ele se destaque.
              </span>
            </Fragment>
          }
          step4Description={
            <Fragment>
              <span className="home-text189">
                Receba seu currículo impecável diretamente no seu WhatsApp,
                pronto para impressionar os recrutadores.
              </span>
            </Fragment>
          }
        ></Steps2>
        <Testimonial17
          review1={
            <Fragment>
              <span className="home-text190">
                Fiquei impressionado com a qualidade do currículo que recebi.
                Ele superou minhas expectativas e me ajudou a conseguir o
                emprego dos meus sonhos.
              </span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text191">
                O serviço de currículo é intuitivo e eficiente. Recebi
                atendimento personalizado e um currículo adaptado às minhas
                necessidades.
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text192">
                Recomendo muito este serviço a qualquer pessoa que queira se
                destacar no mercado de trabalho. A equipe é profissional e
                entrega currículos de primeira qualidade.
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text193">
                O currículo que recebi me ajudou a garantir várias entrevistas
                de emprego. Sou grato pela abordagem personalizada e pela
                atenção aos detalhes.
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text194">
                Leia o que nossos clientes satisfeitos têm a dizer sobre nosso
                serviço de currículo com tecnologia de IA.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text195">Testemunhos</span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text196">Ana Silva</span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text197">Pedro Santos</span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text198">Mariana Costa</span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text199">Ricardo Oliveira</span>
            </Fragment>
          }
          author1Position={
            <Fragment>
              <span className="home-text200">Gerente de Marketing</span>
            </Fragment>
          }
          author2Position={
            <Fragment>
              <span className="home-text201">Engenheiro de Software</span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="home-text202">Especialista em RH</span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="home-text203">Representante de vendas</span>
            </Fragment>
          }
        ></Testimonial17>
        <Contact10
          content1={
            <Fragment>
              <span className="home-text204">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Vlp_kM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text205">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_yn1JtM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          location1={
            <Fragment>
              <span className="home-text206">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5U6SbE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          location2={
            <Fragment>
              <span className="home-text207">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_09pvIt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          location1ImageSrc="https://images.unsplash.com/photo-1612296727716-d6c69d2a2cbb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxlbnRlcnByaXNlfGVufDB8fHx8MTc0NDM3OTk1MHww&amp;ixlib=rb-4.0.3&amp;w=1500"
          location2ImageSrc="https://images.unsplash.com/photo-1580741753044-b3f303ad361b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxlbnRlcnByaXNlfGVufDB8fHx8MTc0NDM3OTk1MHww&amp;ixlib=rb-4.0.3&amp;w=1500"
          location1Description={
            <Fragment>
              <span className="home-text208">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3B4JTm'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          location2Description={
            <Fragment>
              <span className="home-text209">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jHOWk6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Contact10>
        <Footer4
          link1={
            <Fragment>
              <span className="home-text210">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_yoQMkm'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text211">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_p7nMYT'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text212">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JpACIC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text213">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2VtqNc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text214">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_RY0QgS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          logoSrc="/my%20logo1-1500h.jpeg"
          termsLink={
            <Fragment>
              <span className="home-text215">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_O4io8P'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="home-text216">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0eakSL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="home-text217">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9CGqDy'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Footer4>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text100 {
            display: inline-block;
          }
          .home-text101 {
            color: rgb(25, 24, 24);
            display: inline-block;
            box-shadow: rgb(212, 212, 212) 5px 5px 10px 0px;
          }
          .home-text102 {
            display: inline-block;
          }
          .home-text103 {
            display: inline-block;
          }
          .home-text104 {
            display: inline-block;
          }
          .home-text105 {
            display: inline-block;
          }
          .home-text106 {
            display: inline-block;
          }
          .home-text107 {
            display: inline-block;
          }
          .home-text108 {
            display: inline-block;
          }
          .home-text109 {
            display: inline-block;
          }
          .home-text110 {
            display: inline-block;
          }
          .home-text111 {
            display: inline-block;
          }
          .home-text112 {
            display: inline-block;
          }
          .home-text113 {
            display: inline-block;
          }
          .home-text114 {
            display: inline-block;
          }
          .home-text115 {
            display: inline-block;
          }
          .home-text116 {
            display: inline-block;
          }
          .home-text117 {
            display: inline-block;
          }
          .home-text118 {
            display: inline-block;
          }
          .home-text119 {
            display: inline-block;
          }
          .home-text120 {
            display: inline-block;
          }
          .home-text124 {
            display: inline-block;
          }
          .home-text125 {
            display: inline-block;
          }
          .home-text126 {
            display: inline-block;
          }
          .home-text127 {
            display: inline-block;
          }
          .home-text128 {
            display: inline-block;
          }
          .home-text129 {
            display: inline-block;
          }
          .home-text130 {
            display: inline-block;
          }
          .home-text131 {
            display: inline-block;
          }
          .home-text132 {
            display: inline-block;
          }
          .home-text133 {
            display: inline-block;
          }
          .home-text134 {
            display: inline-block;
          }
          .home-text135 {
            display: inline-block;
          }
          .home-text136 {
            display: inline-block;
          }
          .home-text137 {
            display: inline-block;
          }
          .home-text138 {
            display: inline-block;
          }
          .home-text139 {
            display: inline-block;
          }
          .home-text140 {
            display: inline-block;
          }
          .home-text141 {
            display: inline-block;
          }
          .home-text142 {
            display: inline-block;
          }
          .home-text143 {
            display: inline-block;
          }
          .home-text144 {
            display: inline-block;
          }
          .home-text145 {
            display: inline-block;
          }
          .home-text146 {
            display: inline-block;
          }
          .home-text147 {
            display: inline-block;
          }
          .home-text148 {
            display: inline-block;
          }
          .home-text149 {
            display: inline-block;
          }
          .home-text150 {
            display: inline-block;
          }
          .home-text151 {
            display: inline-block;
          }
          .home-text152 {
            display: inline-block;
          }
          .home-text153 {
            display: inline-block;
          }
          .home-text154 {
            display: inline-block;
          }
          .home-text155 {
            display: inline-block;
          }
          .home-text156 {
            display: inline-block;
          }
          .home-text157 {
            display: inline-block;
          }
          .home-text158 {
            display: inline-block;
          }
          .home-text159 {
            display: inline-block;
          }
          .home-text160 {
            display: inline-block;
          }
          .home-text161 {
            display: inline-block;
          }
          .home-text162 {
            display: inline-block;
          }
          .home-text163 {
            display: inline-block;
          }
          .home-text164 {
            display: inline-block;
          }
          .home-text165 {
            display: inline-block;
          }
          .home-text166 {
            display: inline-block;
          }
          .home-text167 {
            display: inline-block;
          }
          .home-text168 {
            display: inline-block;
          }
          .home-text169 {
            display: inline-block;
          }
          .home-text170 {
            display: inline-block;
          }
          .home-text171 {
            display: inline-block;
          }
          .home-text172 {
            display: inline-block;
          }
          .home-text173 {
            display: inline-block;
          }
          .home-text174 {
            display: inline-block;
          }
          .home-text175 {
            display: inline-block;
          }
          .home-text176 {
            display: inline-block;
          }
          .home-text177 {
            display: inline-block;
          }
          .home-text178 {
            display: inline-block;
          }
          .home-text179 {
            display: inline-block;
          }
          .home-text180 {
            display: inline-block;
          }
          .home-text181 {
            display: inline-block;
          }
          .home-text182 {
            display: inline-block;
          }
          .home-text183 {
            display: inline-block;
          }
          .home-text184 {
            display: inline-block;
          }
          .home-text185 {
            display: inline-block;
          }
          .home-text186 {
            display: inline-block;
          }
          .home-text187 {
            display: inline-block;
          }
          .home-text188 {
            display: inline-block;
          }
          .home-text189 {
            display: inline-block;
          }
          .home-text190 {
            display: inline-block;
          }
          .home-text191 {
            display: inline-block;
          }
          .home-text192 {
            display: inline-block;
          }
          .home-text193 {
            display: inline-block;
          }
          .home-text194 {
            display: inline-block;
          }
          .home-text195 {
            display: inline-block;
          }
          .home-text196 {
            display: inline-block;
          }
          .home-text197 {
            display: inline-block;
          }
          .home-text198 {
            display: inline-block;
          }
          .home-text199 {
            display: inline-block;
          }
          .home-text200 {
            display: inline-block;
          }
          .home-text201 {
            display: inline-block;
          }
          .home-text202 {
            display: inline-block;
          }
          .home-text203 {
            display: inline-block;
          }
          .home-text204 {
            display: inline-block;
          }
          .home-text205 {
            display: inline-block;
          }
          .home-text206 {
            display: inline-block;
          }
          .home-text207 {
            display: inline-block;
          }
          .home-text208 {
            display: inline-block;
          }
          .home-text209 {
            display: inline-block;
          }
          .home-text210 {
            display: inline-block;
          }
          .home-text211 {
            display: inline-block;
          }
          .home-text212 {
            display: inline-block;
          }
          .home-text213 {
            display: inline-block;
          }
          .home-text214 {
            display: inline-block;
          }
          .home-text215 {
            display: inline-block;
          }
          .home-text216 {
            display: inline-block;
          }
          .home-text217 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
