import React, {Component} from 'react';
import About from "./About";
import Bolls from "./Bolls";
import CarouselBox from "./CarouselBox";
import Goods from "./Goods";

import PhoneImages from './phonePackage.png';
import LendImages from './siteLendingPackage.png';
import BlogImage from './BlogSiteImage.png';
import SiteImages from './sitePackage.png';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home (){
  let width = window.innerWidth;
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  let settingsMobile = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  if (width <= 720){
        return (
            <>
                <About/>
                <h3 className={'nash'}>Наши предложения!</h3>
                <Slider {...settingsMobile}>
                  <div>
                    <Goods title={'"Визитка"!'} discription={'Купив "Визитку", вы получите хороший, красивый лендинг для рекламы себя и своих товаров!'} price={'от 4900p'} source={LendImages}/>
                  </div>
                  <div>
                    <Goods title={'"Блог"!'} discription={'Купив "Блог", вы получите полностью рабочий информационный-рекламный сайт для создания контента определенной тематики'} price={'от 15900p'} source={BlogImage}/>
                  </div>
                  <div>
                    <Goods title={'"Магазин"!'} discription={'Купив "Магазин", вы получите готовый магазин созданный по вашим идеям нашими специалистами, он будет подключен к нужным вам службам оплаты и/или доставки и учета!'} price={'от 29900p'} source={SiteImages}/>
                  </div>
                  <div>
                    <Goods title={'"Мобильный"!'} discription={'Купив "Мобильный", вы получите в свое распоряжение мобильное приложение нужной вам тематики. От мобильного блога, до магазина с товарами!'} price={'от 139000p'} source={PhoneImages}/>
                  </div>
                  <div>
                    <Goods title={'Пакет "Всё"!'} price={'от 149000p'} discription={'Купив пакет "Всё", вы получите полностью функционирующий интернет-магазин и мобильное приложение аналогичной тематики'} source={SiteImages}/>
                  </div>

                </Slider>

            </>
        );
      };
  if (width > 720) {
    return(
      <>

        <About/>
        <h3 className={'nash'}>Наши продукты!</h3>
        <div className={'slik'}>
            <Goods bg={' bg-warning'} title={'Предложение "Визитка"!'} discription={'Купив "Визитку", вы получите хороший, красивый лендинг для рекламы себя и своих товаров!'} price={'от 4900p'} source={LendImages}/>
            <Goods bg={' bg-info'} title={'Предложение    "Блог"!'} discription={'Купив "Блог", вы получите полностью рабочий информационный-рекламный сайт для создания контента определенной тематики'} price={'15900p'} source={BlogImage}/>
            <Goods bg={' bg-primary'} title={'Предложение "Магазин"!'} discription={'Купив "Магазин", вы получите готовый магазин созданный по вашим идеям нашими специалистами, он будет подключен к нужным вам службам оплаты и/или доставки и учета!'} price={'29900p'} source={SiteImages}/>
            <Goods bg={' bg-danger'} title={'Предложение "Мобильный"!'} discription={'Купив "Мобильный", вы получите в свое распоряжение мобильное приложение нужной вам тематики. От мобильного блога, до магазина с товарами!'} price={'от 139000p'} source={PhoneImages}/>
            <Goods bg={' bg-success'} title={'Пакет "Всё"!'} price={'от 149000p'} discription={'Купив пакет "Всё", вы получите полностью функционирующий интернет-магазин и мобильное приложение аналогичной тематики'} source={SiteImages}/>
        </div>

      </>
    )

  }
}

export default Home;
