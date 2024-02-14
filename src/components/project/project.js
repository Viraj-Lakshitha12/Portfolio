import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery'
import { TweenMax, TweenLite } from 'gsap/all'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import project1 from '../../assets/projects/project1.png'
import project4 from '../../assets/projects/project4.png'
import project5 from '../../assets/projects/project5.png'
import project6 from '../../assets/projects/project6.png'
import project12 from '../../assets/projects/project12.png'
import project13 from '../../assets/projects/project13.png'

export const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    (function($) {
      $(document).ready(function() {
        var s = $('.slider'),
          sWrapper = s.find('.slider-wrapper'),
          sItem = s.find('.slide'),
          btn = s.find('.slider-link'),
          sWidth = sItem.width(),
          sCount = sItem.length,
          slide_date = s.find('.slide-date'),
          slide_title = s.find('.slide-title'),
          slide_text = s.find('.slide-text'),
          slide_more = s.find('.slide-more'),
          slide_image = s.find('.slide-image img'),
          sTotalWidth = sCount * sWidth

        sWrapper.css('width', sTotalWidth)

        var clickCount = 0

        btn.on('click', function(e) {
          e.preventDefault()

          if ($(this).hasClass('next')) {
            clickCount < sCount - 1 ? clickCount++ : (clickCount = 0)
          } else if ($(this).hasClass('prev')) {
            clickCount > 0 ? clickCount-- : (clickCount = sCount - 1)
          }
          TweenMax.to(sWrapper, 0.4, { x: `-${sWidth * clickCount}` })

          //CONTENT ANIMATIONS

          var fromProperties = { autoAlpha: 0, x: '-50', y: '-10' }
          var toProperties = { autoAlpha: 0.8, x: '0', y: '0' }

          TweenLite.fromTo(
            slide_image,
            1,
            { autoAlpha: 0, y: '40' },
            { autoAlpha: 1, y: '0' },
          )
          TweenLite.fromTo(
            slide_date,
            0.4,
            fromProperties,
            toProperties,
          )
          TweenLite.fromTo(
            slide_title,
            0.6,
            fromProperties,
            toProperties,
          )
          TweenLite.fromTo(
            slide_text,
            0.8,
            fromProperties,
            toProperties,
          )
          TweenLite.fromTo(
            slide_more,
            1,
            fromProperties,
            toProperties,
          )
        })
      })
    })($)

    $('.overlay').addClass('overlay-blue')
  }, [])

  return (
    <div>
      <h1 className={'project-title'}>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
          idx={10}
        />
      </h1>
      <div className="slider">
        <div className="slider-wrapper flex">
          <div className="slide flex">
            <div className="slide-image slider-link prev"><img src={project1} alt={'Hostel Menegment System'} />
            </div>
            <div className="slide-content">
              <div className="slide-date">02.05.2022.</div>
              <div className="slide-title">D24 Hostel Management System</div>
              <div className="slide-text">With this basic ORM framework,
                you can create tables in the database without the
                use of any SQL queries
              </div>
              <div><a className="slide-more" href={'https://github.com/Viraj-Lakshitha12/Hibernate_Project'}
                      target={'_blank'}>READ MORE</a></div>
            </div>
          </div>

          <div className="slide flex">
            <div className="slide-image slider-link next"><img src={project5} alt={'Food ordering System'} />
            </div>
            <div className="slide-content">
              <div className="slide-date">30.12.2023.</div>
              <div className="slide-title">Food Ordering System</div>
              <div className="slide-text">A modern and user-friendly Food
                Ordering App built with React, Tailwind CSS,
                Node.js, and TypeScript.
              </div>
              <div><a className="slide-more" href={'https://github.com/Viraj-Lakshitha12/Food-Ordering-System'}
                      target={'_blank'}>READ MORE</a></div>
            </div>
          </div>

          <div className="slide flex">
            <div className="slide-image slider-link next"><img src={project4} alt={'weather-app'} />
            </div>
            <div className="slide-content">
              <div className="slide-date">10.02.2024.</div>
              <div className="slide-title">Weather App</div>
              <div className="slide-text">The weather application is developed using React and Vite. It provides
                real-time weather information for specified locations, offering details such as temperature, weather
                conditions, and additional insights. Users can search for cities to get accurate and up-to-date weather
                forecasts.
              </div>
              <div><a className="slide-more" href={'https://github.com/Viraj-Lakshitha12/weather-app'}
                      target={'_blank'}>READ MORE</a></div>
            </div>
          </div>

          <div className="slide flex">
            <div className="slide-image slider-link next"><img src={project13} alt={'Music instrument Store'} />
              <div className="overlay"></div>
            </div>
            <div className="slide-content">
              <div className="slide-date">20.03.2023.</div>
              <div className="slide-title">Music Instrument Store</div>
              <div className="slide-text">Crafted with Bootstrap, HTML, CSS, and JavaScript, my Music Instrument Store
                website project showcases my skills in frontend development. Explore the world of music with a
                user-friendly and visually appealing online instrument store.
              </div>
              <div><a className="slide-more" href={'https://github.com/Viraj-Lakshitha12/Music-Instrument-Store'}
                      target={'_blank'}>READ MORE</a></div>
            </div>
          </div>

          <div className="slide flex">
            <div className="slide-image slider-link next"><img src={project12} alt={'Travel management system'} />
              <div className="overlay"></div>
            </div>
            <div className="slide-content">
              <div className="slide-date">10.10.2023.</div>
              <div className="slide-title">Travel Planning System</div>
              <div className="slide-text">Developed a dynamic web application using microservices with Spring Boot.
                Utilized Hibernate for efficient data handling, MySQL for storage, and a gateway for a strong
                foundation.
              </div>
              <div><a className="slide-more"
                      href={'https://github.com/Viraj-Lakshitha12/Spring_final_assignment_Backend'} target={'_blank'}>READ
                MORE</a></div>
            </div>
          </div>
        </div>
        <div className="arrows">
          <a href="#" title="Previous" className="arrow slider-link prev"></a>
          <a href="#" title="Next" className="arrow slider-link next"></a>
        </div>
      </div>
    </div>
  )
}

