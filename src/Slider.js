import React from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/src/styles/css/swiper.css';

import './App.css';

class Slider extends React.Component {
    render() {
    const params = {
        grabCursor: true,
        loop:true,
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30,
      autoplay: {
        delay: 3000
      },
      scrollbar: {
        el: '.scrollbar',
        draggable: true,
      }
    }

        return (
            <div className="App">
                <div className="scrollbar" />

                <Swiper {...params}>
                    <div id="slide_one" className="swiper-slide">
                        <video
                            className="slider-video"
                            width="100%"
                            preload="auto"
                            loop="loop"
                            autoPlay="autoPlay"
                            style={{
                                visibility: "visible",
                                width: "100%",
                            }}
                            poster="https://dl.dropbox.com/s/pjopy0mu4klisat/working-with-espresso.jpg"
                        >
                            <source src="https://dl.dropbox.com/s/931244iox7i0fpk/working-with-espresso.mp4" type="video/mp4" />
                            <source src="https://dl.dropbox.com/s/g3mo3w34pb8pp2l/working-with-espresso.webm" type="video/webm" />
                            <source src="https://dl.dropbox.com/s/p37f0avio0x6bs8/working-with-espresso.ogv" type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div id="slide_two" className="swiper-slide">
                        <div id="lab_video_text_overlay">
                            <div className="container">
                                <h2>Lorum Ipsum Deloras </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie</p>
                                
                            </div>
                        </div>

                        <video
                            className="slider-video"
                            width="100%"
                            preload="auto"
                            loop="loop"
                            autoPlay="autoPlay"
                            style={{
                                visibility: "visible",
                                width: "100%",
                            }}
                            poster="https://dl.dropbox.com/s/ijyaav8qzkdtyt5/lab-coding-screenshot.jpg"
                        >
                            <source src="https://dl.dropbox.com/s/5z4jupv385iboiu/lab-coding.mp4" type="video/mp4" />
                            <source src="https://dl.dropbox.com/s/79msa1jcni374v8/lab-coding.webm" type="video/webm" />
                            <source src="https://dl.dropbox.com/s/7bq2tyma5de88bt/lab-coding.ogg" type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>

                    </div>

                    <div id="slide_three" className="swiper-slide">
                        <video
                            className="slider-video"
                            width="100%"
                            preload="auto"
                            loop="loop"
                            autoPlay="autoPlay"
                            style={{
                                visibility: "visible",
                                width: "100%",
                            }}
                            poster="https://dl.dropbox.com/s/5aeyg9ntj1fs8v1/typing-numbers.jpg"
                        >
                            <source src="https://dl.dropbox.com/s/xmosdvoleruexky/typing-numbers.mp4" type="video/mp4" />
                            <source src="https://dl.dropbox.com/s/13z1t97pcvka88k/typing-numbers.webm" type="video/webm" />
                            <source src="https://dl.dropbox.com/s/5pyuc35wnv5khe1/typing-numbers.ogv" type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </Swiper>
            </div>
        );
    
}}

export default Slider;