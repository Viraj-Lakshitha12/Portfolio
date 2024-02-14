import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faJava,
  faHtml5,
  faBootstrap,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Viraj Lakshitha, a passionate and highly focused software engineer from Sri Lanka, specializes in crafting
            innovative solutions using a diverse tech stack. With advanced skills in React, React Native, Spring Boot,
            HTML, CSS, JS, and more, he brings projects to life, from small business sites to complex web applications.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            Confident, naturally curious, and committed to continuous improvement, metackles design challenges with
            enthusiasm. His passion for technology fuels a relentless pursuit of excellence. In a world of code and
            creativity, Viraj is your go-to engineer for turning ideas into impactful digital realities.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJava} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faBootstrap} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
