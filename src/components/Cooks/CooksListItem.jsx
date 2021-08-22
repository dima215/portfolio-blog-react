import React from 'react'

const CooksListItem = (props) => {
    return (
        <>
            <div className="col-xs-12 col-md-3">
                <div className="cook-item">
                    <div
                        className={props.class} //"cook-item-img">
                    >
                        <a href=""></a>
                        <div className="cook-item-line"></div>
                    </div>

                    <div className="cook-item-name">
                        <h4>{props.name}</h4>
                    </div>
                    <div className="cook-item-about">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CooksListItem
