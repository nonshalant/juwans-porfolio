import { Image } from 'cloudinary-react'
import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { portfolioImages } from '../../image'
import './modal.css'

const Modal = () => {
    const cloudName = 'dyzydm9nl'
    const {imageId} = useParams()

    useEffect(()=>{
      window.scrollTo(0,0)
  },[])

  return (
    <div className='modal'>
        {
          portfolioImages.images.filter(image => imageId === image.id).map(image => 
            <div key={image.id} className='modal_container'>
                <h1>Creative Lead on set</h1>
                <Image 
                    cloudName={cloudName} 
                    publicId={image.image}
                />
                  <Link to='/'>Back</Link>
            </div>
          )
        }
    </div>
  )
}

export default Modal