import React from 'react'

const  button = ({handler, item, text}) => (
    <button onClick={(event) => {handler(item,event)}}>{text}</button>
)

export default button
