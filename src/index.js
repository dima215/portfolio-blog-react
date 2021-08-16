import React from 'react'
import ReactDom from 'react-dom'

const App = () => {
    return (
        <div>
            <p>Hello World</p>
        </div>
    )
}

ReactDom.render(<App />, document.getElementById('root'))
