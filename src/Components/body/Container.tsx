import * as React from 'react';
import blogs from '../../mockData/index.json'
import Card from './Card';

interface blogType{
    date: string;
    readingTime: string;
    title: string;
    description: string;
    claps: number;
    liked: boolean;
    image: string;
}
export default function Contianer() : JSX.Element{
    return(
        <div className="blogs paddingBody">
            {
                blogs.map((blog:blogType)=>{
                    return(
                        <div>
                            <Card blog = {blog} />
                        </div>

                    )
                })
            }
        </div>
    )
}
