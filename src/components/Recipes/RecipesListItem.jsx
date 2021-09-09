import React from 'react'

const RecipesListItem = ({
    id,
    img,
    name,
    description,
    linkComments,
    linkRead,
    imgTextDocument,
    imgChatMessage,
    category,
}) => {
    const divStyle = {
        backgroundImage: 'url(' + img + ')',
    }

    return (
        <>
            <div className="row recipes-content">
                <div className="col-xs-12 col-md-9-24">
                    <div
                        className={'img' + id + ' ' + 'recipes-img'}
                        style={divStyle}
                    >
                        <a href="https://www.google.com/">
                            <span>Washington stimulates economic growth </span>
                        </a>
                        <div className="recipes-img-links">
                            <div className="recipes-img-find">
                                <a href="https://www.google.com/">
                                    <span>
                                        Washington stimulates economic growth{' '}
                                    </span>
                                </a>
                            </div>
                            <div className="separator"></div>
                            <div className="recipes-img-hyperlink">
                                <a href="https://www.google.com/">
                                    <span>
                                        Washington stimulates economic growth{' '}
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-15-24">
                    <div className="recipes-text">
                        <a href="https://www.google.com/">
                            <span>Washington stimulates economic growth </span>
                            <h3>{name}</h3>
                        </a>
                        <p>{description}</p>
                    </div>
                    <div className="recipes-footer">
                        <div className="recipes-comments">
                            <img src={imgTextDocument} width="12" alt="" />
                            <a href={linkComments}>
                                <span>
                                    Washington stimulates economic growth{' '}
                                </span>
                                Read more
                            </a>
                        </div>
                        <div className="recipes-comments">
                            <img src={imgChatMessage} width="12" alt="" />
                            <a href={linkRead}>
                                <span>
                                    Washington stimulates economic growth{' '}
                                </span>
                                2
                            </a>
                        </div>

                        <div className="line-vertical"></div>

                        <div className="recipes-comments">
                            <a href={linkRead}>
                                <span>
                                    Washington stimulates economic growth{' '}
                                </span>
                                {category}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="col-xs-12 col-md-3">
                <div className="cook-item">
                    <div
                        className={props.class + ' cook-item-img'}
                        style={divStyle}
                        // style={`backgroundImage: url(${props.img})`}
                    >
                        <a href="https://www.google.com/">
                            <span>Washington stimulates economic growth </span>
                        </a>
                        <div className="cook-item-line"></div>
                    </div>

                    <div className="cook-item-name">
                        <h4>{props.name}</h4>
                    </div>
                    <div className="cook-item-about">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default RecipesListItem
