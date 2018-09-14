import Hello from './hello.jsx'
import React from 'react'
import ReactDOM from 'react-dom'

document.getElementById('trigger').onclick = function () {
    ReactDOM.render(
        <Hello/>,
        window.parent.document.getElementById('main')
    )
}



