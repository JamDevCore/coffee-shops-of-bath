import React from "react"
import { Link } from 'gatsby';
import styled from 'styled-components';
import {PaperPlane} from 'styled-icons/fa-solid/PaperPlane';
import {Linkedin} from 'styled-icons/fa-brands/Linkedin'
import {FacebookSquare} from 'styled-icons/fa-brands/FacebookSquare';
import {Home} from 'styled-icons/boxicons-solid/Home';
import {colors, spacing} from '../theme';

const Header = ({ className }) => (
    <div className={className}>
        <a href="mailto:jamesvitaly1993@gmail.com"><PaperPlane  size="30" /></a>
        <a href="https://www.linkedin.com/in/james-vitaly-harding"><Linkedin  size="30" /></a>
        <Link className="home"><Home size="30"/></Link>
    </div>
);

export default styled(Header)`
    width: 100%;
    display: flex;
    width: 100%;
    height: 50px;
    background: transparent;
    svg {
        color: ${colors.blue};
        margin: ${spacing.medium};
    }
    .home {
        margin-right: 20px;
        margin-left: auto;
        text-decoration: none;
        color: ${colors.blue};
    }
`;