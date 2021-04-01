import React from 'react'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className ="home__image"
                    alt="Shop to support British designers" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/MjljMzRlMTkt/MjljMzRlMTkt-MjliMDEzOGMt-w1500._CB414415350_.jpg"/> 
            
                <div className="home__row">
                    <Product 
                        id={1.1}
                        title="The Lean Startup"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg" 
                        rating={5}
                    />
                     <Product 
                        id={1.2}
                        title="The Shadow of the Wind"
                        price={15.99}
                        image="https://m.media-amazon.com/images/I/81HFlc9Js+L._AC_UY218_.jpg" 
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id={1.3}
                        title="East of Eden"
                        price={19.99}
                        image="https://m.media-amazon.com/images/I/91gmBp2wQNL._AC_UY218_.jpg" 
                        rating={5}
                    />
                    <Product 
                        id={1.4}
                        title="The Philosopher's Stone"
                        price={19.99}
                        image="https://m.media-amazon.com/images/I/81YOuOGFCJL._AC_UY218_.jpg"
                        rating={5}
                    />
                    <Product 
                        id={1.5}
                        title="Sapiens"
                        price={19.99}
                        image="https://m.media-amazon.com/images/I/81Tojdpg25L._AC_UY218_.jpg"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                <Product 
                    id={1.6}
                    title='LG 49" IPS Display'
                    price={19.99}
                    image="https://m.media-amazon.com/images/I/81gIeZ6rr0L._AC_UY218_.jpg
                    "
                    rating={5}
                />
                </div>

            </div>
        </div>
    )
}

export default Home
