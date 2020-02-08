import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components';
import SEO from "../components/seo"
import Header from '../components/header';
import background from '../images/csb_bg.png';
import coffee from '../images/open-doodles-coffee.png';
import {colors, spacing, fonts} from '../theme';
import {CaretDownCircle} from 'styled-icons/boxicons-solid/CaretDownCircle';


const Hero = ({ className }) => (
  <div className="Hero">
    <img src={coffee} alt="Coffee Doodle" />
    <div className="HeroText">
      <p>An enthusiasts guide to</p>
      <h1>The Coffee Shops of Bath</h1>
      <p> Discover the best coffee shops in Bath. Read in (obsessive) detail
          about their quirks and charms, and ultimately where to get the best cup.
          Written by a Bath local who spends way too much time (and money) 
          on the good stuff.</p>
    </div>
    <h5>Read on to find the best cup of coffee</h5>
    <CaretDownCircle size="30" />
 </div>
);


const IndexPage = ({ className }) => (
    <div className={className}>
      <SEO title="Coffee shops of Bath" />
      <Header />
      <Hero></Hero>
   </div>
);

export default styled(IndexPage)`
  background-image: url(${background});
  width: 100%;
  min-height: 100vh;
  background-repeat: repeat-y;
  background-position: center top;
  font-family: ${fonts.family};
  .Hero {
    text-align: center;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
      img {
        margin: 30px auto 20px;
        width: 180px;
      }
      svg {
        color: ${colors.blue};
        text-align: center;
        margin: 0 auto;
      }
  }
  h1 {
    font-size: ${fonts.h1};
    margin: 0;
    color: ${colors.blue};
    border-bottom: 3px solid ${colors.blue};
    padding-bottom: ${spacing.medium};
    margin: 0 auto ${spacing.large};
    font-weight: bold;
  }
  h5 {
    color: ${colors.blue};
    font-weight: 700;
  }
  p {
    margin: ${spacing.medium} 0 0;
    color: ${colors.grey};
    font-size: ${fonts.p};

    line-height: 24px;
  }
  .HeroText {
    max-width: 480px;
    margin: 0 auto ${spacing.large};
  }

`
