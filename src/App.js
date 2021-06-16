import './styles/App.css';
import React, { useState } from 'react';
import Logo from './images/Logo.png'
import AboutImage from './images/about-image.png'
import DesignPic from './images/design.png'
import CodingBackground from './images/coding-background.jpg'
import SkillCard from './components/SkillCard'
import ProjectCard from './components/ProjectCard'
import dataENG from './data/dataENG.json'
import dataPL from './data/dataPL.json'
import projectsDataENG from './data/projectsDataENG.json'
import projectsDataPL from './data/projectsDataPL.json'
import { Fade, Bounce } from 'react-awesome-reveal'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import MyWork from './MyWork'
import { Link, Element } from 'react-scroll'
import { useForm, ValidationError } from '@formspree/react';
import { useMediaQuery } from 'react-responsive'

function App() {

  const [languageEnglish, setLanguageEnglish] = useState(true)
  const [languageOptionStyle, setLanguageOptionStyle] = useState('English')
  const [state, handleSubmit] = useForm("xbjqogdq");

  function isLanguageEnglish(ans) {
    setLanguageEnglish(ans[0])
    if(ans[1] === 'englishClicked') {

    }
  }

  function languageStyleEnglish() {
    if(languageEnglish) {
      return "language-option-clicked"
    } else {
      return "language-option"
    }
  }

  function languageStylePolish() {
    if(languageEnglish === false) {
      return "language-option-clicked"
    } else {
      return "language-option"
    }
  }

  const isMobile = useMediaQuery({
    query: '(min-width: 800px)'
  })

  return (
    <>
      <BrowserRouter>
            <div className="logo-container">
              <a style={{textDecoration: 'none'}} href="/">
                <img src={Logo} alt="Artluevil logo"/>
                <p>Artluevil</p>
              </a>
            </div>
            <div className="language-options">
                <p name="Polish" className={languageStylePolish()} onClick={() => isLanguageEnglish([false, 'polishClicked'])}>PL</p>
                <p>|</p>
                <p name="English" className={languageStyleEnglish()} onClick={() => isLanguageEnglish([true, 'englishClicked'])}>ENG</p>
              </div>
        <Switch>
          <Route exact path="/">
            <section>
              {isMobile ? 
              <div className="design-pic">
                <img src={DesignPic} alt="background overlay with code"/>
              </div> : null}
              <div className="coding-background">
                <img src={CodingBackground}/>
              </div>
              <div className="main">
                <div className="text-container">
                  {languageEnglish ? <h2 className="text-container-hi">Hi</h2> : <h2 className="text-container-hi">Cześć</h2>}
                  {languageEnglish ? <h2 className="text-container-im">I'm</h2> : <h2 className="text-container-im">Jestem</h2>}
                  <h2 className="text-container-kacper">Kacper</h2>
                  <h2 className="text-container-web">Web</h2>
                </div>
                <div className="wave-text-wrapper">
                  <div className="wave-text-container">
                    <h2>Developer</h2>
                    <h2>Developer</h2>
                  </div>
                </div>
                <div className="nav">
                  {languageEnglish ? <a href="/mywork">My work</a> : <a href="/mywork">Moje projekty</a>}
                  {languageEnglish ? <Link activeClass="active" to="contact" smooth={true} duration={1000}><a href="#">contact</a></Link> : <Link activeClass="active" to="contact" smooth={true} duration={1000}><a href="#">Kontakt</a></Link>}
                </div>
              </div>
            </section>
            <div className="wave-container"></div>
            <section className="about-section">
              <Bounce>
                <div className="about-text-container">
                  {languageEnglish ? <div><h2>Something about me</h2>
                  <p>I started my programming adventure with "C" learning the basics of coding. My second programming language was C# because i wanted to make games. After making couple basic games in Unity I was forced to change my priorities and learn Python due to my high school cerificate with informatics. With Python I discovered Flask and Django - world of Web development. Django is great library but after reaserch I started to be intrested in Javascript and big community around it. My friend told me about this great Javascript library called React from Facebook team and I'm learning it to this day (about 2 years with short breaks)</p></div> : <div><h2>Coś o mnie</h2>
                  <p>Swoją przygodę z programowaniem zacząłem od „C” ucząc się podstaw programowania. Moim drugim językiem programowania był C #, ponieważ chciałem tworzyć gry. Po zrobieniu kilku podstawowych gier w Unity byłem zmuszony zmienić moje priorytety i nauczyć się Pythona ze względu na maturę z informatyki. Dzięki Pythonowi odkryłem Flask i Django - świat tworzenia aplikacji internetowych. Django to świetna biblioteka, ale po szybkim reaserchu zacząłem interesować się Javascriptem i dużą społecznością wokół niego. Mój znajomy opowiedział mi o tej wspaniałej bibliotece Javascript o nazwie React od zespołu Facebooka i uczę się jej do dziś (około 2 lata z krótkimi przerwami)</p></div>}
                </div>
              </Bounce>
              <div className="about-image-container">
                <img src={AboutImage}/>
              </div>
            </section>
            <section className="section-skills">
              <div className="wave-container-gray"></div>
              <div className="skills-text-container">
                <Fade direction="up" triggerOnce={true}>
                  {languageEnglish ? <h2 className="skills-text">My Skills</h2> : <h2 className="skills-text">Moje umiejętności</h2>}
                </Fade>
              </div>
              <div className="skill-cards-container">
                {languageEnglish ? dataENG.Cards.map((data) => (
                  <Fade direction="up" triggerOnce={true}>
                    <SkillCard languageEnglish={languageEnglish} key={data.id} data={data}/>
                  </Fade>
                )) :
                dataPL.Cards.map((data) => (
                  <Fade direction="up" triggerOnce={true}>
                    <SkillCard languageEnglish={languageEnglish} key={data.id} data={data}/>
                  </Fade>
                ))}
              </div>
            </section>
            <section className="section-projects">
              <div className="projects-text-container">
                {languageEnglish ? <h2 className="projects-text">Projects</h2> : <h2 className="projects-text">Projekty</h2>}
              </div>
              <div className="project-container">
              {languageEnglish ? projectsDataENG.Projects.map((data) => (
                  <Fade direction="left">
                    <ProjectCard key={data.id} data={data} languageEnglish={languageEnglish}/>
                  </Fade>
                )) :
                projectsDataPL.Projects.map((data) => (
                  <Fade direction="left">
                    <ProjectCard key={data.id} data={data} languageEnglish={languageEnglish}/>
                  </Fade>
                ))}
              </div>
              <div className="projects-link">
                {languageEnglish ? <a href="/mywork">More projects</a> : <a href="/mywork">Więcej projektów</a>}
              </div>
            </section>
            <Element name="contact">
              <section className="contact-section">
                {languageEnglish ? <h2 className="contact-text">Contact</h2> : <h2 className="contact-text">Kontakt</h2>}
                  {languageEnglish ? 
                        <form onSubmit={handleSubmit}>
                        <div className="half-inputs">
                          <div className="name-input">
                            <input type="text" name="name"></input>
                          </div>
                          <div className="email-input">
                            <input type="email" name="email"></input>
                          </div>
                        </div>
                        <div className="contact-subject">
                          <div className="subject-input">
                            <input type="text" name="subject"></input>
                          </div>
                        </div>
                        <div className="contact-textarea">
                          <div className="message-input">
                            <textarea name="message"/>
                          </div>
                        </div>
                        <div className="btn-wrapper">
                          {languageEnglish ? <button type="submit" className="send-button">Send message!</button> : <button type="submit" className="send-button-polish">Wyślij wiadomość!</button>}
                        </div>
                        {state.succeeded ? <div className="email-succeeded-container"><p className="email-succeeded">Email sent correctly</p></div>: null}
                      </form> :

                      <form onSubmit={handleSubmit}>
                      <div className="half-inputs-polish">
                        <div className="name-input-polish">
                          <input type="text" name="name"></input>
                        </div>
                        <div className="email-input-polish">
                          <input type="email" name="email"></input>
                        </div>
                        <ValidationError 
                          prefix="Email" 
                          field="email"
                          errors={state.errors}
                        />
                      </div>
                      <div className="contact-subject-polish">
                        <div className="subject-input-polish">
                          <input type="text" name="subject"></input>
                        </div>
                      </div>
                      <div className="contact-textarea-polish">
                        <div className="message-input-polish">
                          <textarea name="message"/>
                        </div>
                        <ValidationError 
                          prefix="Message" 
                          field="message"
                          errors={state.errors}
                        />
                      </div>
                      <div className="btn-wrapper">
                        {languageEnglish ? <button disabled={state.submitting} disabled={state.submitting} type="submit" className="send-button">Send message!</button> : <button type="submit" className="send-button-polish">Wyślij wiadomość!</button>}
                      </div>
                      {state.succeeded ? <div className="email-succeeded-container"><p className="email-succeeded">Email sent correctly</p></div>: null}
                    </form>}
              </section>
            </Element>
            <footer className="footer-container">
              <p>Made by Artluevil</p>
            </footer>
          </Route>
          <Route path="/mywork">
            <MyWork languageEnglish={languageEnglish}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
