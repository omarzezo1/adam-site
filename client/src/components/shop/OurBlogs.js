import React from 'react'
import { Link } from 'react-router-dom'
import Blog1 from '../../images/imgs/blog-thumb-01.jpg'
import Blog2 from '../../images/imgs/blog-thumb-02.jpg'
import Blog3 from '../../images/imgs/blog-thumb-03.jpg'
// import axios from 'axios'
// import { useState, useEffect } from 'react'

const OurBlogs = () => {
    // const [posts, setPosts] = useState([])

    // const getPosts = async()=>{
    //     try{
    //         const postsData = await axios.get('http://localhost/dashboard/wordpress/wp-json/wp/v2/posts')
    //         setPosts(postsData)
    //     }catch(e){
    
    //     }
    // }

    // useEffect(()=>{
    //     getPosts()
    // },[])


  return (
    <section className='our-blogs'>
        <div className='section-title'>
            <h2>READ BLOG ARTICLE</h2>
        </div>
        <div className='our-blogs-container'>
            <article className='article'>
                <div className='art-img'>
                <Link to="/blogs/blog">
                    <img src={Blog1} alt=''/>
                </Link>
                </div>
                <div className='art-details'>
                    <h3 className='art-title'><Link to="">HOW MUCH DO EAT YOU REALLY NEED SUPPLEMENTS</Link></h3>
                </div>
            </article>

            <article className='article'>
                <div className='art-img'>
                <Link to="/blogs/blog">
                    <img src={Blog2} alt=''/>
                </Link>
                </div>
                <div className='art-details'>
                    <h3 className='art-title'><Link to="">HOW MUCH DO EAT YOU REALLY NEED SUPPLEMENTS</Link></h3>
                </div>
            </article>

            <article className='article'>
                <div className='art-img'>
                <Link to="/blogs/blog">
                    <img src={Blog3} alt=''/>
                </Link>
                </div>
                <div className='art-details'>
                    <h3 className='art-title'><Link to="">HOW MUCH DO EAT YOU REALLY NEED SUPPLEMENTS</Link></h3>
                </div>
            </article>
        </div>
    </section>
  )
}

export default OurBlogs