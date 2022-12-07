// import React, { useState } from 'react';
import {useEffect, useState} from 'react';
// import { Image } from 'semantic-ui-react'
// import Image  from 'react-ui-library';
let Logo = require('../components/images/logo.jpeg');
let land = require('../components/images/land.jpeg');
let rise = require('../components/images/rise.jpeg');

// import  {logo, land, rise}  from '../components/images/' 
const RandomImages = () => {
  const [index, setIndex] = useState(0);
  const images = [Logo, land, rise];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <img src={images[index]} alt="Random Image"  />
  );
};

export default RandomImages;
