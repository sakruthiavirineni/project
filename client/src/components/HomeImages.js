import React from 'react';
import Card from './Card';
import { Wrapper } from './homeimages.styles';
import img1 from "../img/img1.png";
import img2 from "../img/img2.webp";
import img3 from "../img/img3.avif";
import img4 from "../img/img4.avif";
import img5 from "../img/img5.webp";
import img6 from "../img/img6.webp";

import video1 from "../video/video1.mp4";
import video2 from "../video/video2.mp4";
import video3 from "../video/video3.mp4";
import video4 from "../video/video4.mp4";
import video5 from "../video/video5.mp4";
import video6 from "../video/video6.mp4";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function HomeImages(){
    return (
        <Wrapper>
            <Card logo={img1} video={video1}/>
            <Card logo={img2} video={video2}/>
            <Card logo={img3} video={video3}/>
            <Card logo={img4} video={video4}/>
            <Card logo={img5} video={video5}/>
            <Card logo={img6} video={video6}/>
        </Wrapper>
        
    );
}
export default HomeImages;