import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import slide1 from './../img/front-page.png';
import slide2 from './../img/front-page-2.png';
import slide3 from './../img/front-page-3.png';

const items = [
  {
    src: slide1,
    altText: '',
    caption: ''
  },
  {
    src: slide2,
    altText: '',
    caption: ''
  },
  {
    src: slide3,
    altText: '',
    caption: ''
  }
];

const SliderCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        overflow="hidden"
      >
        <img src={item.src} alt={item.altText} width="100%" height="auto" />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={false}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="" onClickHandler={next} />
    </Carousel>
  );
}

export default SliderCarousel;