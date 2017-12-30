import React, { Component } from 'react';
import { Image, Divider } from 'semantic-ui-react';
import Swiper from 'react-id-swiper';

class CoverflowSlider extends Component {

    

    render() {
        const params = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
      loop: true,
      coverflowEffect: {
        rotate: 65,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      
    }
        return (
        <div>
            <Divider hidden />
            <Swiper {...params}>
            
            
            <div>
              <Image size='medium' src='http://www.nossoarmario.com/blog/wp-content/uploads/2015/01/redfoo.jpg' />
            </div>
            <div>
              <Image size='medium' src='http://imagens.ailhadometal.com/2015/03/Metallica3.png'  />
            </div>
            <div>
              <Image size='medium' src='http://myuvn.com/wp-content/uploads/2015/07/justin-timberlake-pusher-love-girl.jpg'  />
            </div>
            <div>
              <Image size='medium' src='http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2015/06/daft-punk.jpg'  />
            </div>
            
            
          </Swiper>
          <Divider hidden />
        </div>
        )
    }
}

export default CoverflowSlider;