import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery'
import { TweenMax, TweenLite } from 'gsap/all'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import project1 from '../../assets/projects/project1.png'
import project4 from '../../assets/projects/project4.png'
import project5 from '../../assets/projects/project5.png'
import project6 from '../../assets/projects/project6.png'
import project7 from '../../assets/projects/project7.png'

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
            <div className="slide-image slider-link prev"><img src={project1} alt={'project1'} />
            </div>
            <div className="slide-content">
              <div className="slide-date">02.05.2022.</div>
              <div className="slide-title">D24 Hostel Management System</div>
              <div className="slide-text">With this basic ORM framework,
                you can create tables in the database without the
                use of any SQL queries
              </div>
              <div className="slide-more">READ MORE</div>
            </div>
          </div>

          <div className="slide flex">
            <div className="slide-image slider-link next"><img src={project5} alt={'project5'} />
            </div>
            <div className="slide-content">
              <div className="slide-date">30.12.2023.</div>
              <div className="slide-title">Food Ordering System</div>
              <div className="slide-text">A modern and user-friendly Food
                Ordering App built with React, Tailwind CSS,
                Node.js, and TypeScript.
              </div>
              <div className="slide-more">READ MORE</div>
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
              <div className="slide-more">READ MORE</div>
            </div>
          </div>
          <div className="slide flex">
            <div className="slide-image slider-link next"><img src={project6} alt={'project6'} />
              <div className="overlay"></div>
            </div>
            <div className="slide-content">
              <div className="slide-date">30.10.2017.</div>
              <div className="slide-title">LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT</div>
              <div className="slide-text">Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat
                apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per
                rebum omittam ex.
              </div>
              <div className="slide-more">READ MORE</div>
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

