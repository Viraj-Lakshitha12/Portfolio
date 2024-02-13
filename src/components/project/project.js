import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery'
import { TweenMax, TweenLite } from 'gsap/all'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

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
            <div className="slide-image slider-link prev"><img src="https://goranvrban.com/codepen/img2.jpg" />
              <div className="overlay"></div>
            </div>
            <div className="slide-content">
              <div className="slide-date">30.07.2017.</div>
              <div className="slide-title">LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT</div>
              <div className="slide-text">Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat
                apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per
                rebum omittam ex.
              </div>
              <div className="slide-more">READ MORE</div>
            </div>
          </div>
          <div className="slide flex">
            <div className="slide-image slider-link next"><img src="https://goranvrban.com/codepen/img3.jpg" />
              <div className="overlay"></div>
            </div>
            <div className="slide-content">
              <div className="slide-date">30.08.2017.</div>
              <div className="slide-title">LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT</div>
              <div className="slide-text">Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat
                apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per
                rebum omittam ex.
              </div>
              <div className="slide-more">READ MORE</div>
            </div>
          </div>
          <div className="slide flex">
            <div className="slide-image slider-link next"><img src="https://goranvrban.com/codepen/img5.jpg" />
              <div className="overlay"></div>
            </div>
            <div className="slide-content">
              <div className="slide-date">30.09.2017.</div>
              <div className="slide-title">LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT</div>
              <div className="slide-text">Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat
                apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per
                rebum omittam ex.
              </div>
              <div className="slide-more">READ MORE</div>
            </div>
          </div>
          <div className="slide flex">
            <div className="slide-image slider-link next"><img src="https://goranvrban.com/codepen/img6.jpg" />
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

