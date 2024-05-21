import React from 'react'

const WomenCollecctions = (props) => {

    const {title,image1,image2,image3,image4,image5,image6,image7,image8}=props.ladies;
  return (
    <div className='womencollectionsection'>
        <div className="ladiesbannerbox">
        <img src="assets/images/LadiesBanner.gif" alt='banner'></img>
      </div>
      <h2>{title}</h2>
      <div className='menImages'>
      <img src={image1}/>
        <img src={image2}/>
        <img src={image3}/>
        <img src={image4}/>
        <img src={image5}/>
        <img src={image6}/>
        <img src={image7}/>
        <img src={image8}/>
      </div>
    </div>
  )
}

export default WomenCollecctions
