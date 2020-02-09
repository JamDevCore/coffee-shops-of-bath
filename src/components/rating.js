import React from "react"
import styled from 'styled-components';
import {Star} from 'styled-icons/fa-solid/Star';
import {StarHalf} from 'styled-icons/fa-solid/StarHalf';
import {colors, spacing, fonts} from '../theme';

const Rating = ({
    className,
    rating,
}) => {
    const stars = [];
    for(let i = 0; i < rating; i += 0.5) {
        stars.push(1);
    };
    return (
<div className={className}>
    <p className="text">Overall rating:</p>
    {stars.map((star, index) => {
        console.log(stars.length -1 === index, index % 2 === 0)
        if((index + 1) % 2 === 0) return <Star size="20"/>;
        return index === stars.length - 1 ? <StarHalf size="20" /> : null;
    })}
</div>)
};

export default styled(Rating)`
display: flex;
.text {
    color: white;
    margin-right: ${spacing.medium};
}
`;