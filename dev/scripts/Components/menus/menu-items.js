import React from 'react';
import SocialNav from '../Navs/socialMediaNav';

const MenuItem = (props) => {
    return ( 
        <li id = {props.listId} className = {props.listClass}> 

            {props.button ? <button id={props.buttonId} onClick = {props.onClick}>{props.button}</button> : ''}

            {props.image ? <img src = {props.image}/> : ''}

            {props.icon ? <i className = {props.icon}></i> : ''}

            {props.h1 ? <h1>{props.h1}</h1> : ''}

            {props.h2 ? <h2>{props.h2}</h2> : ''}

            {props.h3 ? <h3>{props.h3}</h3> : ''}

            {props.h4 ? <h4>{props.h4}</h4> : ''}

            {props.h5 ? <h5>{props.h5}</h5> : ''}

            {props.h6 ? <h6>{props.h6}</h6> : ''}

            {props.form ? <form>
                <label htmlFor = {props.inputId} className = "visuallyhidden"></label>
                <input type = 'email' id={props.inputId} placeholder={props.placeholder}/> 
                <input type = 'submit' value = {props.submit}/>
                </form> :''}

            {props.p ? <p>{props.p}</p> : ''}

            {props.a ? <a href={props.href}>{props.a}</a> : ''}

            {props.socials ? <SocialNav socialMedias = {props.socials} /> : ''}
            
            {props.tweet ? <ul className = 'tweet-container'>
                {props.tweet ? props.tweet.map((items, i) => {
                    return <li key = {i}>
                            <p>{items.text} <a href={items.ahref} >{items.href}</a></p>
                                <div>
                                    <i className = "fab fa-twitter"></i>
                                    <p>{items.tweetName}</p>
                                    <p>{items.tweetDate}</p>
                                </div>
                            </li>; 
                }) : '' }
            </ul> : ''}
           
        </li>
    )
}

export default MenuItem;