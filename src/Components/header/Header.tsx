import * as React from 'react';

export default function Header(){
    return(
        <div className="header paddingBody">
            <div className="title">
                <h1>The Artifact</h1>
            </div>
            <div className="subTitle">
                <h3>Culture & Art blog</h3>
            </div>
            <div className="nav">
                <a href="">Blog</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
         </div>
    )
}
