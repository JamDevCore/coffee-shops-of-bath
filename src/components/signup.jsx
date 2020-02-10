import React, { useState, useEffect } from "react"
import styled from 'styled-components';
import {Times} from 'styled-icons/fa-solid/Times';
import {colors, spacing} from '../theme';
import sendToAirtable from '../modules/send-to-airtable';

const isBrowser = () => typeof window !== 'undefined' && window;

const Signup = ({ className, showByDefault, revealBar, stopRevealBar }) => {
    const [isHidden, updateIsHidden] = useState(true);
    const [isClosed, setIsClosed] = useState(false);
    useEffect(() => {
        console.log('working1')
      })
    const submitForm = (e) => {
        e.preventDefault();
        const email = document.querySelector('[name="email"]').value;
        if(email) {
            sendToAirtable({
                fields: { email },
                airBase: 'appL54UW2jm7wOYzl',
                table: 'Emails',
            })
            .then(res => {
                localStorage.setItem('csb-newsletter-signup', email);
                setIsClosed(true);
                stopRevealBar(false);
                updateIsHidden(true);
                return isBrowser() ? window.onscroll = undefined : null;
            })
            .catch(err =>  console.log(err))
        }
    }
    return !isHidden ? (
        <div className={className}>
            <button className="close" onClick={() => {
                setIsClosed(true);
                stopRevealBar(false);
                updateIsHidden(true);
                return isBrowser ? window.onscroll = undefined : null;
            }}><Times size="15" /></button>
            <div className="signup-text">
                <p>
                  If you’ve enjoyed this content, join my newsletter to get upcoming posts straight to your inbox,
                  I write about coffee, baking, leathercraft & web development.
                </p> 
            </div>
            <div className="signup-form">
                <form onSubmit={(e) => submitForm(e)}>
                    <input name="email" placeholder="Your email address..."/>
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
    ) : null;
}

export default styled(Signup)`

    width: 100vw;
    box-shadow: 0 2px 4px rgba(0,0,0,0.5);
    position: fixed;
    bottom: 0;
    left: 0;
    height: 130px;
    background-color: ${colors.lightBlue};
    padding: ${spacing.medium};
    display: flex;
    box-sizing: border-box;
    @media(max-width: 768px) {
        height: 170px;
        .signup-text {
            width: 100%;
            p {
                font-size: 12px;
            }
        }
        .signup-form {
            width: 100%;
            form {
                width: 100%;
            }
        }
        flex-direction: column;
        > div {
            width: 100%;
            min-width: 100px;
            margin: 0 auto;
        }
    }
    > div {
        width: 50%;
        min-width: 300px;
        margin: auto 0;

    }
    .signup-text {
        p {
            color: ${colors.blue};
            text-align:center;
        }
    }
    form {
        width: 80%;
        height: 40px;
        display: flex;
        margin: 0 auto;
        padding: 0;
        input {
            width: 70%;
            height: 100%;
            border: none;
            padding: 0 10px;
            font-family: 'Playfair Display';
            font-size: 16px;
        }
        button {
            cursor: pointer;
            width: 30%;
            border: 2px solid ${colors.green};
            border: none;
            height: 100%;
            margin: 0;
            background: ${colors.green};
            font-family: 'Playfair Display';
            font-size: 16px;
            font-weight: bold;
            color: white;
        }
    }
    .close {
        position: absolute;
        right: 20px;
        color: ${colors.grey};
        border: none;
        background: 0;
        cursor:pointer;
    }
`;