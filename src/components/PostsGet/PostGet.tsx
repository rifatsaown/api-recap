import React, { useEffect, useState } from 'react';
import PostLoad from '../PostLoad/PostLoad';

const PostGet = () => {
    const [posts,setPosts]= useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div>
            {
                posts.map((post,index)=><PostLoad key={index} {...post as Object} />)
            }
        </div>
    );
};

export default PostGet;