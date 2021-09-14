import React from 'react'
import './ShashlikPage.css'
import subheader from '../../../assets/home_recipes_subheader2.jpg'
import stripes from '../../../assets/stripes_5_b.png'
import blog from '../../../assets/home_recipes_blog7.jpg'
import search from '../../../assets/search.svg'

const ShashlikPage = () => {
    const subheaderStyle = {
        backgroundImage: 'url(' + subheader + ')',
    }
    const navigateStyle = {
        backgroundImage: 'url(' + stripes + ')',
    }
    const recipesBgImageStyle = {
        backgroundImage: 'url(' + blog + ')',
    }
    const gotoStyle = {
        backgroundImage: 'url(' + search + ')',
    }

    return (
        <>
            <section className="negative-margin">
                <div className="subheader" style={subheaderStyle}>
                    <h1 className="title">
                        Proin dui sodales imperdi sit sapien fames ac luctus
                    </h1>
                </div>
            </section>
            <section className="negative-margin content">
                <div className="navigate" style={navigateStyle}>
                    <button className="btn-kub btn-left">&lt;</button>
                    <button className="btn-kub btn-right">&gt;</button>
                    <a className="all" href="#">
                        Show all
                    </a>
                </div>
            </section>
            <section className="negative-margin">
                <div className="padding-top-bottom">
                    <div className="recipes-bg-img" style={recipesBgImageStyle}>
                        <a href="#"></a>
                        <div
                            className="recipes-img-links goto"
                            style={gotoStyle}
                        >
                            <a href="#"></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="negative-margin">
                <div className="padding-top-bottom content">
                    <h5>
                        Praesent consequat. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                        Vestibulum massa dui sed nulla ut nulla a mi. Fusce wisi
                        nibh malesuada aliquet, lacus vitae mauris. Nam sit amet
                        justo. Vestibulum ante ipsum eleifend adipiscing elit.
                        Mauris viverra nunc.
                    </h5>
                    <p>
                        Maecenas tincidunt. Aliquam semper. Sed eget nisl.
                        Aenean gravida vitae, consequat lorem fermentum rutrum.
                        Nunc id risus. Donec ullamcorper convallis. Donec urna
                        quis sollicitudin mi eget ipsum adipiscing non, iaculis
                        scelerisque. Duis sodales at, elit. Sed dignissim justo.
                        Suspendisse fermentum erat. Duis consequat tortor.
                        Mauris ut tellus a dolor. Suspendisse nec tellus.
                    </p>
                    <div className="blockquote">
                        <blockquote>
                            Praesent dapibus, neque id cursus faucibus, tortor
                            neque egestas augue, eu vulputate magna eros eu
                            erat. Vitae adipiscing turpis. Aenean ligula nibh,
                            molestie id viverra a, dapibus at dolor. In iaculis
                            viverra neque, ac eleifend ante lobortis id. In
                            viverra ipsum …
                        </blockquote>
                    </div>
                    <p>
                        Pellentesque suscipit urna mauris, interdum dapibus ac,
                        rhoncus purus, dictum a, euismod id, felis. Fusce
                        blandit eu, ullamcorper in, iaculis et, ultricies
                        lobortis velit. Mauris imperdiet, urna mi, gravida
                        sodales. Vivamus hendrerit nulla erat ornare tortor in
                        vestibulum id, eleifend neque odio fermentum vel,
                        consectetuer at, imperdiet sapien. Donec blandit, dui eu
                        diam. In gravida ornare. Nullam accumsan. In hac
                        habitasse platea dictumst. Praesent feugiat. Cum sociis
                        natoque.
                    </p>
                    <ul className="list_mixed">
                        <li className="list_check">
                            Suspendisse a pellentesque dui, non felis.
                        </li>
                        <li className="list_star">
                            Quisque lorem tortor fringilla sed.
                        </li>
                        <li className="list_idea">
                            Quisque cursus et, porttitor risus.
                        </li>
                        <li className="list_check">
                            Nulla ipsum dolor lacus, suscipit adipiscing.
                        </li>
                    </ul>
                    <p>
                        Sed dignissim justo. Suspendisse fermentum erat. Duis
                        consequat tortor. Mauris ut tellus a dolor. Suspendisse
                        nec tellus. Donec quis lacus magna, sollicitudin id,
                        turpis. Mauris in velit vel sollicitudin justo. Proin
                        vitae massa nec cursus magna.
                    </p>
                </div>
            </section>
        </>
    )
}

export default ShashlikPage
