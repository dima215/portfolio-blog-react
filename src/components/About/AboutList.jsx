import React from 'react'

import recipesTips from '../../assets/home_recipes_tips.png'

const AboutList = () => {
    return (
        <>
            <div className="col-xs-12 col-sm-12 col-md-6">
                <div className="margin">
                    <div className="container-small">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6">
                                <div className="tips">
                                    <div className="tips-img">
                                        <img src={recipesTips} alt="" />
                                    </div>
                                    <h3>Useful tips</h3>
                                    <ul>
                                        <li>
                                            Lorem ipsum dolor sit amet, consecte
                                            cons ectetuer
                                        </li>
                                        <li>
                                            Aliquam tincidunt cons ectetuer
                                            mauris eu risus
                                        </li>
                                        <li>Vestibulum auctor dapib</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6">
                                <div className="about">
                                    <h3>About</h3>
                                    <h4>
                                        Integer eleifend risus mauris, vel
                                        interdum risus pharetra sit amet proin
                                        id sapien quis libero.
                                    </h4>
                                    <p>
                                        Duis sed odio sit amet nibh vulputate
                                        cursus a sit amet mauris. Morbi accumsan
                                        ipsum velit. Nam nec tellus a odio
                                        tincidunt auctor a ornare odio. Sed non
                                        mauris vitae erat consequat auctor eu in
                                        elit. className aptent taciti sociosqu
                                        ad litora.
                                    </p>
                                    <a href="https://www.google.com/">
                                        <span>
                                            Washington stimulates economic
                                            growth{' '}
                                        </span>
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutList
