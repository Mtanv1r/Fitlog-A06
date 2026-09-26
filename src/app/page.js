import Hero from '@/component/hompage/hero';
import Liberio from '@/component/hompage/liberio';
import React from 'react';

const page = () => {
  return (
    <div className="container mx-auto my-10">
      <Hero></Hero>
      <Liberio></Liberio>
    </div>
  );
};

export default page;