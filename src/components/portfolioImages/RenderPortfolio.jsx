import { Image, Video } from 'cloudinary-react'
import React, { useEffect, useState } from 'react'
import { portfolioImages } from '../../image'
import { Link} from 'react-router-dom'
import "./portfolio.css"

const RenderPortfolio = () => {
    const cloudName = 'dyzydm9nl'
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
      window.scrollTo(0,0)
      
    },[])

  return (
    <div className='renderPortfolio'>
      <div className="container">
        {portfolioImages.videos.map(video => video.id === '162' &&
          <div className="video-container">
            <video controls poster={video.poster}>
              <source src={video.image} alt='footlocker'/>
            </video>
          </div>
        )}
        {portfolioImages.videos.map(video => video.id === '161' &&
          <div className="video-container">
            <video controls poster={video.poster}>
              <source src={video.image} alt='footlocker'/>
            </video>
          </div>
        )}
        {portfolioImages.videos.map(video => video.id === '160' &&
          <div className="video-container">
            <video controls poster='https://res.cloudinary.com/dyzydm9nl/image/upload/v1702137598/juwan/IMG_4823_jsnlln.jpg'>
              <source src={video.image} alt='footlocker'/>
            </video>
          </div>
        )}
        {
          portfolioImages.images.map(image => 
            <Link key={image.id} to={`/${image.id}`}>
              <Image 
                className="img" 
                cloudName={cloudName} 
                publicId={image.image}
              />    
            </Link>
          )
        } 
        {
          portfolioImages.videos.filter( video => video.id !== '160' && video.id !== '161' && video.id !== '162').map( video =>
            <div key={video.id} className="video-container">
              <video 
                className='portfolio-video'
                controls
              >
                <source src={video.image} alt='footlocker'/>
                <img src={video.image} alt="footlocker" />
              </video>
            </div>
          )
        }
      </div>
      <div className='footer_text'>
        <h1>Creativity</h1>
        <p>/krea-tive-ti/ - noun</p>
        <hr />
        <p>
          When imagination has no limitations. Fueled by passion.
          <br />
          As Einstien said, creativity is intelligence having fun.
        </p>
      </div>
    </div>
  )
}

export default RenderPortfolio