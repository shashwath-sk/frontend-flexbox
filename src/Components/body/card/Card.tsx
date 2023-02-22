import * as React from 'react';
import { BlogData } from "../../../types";
import makeRequest from "../../../utils/makeRequest";
import { UPDATE_BLOG_DATA } from "../../../constants/apiEndPoints";
import { getFormattedDateFromUtcDate } from "../../../utils/common";
import clap from '../../../assets/icons/clapping.svg'
import blackHeart from '../../../assets/icons/heart-black.svg';
import redHeart from '../../../assets/icons/heart-red.svg';

interface BlogPostCardProp {
    blogData: BlogData;
  }

export default function Card( {blogData}:BlogPostCardProp){
    const [liked , setLiked] = React.useState(blogData.liked)
    const [clapCount , setClapCount] = React.useState(blogData.claps)
    const [userClapped , setUserClapped] = React.useState(false)
    let heartImage = liked ? redHeart:blackHeart;

    const handleLikeClick = async () => {
        setLiked(!userClapped)
        try {
            await makeRequest(UPDATE_BLOG_DATA(blogData.id), {
            data: { liked: !liked },
            });
            setLiked(!liked);
            heartImage = liked ? './Icons/heart-red.svg' : './Icons/heart-black.svg';
        }    
        catch (e) {
            console.log("heart click functionality is not handled properly");
        }
    };

    const handleClapClick = async()=>{
        setUserClapped(!userClapped)
        try{
            await makeRequest(UPDATE_BLOG_DATA(blogData.id), {
            data: {claps : clapCount + 1},
            });
            setClapCount(clapCount + 1);
        }
        catch(e){
            console.log("clap click functionality is not handled properly");
        }
    };
    return(
        <div className="box">
            <div className="image">
                <img  src = {blogData.image} alt="abstract"/>
            </div>
            <div className="image-padding ">
                <div className="image-post-details image-margin">
                {getFormattedDateFromUtcDate(blogData.date)}
                </div>
                <div className="image-header image-margin">
                    <span>{blogData.title}</span>
                </div>
                <div className="image-description image-margin">
                    <span>{blogData.description}</span>
                </div>
                <hr className="image-margin"/>
                <div className="image-like image-margin">
                    <img src={clap} alt="clap-icon" onClick={handleClapClick}/>
                    <span>{clapCount}</span>
                    <img src={heartImage} alt="heart-icon" onClick= {handleLikeClick}/>
                </div>
            </div>
        </div>
    )
}
