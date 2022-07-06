/* eslint-disable no-template-curly-in-string */
import * as React from "react";
import './Form.module.css';

interface FormProps {
    [x: string]: React.ReactNode;
    theClass ?: string
}

export const Form :React.FC<FormProps> = props => {
    return (
        <form>
            <label htmlFor=""><strong>Title :</strong>  </label> 
            <input type="text" placeholder="Title"/> <br />
            <label htmlFor="" ><strong>Description :</strong></label> <br />
            <textarea name="" id="" placeholder="Description"></textarea> <br />
            <label htmlFor=""><strong> Statut :</strong> </label> 
            <label htmlFor="1">Todo
            <input type="radio" id="1" name="" value="1"></input>
            </label> 
            <label htmlFor="2">Doing
            <input type="radio" id="2" name="" value="2"></input>
            </label> 
            <label htmlFor="2">Done
            <input type="radio" id="3" name="" value="3"></input>
            </label> <br />
            <input type="button" value=" ADD" />
       
       
      </form>
    )
}
