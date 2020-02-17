import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import {colors, spacing, fonts} from '../theme';
import Feature from './feature';
import Rating from './rating';
import Button from '../components/Button';

const ComingSoon = styled.li`
    display: flex;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
    background: white;
    box-sizing: border-box;
    width: 100%;
    min-height: 100px;
    border-radius: ${spacing.radius};
    margin: ${spacing.large} 0;
    padding: 20px;
    h3 {
        color: ${colors.blue};
        font-size: ${fonts.h3};
        margin: 0;
        padding: 0;
        font-weight: 400;
    }
    p {
        font-style: italic;
    }
    button {
        background: ${colors.lightBlue};
        padding: 5px 15px;
        border-radius: ${spacing.radius};
        cursor: pointer;
        border: none;
        font-weight: bold;
        font-size: 16px;
        color: ${colors.blue};
        font-family: 'Playfair Display';
        margin: auto 0 0 auto;
    
    }
`
const ShopListItem = ({
    className,
    name, rank,
    feature,
    summary,
    uid,
    rating,
    comingSoon,
    setShowSignup,
}) => {
    return !comingSoon ? (
    <li className={className} >
        <div className="ItemHeader">
            <div className="Left"><h3>{name.text}</h3><span className="Rank">{`No. ${rank}`}</span></div>
            <Feature>{feature.text}</Feature>
        </div>
        <p className="white">{summary.text}</p>
        <div className="ItemFooter">
            <Link to={`/${uid}`}>Read the full report here...</Link>
            <Rating rating={rating} isWhite/>
        </div>
    </li>) : (<ComingSoon>
                <div className="Left">
                <h3>{name.text}</h3>
                <p>Full report coming soon...</p>
                </div>
                <Button
                    onClick={() => setShowSignup(true)}
                    className="subscribe">
                        Subscribe for updates
                </Button>
             </ComingSoon>
    );
}

export default styled(ShopListItem)`
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
    box-sizing: border-box;
    width: 100%;
    background: ${colors.blue};
    min-height: 100px;
    border-radius: ${spacing.radius};
    margin: ${spacing.large} 0;
    padding: 20px;
    .white {
        font-size: 14px;
        color: white;
        font-weight: 400;
        margin-top: 0;
        max-width: 700px;
        line-height: 24px;
    }
    h3 {
        color: white;
        font-size: ${fonts.h3};
        margin: 0;
        padding: 0;
        font-weight: 400;
    }

    .Rank {
        color: ${colors.yellow};
        font-size: ${fonts.p};
    }
    .Left {
        display: flex;
        span {
            margin-bottom: 0;
            margin-top: auto;
            margin-left: ${spacing.medium};
        }
    }
    .ItemHeader {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: ${spacing.medium};
        @media(max-width:480px) {
            justify-content: flex-start;
            flex-wrap: wrap;
            span {
             margin-right: 30px;
            }
            .Left {
                margin-bottom: 15px;
            }
        }
    }
    .ItemFooter {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        @media(max-width:480px) {
            justify-content: flex-start;
            flex-wrap: wrap;
            span {
             margin-right: 30px;
            }
            .Left {
                margin-bottom: 15px;
            }
        }
    }
    .Feature {
        background-color: ${colors.lightBlue};
        padding: 3px 8px;
        font-size: 14px;
        margin: auto 0;
        border-radius: ${spacing.radius};
        color: ${colors.blue};
        font-weight: bold;
    }
    a {
        color: white;
        font-weight: 600;
        margin: auto 0;
    }
`;