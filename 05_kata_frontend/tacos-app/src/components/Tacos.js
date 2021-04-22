import React from 'react'

const Tacos = ({taco}) => {

    return(
        <>
        <p>
            {taco.base_layer.name}
        </p>
        </>
    )
}
export default Tacos