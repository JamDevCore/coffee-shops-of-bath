import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components';
import {PaperPlane} from 'styled-icons/fa-solid/PaperPlane';
import {Linkedin} from 'styled-icons/fa-brands/Linkedin'
import {FacebookSquare} from 'styled-icons/fa-brands/FacebookSquare';
import {colors, spacing} from '../theme';
import SEO from "./seo"


const Header = ({ className }) => (
    <div className={className}>
        <PaperPlane  size="30" />
        <Linkedin  size="30" />
        <FacebookSquare  size="30" />
    </div>
);

export default styled(Header)`
    width: 100%;
    height: 50px;
    background: transparent;
    svg {
        color: ${colors.blue};
        margin: ${spacing.medium};
    }
`;