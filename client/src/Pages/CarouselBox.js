import React from "react";

import Carousel from "react-bootstrap/Carousel";
import images1 from './Darite.png';
import images2 from './Mountain.jpg';
import images3 from './Mount.jpg'

export default function CarouselBox (){

    return(
        <>
        <Carousel>
            <Carousel.Item>
            <a href={'http://dariteradost.site'}>
                <img
                className={'d-block w-100'}
                src={images1}
                alt={'Img'}/> 
                <Carousel.Caption>
                    <h1>Интернет магазин, созданный с помощью CMS 'Wordpress', где вы можете приобрести подарки на все праздники жизни!</h1>
                </Carousel.Caption>
            </a>           
            </Carousel.Item>
            <Carousel.Item>
            <a href={''}>
                <img
                className={'d-block w-100'}
                src={images2}
                alt={'Img1'}/>
            </a>
            </Carousel.Item>
            <Carousel.Item>
            <a href={''}>
                <img
                    className={'d-block w-100'}
                    src={images3}
                    alt={'Img'}/>
                </a>
            </Carousel.Item>
        </Carousel>
        </>
    )
}