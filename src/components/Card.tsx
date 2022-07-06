/* eslint-disable no-template-curly-in-string */
import * as React from "react";
import './Card.module.css';

interface CardProps {
    [x: string]: React.ReactNode;
    theClass : string
}

export const Card :React.FC<CardProps> = props => {
    return (
        
        <div className={'Card ${props.theClass}'}>
            <h3>
            <ul>
                <li>TODO 
                    <p></p>
                    <p></p>
                    <p></p>
                </li>
                    
                <li>DOING 
                    <p></p>
                    <p></p>
                    <p></p>
                </li>
                <li>DONE
                    <p></p>
                    <p></p>
                    <p></p>
                </li>
            </ul>
            </h3>
            
        </div>
    )
}
