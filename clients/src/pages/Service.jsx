

import React from 'react';
import { useAuth } from '../ContextApi/TokenApi';
import ServiceCard from './ServiceCard';


const Service = () => {
  const { services } = useAuth();

  return (
    <>
    
      <div className="Cards">
        <div className="container-fluid mb-5">
          <div className="grid-container">
            {services.map((val, index) => (
              <ServiceCard
                key={index}
                imgSrc={val.imgSrc}
                title={val.title}
              />
            ))}
          </div>
        </div>
      </div>
   

    </>
  );
};

export default Service;
