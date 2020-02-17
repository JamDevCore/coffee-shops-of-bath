import React from "react"
import styled from 'styled-components';
import {Star} from 'styled-icons/fa-solid/Star';
import {StarHalf} from 'styled-icons/fa-solid/StarHalf';
import {colors, spacing } from '../theme';

const Rating = ({
    className,
    rating,
    isWhite,
    noText,
}) => {
    const stars = [];
    for(let i = 0; i < rating; i += 0.5) {
        stars.push(1);
    };
    return (
<div className={className}>
    {!noText && <p className={`text ${isWhite ? 'text-white' : 'text-blue'}`}>Overall rating:</p>}
    {stars.map((star, index) => {
        if((index + 1) % 2 === 0) return <Star key={`${index} - ${star}`} size="20"/>;
        return index === stars.length - 1 ? <StarHalf key={`${index} - ${star}`} size="20" /> : null;
    })}
</div>)
};

export default styled(Rating)`
display: flex;
.text-white {
    color: white;
}
.text-blue {
    color: ${colors.blue};
}
.text {

    margin-right: ${spacing.medium};
}
svg {
    color: ${colors.yellow} !important;
    margin: auto 5px !important;
}
`;