import React from 'react'

import textDocument from '../../assets/text_document_add.svg'
import chatMessage from '../../assets/chat_message.svg'
import recipesTips from '../../assets/home_recipes_tips.png'
import logoFooter from '../../assets/home_recipes_logo_footer.png'
import CookList from '../../components/Cooks/CooksList'

const Main = () => {
    return (
        <>
            <main>
                <section>
                    <div className="patterns">
                        <h2>What do we love to cook?</h2>
                    </div>
                    <CookList />
                    <div className="section-line">
                        <div className="line-top"></div>
                        <div className="line-centr"></div>
                        <div className="line-bottom"></div>
                    </div>
                </section>
                <section>
                    <div className="recipes">
                        <h2>Newest recipes!</h2>
                    </div>
                    <div className="row recipes-content">
                        <div className="col-xs-12 col-md-9-24">
                            <div className="recipes-img img1">
                                <a href="https://www.google.com/">
                                    <span>
                                        Washington stimulates economic growth{' '}
                                    </span>
                                </a>
                                <div className="recipes-img-links">
                                    <div className="recipes-img-find">
                                        <a href="https://www.google.com/">
                                            <span>
                                                Washington stimulates economic
                                                growth{' '}
                                            </span>
                                        </a>
                                    </div>
                                    <div className="separator"></div>
                                    <div className="recipes-img-hyperlink">
                                        <a href="https://www.google.com/">
                                            <span>
                                                Washington stimulates economic
                                                growth{' '}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-15-24">
                            <div className="recipes-text">
                                <a href="https://www.google.com/">
                                    <span>
                                        Washington stimulates economic growth{' '}
                                    </span>
                                    <h3>
                                        Proin dui sodales imperdi sit sapien
                                        fames ac luctus
                                    </h3>
                                </a>
                                <p>
                                    Pellentesque et lacus pretium tincidunt.
                                    Pellentesque at metus. Donec nisl a nisl.
                                    Vestibulum ante ipsum primis in nulla orci
                                    ut leo nec cursus consequat, orci ut
                                </p>
                            </div>
                            <div className="recipes-footer">
                                <div className="recipes-comments">
                                    <img src={textDocument} width="12" alt="" />
                                    <a href="https://www.google.com/">
                                        <span>
                                            Washington stimulates economic
                                            growth{' '}
                                        </span>
                                        Read more
                                    </a>
                                </div>
                                <div className="recipes-comments">
                                    <img src={chatMessage} width="12" alt="" />
                                    <a href="https://www.google.com/">
                                        <span>
                                            Washington stimulates economic
                                            growth{' '}
                                        </span>
                                        2
                                    </a>
                                </div>

                                <div className="line-vertical"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row recipes-content">
                        <div className="col-xs-12 col-md-9-24">
                            <div className="recipes-img img2">
                                <a href="https://www.google.com/">
                                    <span>
                                        Washington stimulates economic growth{' '}
                                    </span>
                                </a>
                                <div className="recipes-img-links">
                                    <div className="recipes-img-find">
                                        <a href="https://www.google.com/">
                                            <span>
                                                Washington stimulates economic
                                                growth{' '}
                                            </span>
                                        </a>
                                    </div>
                                    <div className="separator"></div>
                                    <div className="recipes-img-hyperlink">
                                        <a href="https://www.google.com/">
                                            <span>
                                                Washington stimulates economic
                                                growth{' '}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-15-24">
                            <div className="recipes-text">
                                <a href="https://www.google.com/">
                                    <span>
                                        Washington stimulates economic growth{' '}
                                    </span>
                                    <h3>Vestibulum commodo volutpat laoreet</h3>
                                </a>
                                <p>
                                    Nunc felis. Curabitur ac ipsum. Pellentesque
                                    nibh ultricies est. Maecenas consequat,
                                    augue a venenatis risus. Ut id mollis vel,
                                    lacinia quam. Praesent blandit malesuada.
                                    Suspendisse commodo
                                </p>
                            </div>
                            <div className="recipes-footer">
                                <div className="recipes-comments">
                                    <img src={textDocument} width="12" alt="" />
                                    <a href="https://www.google.com/">
                                        <span>
                                            Washington stimulates economic
                                            growth{' '}
                                        </span>
                                        Read more
                                    </a>
                                </div>
                                <div className="recipes-comments">
                                    <img src={chatMessage} width="12" alt="" />
                                    <a href="https://www.google.com/">
                                        <span>
                                            Washington stimulates economic
                                            growth{' '}
                                        </span>
                                        0
                                    </a>
                                </div>

                                <div className="line-vertical"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row recipes-content">
                        <div className="col-xs-12 col-md-9-24">
                            <div className="recipes-img img3">
                                <a href="https://www.google.com/">
                                    <span>
                                        Washington stimulates economic growth{' '}
                                    </span>
                                </a>
                                <div className="recipes-img-links">
                                    <div className="recipes-img-find">
                                        <a href="https://www.google.com/">
                                            <span>
                                                Washington stimulates economic
                                                growth{' '}
                                            </span>
                                        </a>
                                    </div>
                                    <div className="separator"></div>
                                    <div className="recipes-img-hyperlink">
                                        <a href="https://www.google.com/">
                                            <span>
                                                Washington stimulates economic
                                                growth{' '}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-15-24">
                            <div className="recipes-text">
                                <a href="https://www.google.com/">
                                    <span>
                                        Washington stimulates economic growth{' '}
                                    </span>
                                    <h3>
                                        Quisque lorem tortor fringilla sed vesti
                                        bulum justo vel
                                    </h3>
                                </a>
                                <p>
                                    Quisque lorem tortor fringilla sed,
                                    vestibulum id, eleifend justo vella ipsum
                                    dolor lacus, suscipit adipiscing. Cum sociis
                                    natoque penatibus et ultrices volutpat.
                                </p>
                            </div>
                            <div className="recipes-footer">
                                <div className="recipes-comments">
                                    <img src={textDocument} width="12" alt="" />
                                    <a href="https://www.google.com/">
                                        <span>
                                            Washington stimulates economic
                                            growth{' '}
                                        </span>
                                        Read more
                                    </a>
                                </div>
                                <div className="recipes-comments">
                                    <img src={chatMessage} width="12" alt="" />
                                    <a href="https://www.google.com/">
                                        <span>
                                            Washington stimulates economic
                                            growth{' '}
                                        </span>
                                        0
                                    </a>
                                </div>

                                <div className="line-vertical"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row recipes-content">
                        <div className="col-xs-12 col-md-9-24">
                            <div className="recipes-img img4">
                                <a href="https://www.google.com/">
                                    <span>
                                        Washington stimulates economic growth{' '}
                                    </span>
                                </a>
                                <div className="recipes-img-links">
                                    <div className="recipes-img-find">
                                        <a href="https://www.google.com/">
                                            <span>
                                                Washington stimulates economic
                                                growth{' '}
                                            </span>
                                        </a>
                                    </div>
                                    <div className="separator"></div>
                                    <div className="recipes-img-hyperlink">
                                        <a href="https://www.google.com/">
                                            <span>
                                                Washington stimulates economic
                                                growth{' '}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-15-24">
                            <div className="recipes-text">
                                <a href="https://www.google.com/">
                                    <span>
                                        Washington stimulates economic growth{' '}
                                    </span>
                                    <h3>
                                        Vivamus sit amet metus sem imperdiet
                                    </h3>
                                </a>
                                <p>
                                    Aliquam adipiscing felis tincidunt eget,
                                    euismod pede eu cursus at, suscipit a,
                                    lorem. Morbi sodales wisi placerat eget,
                                    elementum eu, ullamcorper ac
                                </p>
                            </div>
                            <div className="recipes-footer">
                                <div className="recipes-comments">
                                    <img src={textDocument} width="12" alt="" />
                                    <a href="https://www.google.com/">
                                        <span>
                                            Washington stimulates economic
                                            growth{' '}
                                        </span>
                                        Read more
                                    </a>
                                </div>
                                <div className="recipes-comments">
                                    <img src={chatMessage} width="12" alt="" />
                                    <a href="https://www.google.com/">
                                        <span>
                                            Washington stimulates economic
                                            growth{' '}
                                        </span>
                                        0
                                    </a>
                                </div>
                                <div className="line-vertical"></div>
                            </div>
                        </div>
                    </div>
                    <div className="recipes">
                        <div className="button button_label">
                            <a href="https://www.google.com/">
                                <span>
                                    Washington stimulates economic growth{' '}
                                </span>
                                See all posts
                            </a>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row recipes-content">
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="margin">
                                <div className="container-small">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-6">
                                            <div className="tips">
                                                <div className="tips-img">
                                                    <img
                                                        src={recipesTips}
                                                        alt=""
                                                    />
                                                </div>
                                                <h3>Useful tips</h3>
                                                <ul>
                                                    <li>
                                                        Lorem ipsum dolor sit
                                                        amet, consecte cons
                                                        ectetuer
                                                    </li>
                                                    <li>
                                                        Aliquam tincidunt cons
                                                        ectetuer mauris eu risus
                                                    </li>
                                                    <li>
                                                        Vestibulum auctor dapib
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-6">
                                            <div className="about">
                                                <h3>About</h3>
                                                <h4>
                                                    Integer eleifend risus
                                                    mauris, vel interdum risus
                                                    pharetra sit amet proin id
                                                    sapien quis libero.
                                                </h4>
                                                <p>
                                                    Duis sed odio sit amet nibh
                                                    vulputate cursus a sit amet
                                                    mauris. Morbi accumsan ipsum
                                                    velit. Nam nec tellus a odio
                                                    tincidunt auctor a ornare
                                                    odio. Sed non mauris vitae
                                                    erat consequat auctor eu in
                                                    elit. className aptent
                                                    taciti sociosqu ad litora.
                                                </p>
                                                <a href="https://www.google.com/">
                                                    <span>
                                                        Washington stimulates
                                                        economic growth{' '}
                                                    </span>
                                                    Read more
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div>
                                <div className="container-small">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="gallery">
                                                <h3>Photo gallery</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row gallery-img">
                                        <div className="col-xs-12 col-sm-12 col-md-4 margin-top">
                                            <div className="gallery-img-item image1">
                                                <a href="https://www.google.com/">
                                                    <span>
                                                        Washington stimulates
                                                        economic growth{' '}
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-4 margin-top">
                                            <div className="gallery-img-item image2">
                                                <a href="https://www.google.com/">
                                                    <span>
                                                        Washington stimulates
                                                        economic growth{' '}
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-4 margin-top">
                                            <div className="gallery-img-item image3">
                                                <a href="https://www.google.com/">
                                                    <span>
                                                        Washington stimulates
                                                        economic growth{' '}
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-4 margin-top">
                                            <div className="gallery-img-item image4">
                                                <a href="https://www.google.com/">
                                                    <span>
                                                        Washington stimulates
                                                        economic growth{' '}
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-4 margin-top">
                                            <div className="gallery-img-item image5">
                                                <a href="https://www.google.com/">
                                                    <span>
                                                        Washington stimulates
                                                        economic growth{' '}
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-4 margin-top">
                                            <div className="gallery-img-item image6">
                                                <a href="https://www.google.com/">
                                                    <span>
                                                        Washington stimulates
                                                        economic growth{' '}
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-line">
                        <div className="line-top"></div>
                        <div className="line-centr"></div>
                        <div className="line-bottom"></div>
                    </div>
                </section>
                <div className="slider-slick"></div>
                <section>
                    <div className="row links-content">
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div>
                                <div className="container-small">
                                    <div className="row">
                                        <div className="col-xs-12 col-md-12">
                                            <div className="links">
                                                <h3>Useful links</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row links-img">
                                        <div className="col-xs-12 col-md-4 margin-top">
                                            <div className="links-img-item">
                                                <img src={logoFooter} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-8 margin-top">
                                            <div className="links-item-lists">
                                                <div className="links-item-list">
                                                    <ul>
                                                        <li>
                                                            <a href="https://www.google.com/">
                                                                <span>
                                                                    Washington
                                                                    stimulates
                                                                    economic
                                                                    growth{' '}
                                                                </span>
                                                                Velit mauris
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.google.com/">
                                                                <span>
                                                                    Washington
                                                                    stimulates
                                                                    economic
                                                                    growth{' '}
                                                                </span>
                                                                Entum feuis
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.google.com/">
                                                                <span>
                                                                    Washington
                                                                    stimulates
                                                                    economic
                                                                    growth{' '}
                                                                </span>
                                                                Aliquam massa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.google.com/">
                                                                <span>
                                                                    Washington
                                                                    stimulates
                                                                    economic
                                                                    growth{' '}
                                                                </span>
                                                                Egestas quam
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="links-item-list">
                                                    <ul>
                                                        <li>
                                                            <a href="https://www.google.com/">
                                                                <span>
                                                                    Washington
                                                                    stimulates
                                                                    economic
                                                                    growth{' '}
                                                                </span>
                                                                Aenean ligula
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.google.com/">
                                                                <span>
                                                                    Washington
                                                                    stimulates
                                                                    economic
                                                                    growth{' '}
                                                                </span>
                                                                Dapibus at dolor
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.google.com/">
                                                                <span>
                                                                    Washington
                                                                    stimulates
                                                                    economic
                                                                    growth{' '}
                                                                </span>
                                                                Molestie id
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.google.com/">
                                                                <span>
                                                                    Washington
                                                                    stimulates
                                                                    economic
                                                                    growth{' '}
                                                                </span>
                                                                Vestibulum
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <div className="container-small">
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <div className="info">
                                            <h3>About us</h3>
                                            <p>
                                                Vestibulum commodo et ligula
                                                volutpat a, convallis.
                                            </p>
                                            <p>
                                                Phasellus fermentum in, dolor.
                                                Pellentesque facilisis. Nulla
                                                imper diet sit amet magna.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <div className="info">
                                            <h3>Our mission</h3>
                                            <p>
                                                Curabitur et ligula. Ut molestie
                                                a, ultricies porta urna.
                                            </p>
                                            <p>
                                                Vestibulum dapibus, mauris nec
                                                fames ac turpis velit, rhoncus
                                                eu luctus et ac, laoreet enim.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Main
