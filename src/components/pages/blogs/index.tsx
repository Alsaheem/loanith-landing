import React, { useEffect, useState } from 'react';
import Blog from './component/blog';
import './blogs.css';
import { Blogpost } from './api';


const Blogs = () => {
    const [data, setData] = useState<any>({});

    useEffect(() => {

    }, [])

    const fetchPostFromWP = async () => {
        const posts = await Blogpost()
        setData(posts)
        if(Object.keys(data).length > 0){
            
            data.map((result: any) => {
                let img = '_embedded.wp:featuredmedia[0]'
               console.log(result.excerpt.rendered);
               console.log(result.title.rendered);
               console.log(result.link);
               

            })
        }
        if(data){ 
            console.log(data)
        }
        

   
    }
    fetchPostFromWP();
    return (
        <div className="blog-wrapper">
          <div className="banner-contact">
                {/* <img src="./assets/contact.png" height={200} width={'100%'}loading="lazy"/> */}
            </div>
        {
            Object.keys(data).length > 0 ? data.map((result : any) => (
              <Blog title={result.title.rendered} image={'result._embedded[\'wp:featuredmedia\'][0].source_url'} exerpts={result.excerpt.rendered} link={result.link} key={result.title.rendered}/>
            ))
        : <h6>No Blog Post Yet </h6>
        }
            
        </div>)
}

export default Blogs;