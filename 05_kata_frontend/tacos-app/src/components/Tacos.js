import React from 'react'
import PropTypes from 'prop-types'

const Tacos = ({taco, author}) => {

    const {base_layer, mixin, condiment, seasoning, shell} = taco

    return(
        <>
        <p>{`Nombre: ${base_layer.name}`}</p>
        <p>{`Mezcla: ${mixin.name}`}</p>
        <p>{`Condimentos: ${condiment.name}`}</p>
        <p>{`Sason: ${seasoning.name}`}</p>
        <p>{`Region: ${shell.name}`}</p>
        <p>{`Autor: ${author}`}</p>
        </>
    )
}

Tacos.defaultProps = {
    author: 'Desconocido'
}

Tacos.propTypes = {
    taco: PropTypes.object.isRequired
}

export default Tacos
