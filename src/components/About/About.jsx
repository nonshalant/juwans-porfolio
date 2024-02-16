import { Image } from 'cloudinary-react'
import React, { useEffect } from 'react'
import { portfolioImages } from '../../image'
import './about.css'
import { useMediaQuery } from 'react-responsive'

const About = () => {
    const cloudName = 'dyzydm9nl'
    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1223px)',
      });
    
      const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
      });
    

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

  return (
    <div className='about'>
        <div className="about_container">
            <h1>Juwan Dinkins</h1>
            {
                portfolioImages.aboutImages.filter(image => image.id === "17").map(image =>
                    <div className='image_container'>
                        <Image cloudName={cloudName} publicId={image.image}/>
                    </div>
                )
            }
            {
                isMobile || isTablet ?
                <>
                    <div className="blurb">
                        <p>As an experieced Creative Manager, I excel in exceeding revenue goals and fostering innovative sales and marketing strategies to stay ahead of the competition. With a proven track record, I have consistently delivered outstanding results, such as achieving a remarkable 35.34% increase in retail turnover through groundbreaking campaign platforms. My strategic vision and holistic creative approach have not only contributed to over $6.6 million in sales, fostering a 10.09% growth in 2022, but have also played a pivotal role in overseeing content creation for major brands, resulting in a substantial 16.97% annual gross margin increase.</p>
                    </div>
                    <div className="extras_container">
                        {
                            portfolioImages.aboutImages.filter(image => image.id !== "17").map(image => 
                            <div className="extras">
                                <Image cloudName={cloudName} publicId={image.image} />
                            </div>)
                        }
                    </div>
                    <div className="blurb">
                        <p>Leveraging my expertise, I successfully managed TikTok creative content strategy, elevating account followers to 1.5 million in just nine months. In addition to my quantitative achievements, I am adept at building a nd managing relationships with agency and client partners, scheduling impactful in person meetings, and serving as a resource for partners, offering solutions that address their business challenges.</p> 
                        <p className='blurb-email'>For all inquiries please email <a target='_blank' href="mailto:JuwansPov@Gmail.com">JuwansPov@Gmail.com</a> </p>
                    </div>
                </>
                :
                <div className='flex-about'>
                    <div className="blurb">
                        <p>As an experieced Creative Manager, I excel in exceeding revenue goals and fostering innovative sales and marketing strategies to stay ahead of the competition. With a proven track record, I have consistently delivered outstanding results, such as achieving a remarkable 35.34% increase in retail turnover through groundbreaking campaign platforms. My strategic vision and holistic creative approach have not only contributed to over $6.6 million in sales, fostering a 10.09% growth in 2022, but have also played a pivotal role in overseeing content creation for major brands, resulting in a substantial 16.97% annual gross margin increase. Leveraging my expertise, I successfully managed TikTok creative content strategy, elevating account followers to 1.5 million in just nine months. In addition to my quantitative achievements, I am adept at building a nd managing relationships with agency and client partners, scheduling impactful in person meetings, and serving as a resource for partners, offering solutions that address their business challenges.</p>
                        <br />
                        <p>For all inquiries please email <a target='_blank' href="mailto:JuwansPov@Gmail.com">JuwansPov@Gmail.com</a> </p>
                        <p>© 2022</p>
                    </div>
                    <div className="extras_container">
                        {
                            portfolioImages.aboutImages.filter(image => image.id !== "17").map(image => 
                            <div className="extras">
                                <Image cloudName={cloudName} publicId={image.image} />
                            </div>
                        )
                        }
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default About