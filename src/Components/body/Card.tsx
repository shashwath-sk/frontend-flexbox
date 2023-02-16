import * as React from 'react';
import image from '../../Image/abstract.png';
interface prototype{
    blog : {
        date: string;
    readingTime: string;
    title: string;
    description: string;
    claps: number;
    liked: boolean;
    image: string;
    }
}

export default function Card( props:prototype){
    const imageUrl = `./Image/${props.blog.image}`
    const [liked , setLiked] = React.useState(props.blog.liked)
    const [clapCount , setClapCount] = React.useState(props.blog.claps+1)
    const [userClapped , setuserClapped] = React.useState(false)
    let heartImage = liked ? './Icons/heart-red.svg' : './Icons/heart-black.svg';
    React.useEffect(()=>{
         heartImage = liked ? './Icons/heart-red.svg' : './Icons/heart-black.svg';
    },[liked])

    React.useEffect(()=>{
        setClapCount( userClapped?clapCount+1:clapCount-1)
   },[userClapped])

    return(
        <div className="box">
            <div className="image">
                <img  src = {imageUrl} alt="abstract"/>
            </div>
            <div className="image-padding ">
                <div className="image-post-details image-margin">
                    <span>{props.blog.date}</span>
                    <span>{props.blog.readingTime}</span>
                </div>
                <div className="image-header image-margin">
                    <span>{props.blog.title}</span>
                </div>
                <div className="image-description image-margin">
                    <span>{props.blog.description}</span>
                </div>
                <hr className="image-margin"/>
                <div className="image-like image-margin">
                    <img src="./Icons/clapping.svg" alt="" onClick={()=>{setuserClapped(!userClapped)}}/>
                    <span>{clapCount}</span>
                    <img src={heartImage}  onClick= {()=> setLiked(!liked)} alt=""/>
                </div>
            </div>
        </div>
    )
}
