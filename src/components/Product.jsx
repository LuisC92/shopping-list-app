import React from 'react'

const Product = (props) => {
    const {id, title, price, category, description, image} = props
  return (
    <div key={id}>
        <h5>{title.toUpperCase()}</h5>
        <img style={{ height: '200px', padding:"20px" }} src={image} alt={title} />
        <p>{price}</p>
        <p>{category}</p>
        {/* <p>{description}</p> */}
    </div>
  )
}

export default Product