import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Youtube = () => {
    const socialButtons =[
        {
            url:'https://www.youtube.com/@techflix5144',
            network:'youtube'
        },
        {
            url:'https://www.instagram.com/techflix.ai/',
            network:'instagram'
        },
        {
            url:'https://www.linkedin.com/company/techflixx/',
            network:'linkedin'
        },
        {
            url:'https://twitter.com/techflixx',
            network:'twitter'
        },
        {
            url:'https://www.facebook.com/profile.php?id=100089679405378',
            network:'facebook'
        },
        {
            url:'https://in.pinterest.com/techflixxx/',
            network:'pinterest'
        },
        {
            url:'https://www.reddit.com/user/Techflix123',
            network:'reddit'
        },
    ]
  return (
    <div className='youtube'>
     <div className="heading">
     <h1 style={{color:'#fff'}}>
        CONNECT WITH US
      </h1>
        </div>
        <div className="shareButtons">
            {

                socialButtons.map((item,index)=>{
                    return<><SocialIcon url={item.url} network={item.network} key={index} style={{margin:'10px'}}/> </>
                })
            }
        
       
    
        </div>
        
        </div>
  )
}

export default Youtube