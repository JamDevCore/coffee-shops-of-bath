import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components';
import {colors, spacing, fonts} from '../theme';
import {Star} from 'styled-icons/fa-solid/Star';
import {StarHalf} from 'styled-icons/fa-solid/StarHalf';

const ShopListItem = ({
    className,
    name, rank,
    feature,
    summary,
    uid,
    rating,
}) => {
console.log(rating)
    const stars = [];
    for(let i = 0; i < rating; i += 1) {
        stars.push(1);
    };
    console.log(stars)
    return (
    <li className={className}>
        <div className="ItemHeader">
            <div className="Left"><h3>{name.text}</h3><span className="Rank">{`No. ${rank}`}</span></div>
            <span className="Feature">{feature.text}</span>
        </div>
        <p className="white">{summary.text}</p>
        <div className="ItemFooter">
            <Link to={`/${uid}`}>Read the full report here...</Link>
            <div className="Rating">
                <p>Overall rating:</p>
                {stars.map((star, index) => {
                    return index === stars.length && star.length % 2 !== 0 ? <StarHalf size="20" /> : <Star size="20"/>
                })}
            </div>
        </div>
    </li>
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
        font-sizeL 14px;
        color: white;
        font-weight: 400;
        max-width: 70%;
        line-height: 24px;
    }
    h3 {
        color: white;
        font-size: ${fonts.h3};
        margin: 0;
        padding: 0;
        font-weight: 400;
    }
    .Rating {
        display: flex;
        p {
            color: white;
            margin-right: ${spacing.medium};
        }
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
        margin-bottom: ${spacing.large};
    }
    .ItemFooter {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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
    svg {
        color: ${colors.yellow};
        margin: auto 5px;
    }
`;