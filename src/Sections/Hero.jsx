import React from 'react'
import { Element, Link as LinkScroll } from 'react-scroll'
import Button from '../Components/Button'
import zap from '../assets/zap.svg'
import hero from '../assets/hero.jpg'

const Hero = () => {
  return (
    <section className='relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32'>
        <Element name='hero'>
            <div className='container'>
                <div className='relative z-2 max-w-512 max-lg:max-w-388'>
                    <div className='caption small-2 uppercase text-p3'>
                        CyberSafe Shield
                    </div>
                    <h1 className='mb-6 h3 text-p4 uppercase max-lg:mb-7 max-lg:h2
                        max-md:mb-4 max-md:text-5xl max-md:leading-12'>
                        Your Ultimate Scam Prevention & Awareness App
                    </h1>
                    <p className='max-w-440 mb-14 body-1 max-md:mb-12'> CyberSafe Shield is designed to keep you one step ahead, 
                        providing real-time scam alerts,expert security tips, 
                        and interactive cybersecurity training—all in one powerful app.</p>

                    <LinkScroll
                        to='features'
                        offset={-100}
                        spy
                        smooth
                    >
                        <Button icon={zap}>Try it now</Button>
                    </LinkScroll>
                </div>
                <div className='absolute top-1/2 right-10 transform -translate-y-1/2 w-[600px] max-lg:w-[500px] max-md:w-[400px] pointer-events-none hero-img_res'>
                    <img src={hero} className='w-full h-auto rounded-2xl shadow-[0_0_50px_rgba(0,150,255,0.8)]'/>
                </div>
            </div>
        </Element>
    </section>
  )
}

export default Hero
