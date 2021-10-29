import React from 'react';
import Banner from '../Banner/Banner';
import Guide from '../Guids/Guide';

import Services from '../Services/Services';
import Statistics from '../Statistics/Statistics';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Services></Services>
           <Guide></Guide>
           <Statistics></Statistics>
        </div>
    );
};

export default Home;