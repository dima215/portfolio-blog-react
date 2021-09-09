import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
//import 'swiper/swiper-bundle.css'
import 'swiper/components/effect-fade'
import 'swiper/components/navigation'
import 'swiper/components/pagination'

import 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.js'
import 'swiper/swiper-bundle.css'
import 'swiper/swiper-bundle.min.css'

// import Swiper core and required modules
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper'

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination])

const Slider = () => {
    return (
        <div className="top-slider">
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={false}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="top-slider-item-one">
                        <div className="content-base">
                            <div className="move-right">
                                <h1>
                                    DELICIOUS
                                    <br />
                                    LOREM IPSUM DOLOR
                                </h1>
                            </div>
                            <div className="move-left">
                                <p>
                                    Duis sed odio sit amet nibh vulputate cursus
                                    a sit
                                    <br />
                                    amet mauris. Morbi accuam nectellus
                                </p>
                            </div>
                            <div className="button">
                                <a href="https://www.google.com/">
                                    View recipes
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="top-slider-item-two">
                        <div className="content-base">
                            <div className="move-right">
                                <h1>
                                    VESTIBULUM
                                    <br />
                                    COMMODO VOLUTPAT
                                </h1>
                            </div>
                            <div className="move-left">
                                <p>
                                    Duis sed odio sit amet nibh vulputate cursus
                                    a sit
                                    <br />
                                    amet mauris. Morbi accuam nectellus
                                </p>
                            </div>
                            <div className="button">
                                <a href="https://www.google.com/">
                                    View recipes
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider
