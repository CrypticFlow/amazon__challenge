import React from 'react';
import './Home.css'; 
import Product from './Product'; 

function Home() {
    return(
        <div className="home"> 
            <div className="home__container"> 
                <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                />
            </div> 

            <div className="home__row"> 
                <Product 
                title="The Lean Startup: How Constant Innovation Creates A Radically Successful Business" 
                price={19.99} 
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                rating= {1} 
                /> 

                <Product
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={239.99}
                rating={4}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                /> 
            </div>

            <div className="home__row"> 
                <Product
                title="Amazon Echo (3rd Generation) | Smart Speaker with Alexa, Charcoal Fabric" 
                price={98.99} 
                rating= {3}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"  
                /> 

                <Product 
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" 
                price={598.99} 
                rating= {4}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385.jpg"
                />

                <Product 
                title="Amazon Echo (3rd Generation) | Smart Speaker with Alexa, Charcoal Fabric" 
                price={98.99} 
                rating= {3}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                /> 
            </div>

            <div className="home__row"> 
                <Product
                title="Your Mom's Kitchen's Secret Recipe Cook Book"
                price="" /> 
            </div>

        </div> 
    );
};

export default Home; 