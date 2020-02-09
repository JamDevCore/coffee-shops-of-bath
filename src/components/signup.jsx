import React, { useState, useEffect } from "react"
import { Link } from 'gatsby';
import styled from 'styled-components';
import {Times} from 'styled-icons/fa-solid/Times';
import {Linkedin} from 'styled-icons/fa-brands/Linkedin'
import {FacebookSquare} from 'styled-icons/fa-brands/FacebookSquare';
import {Home} from 'styled-icons/boxicons-solid/Home';
import {colors, spacing} from '../theme';

const isBrowser = () => typeof window !== 'undefined';

const Signup = ({ className, showByDefault, revealBar, stopRevealBar }) => {
    const [isHidden, updateIsHidden] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    useEffect(() => {
        const toggleBar = () => {
            if ((document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) && !isClosed) {
                updateIsHidden(false);
            } else {
                 updateIsHidden(true);
            }
        }
        if(revealBar) updateIsHidden(false);
        if(isBrowser && !isClosed && showByDefault)  {
            const user = localStorage.getItem("csb-newsletter-signup");
            if(user) return;
            window.addEventListener("scroll", toggleBar);
        } else {
            window.removeEventListener("scroll", toggleBar);
        }
        return () => window.removeEventListener("scroll", toggleBar);
    })
    return !isHidden ? (
        <div className={className}>
            <button className="close" onClick={() => {
                console.log('here')
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
                <form>
                    <input placeholder="Your email address..."/>
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
    flex-wrap: wrap;
    box-sizing: border-box;
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