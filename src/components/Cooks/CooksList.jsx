import React from 'react'
import cooksArray from './cooksArray'
import CooksListItem from './CooksListItem'

const CookList = () => {
    return (
        <>
            <div className="row cook">
                {cooksArray.map((cook) => (
                    <CooksListItem
                        id={cook.id}
                        img={cook.img}
                        name={cook.name}
                        description={cook.description}
                        class={cook.class}
                    />
                ))}
            </div>

            {/* <div className="row cook">
                <div className="col-xs-12 col-md-3">
                    <div className="cook-item">
                        <div className="cook-item-img one">
                            <a href="#"></a>
                            <div className="cook-item-line"></div>
                        </div>

                        <div className="cook-item-name">
                            <h4>Nunc pretium</h4>
                        </div>
                        <div className="cook-item-about">
                            <p>
                                Integer ac risus bibendum, facilisis velit
                                cursus, finibus ante
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-3">
                    <div className="cook-item">
                        <div className="cook-item-img two">
                            <a href="#"></a>
                            <div className="cook-item-line"></div>
                        </div>

                        <div className="cook-item-name">
                            <h4>Quisque ut tempus</h4>
                        </div>
                        <div className="cook-item-about">
                            <p>
                                Nam et dictum lectus. Integer leo metus, lacinia
                                a nunc id
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-3">
                    <div className="cook-item">
                        <div className="cook-item-img three">
                            <a href="#"></a>
                            <div className="cook-item-line"></div>
                        </div>

                        <div className="cook-item-name">
                            <h4>Curabitur accumsan</h4>
                        </div>
                        <div className="cook-item-about">
                            <p>
                                Aenean in ornare risus, id ultrices velit.
                                Curabitur ac consequat
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-3">
                    <div className="cook-item">
                        <div className="cook-item-img four">
                            <a href="#"></a>
                            <div className="cook-item-line"></div>
                        </div>
                        <div className="cook-item-name">
                            <h4>Vivamus commodo</h4>
                        </div>
                        <div className="cook-item-about">
                            <p>
                                Nulla facilisi. In hac habitasse platea
                                dictumst. Sed mattis magna
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default CookList
