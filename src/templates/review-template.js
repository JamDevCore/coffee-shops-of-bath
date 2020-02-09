import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components';
import SEO from "../components/seo"
import Header from '../components/header';
import coffee from '../images/open-doodles-coffee.png';
import {colors, spacing, fonts} from '../theme';
import background from '../images/csb_bg.png';
import {CaretDownCircle} from 'styled-icons/boxicons-solid/CaretDownCircle';
import Feature from '../components/feature';

const Hero = ({
    name,
    summary,
    feature,
}) => {
    console.log(feature)
    return (
        <div className="Hero">
        <img src={coffee} alt="Coffee Doodle" />
        <div className="HeroText">
            <p>A thorough review of</p>
            <h1>{name}</h1>
            <p>{summary}</p>
            <br />
            <Feature>{feature}</Feature>
        </div>

        <CaretDownCircle size="30" />
    </div>)
};

const ReviewTemplate = ({ className, data }) => {
    const { coffeeshop } = data.prismic;
    console.log(coffeeshop);
    return (
    <div className={className}>
        <SEO title={`A detailed review of ${coffeeshop.name[0].text}`} />
        <Header />
        <Hero
          name={coffeeshop.name[0].text}
          summary={coffeeshop.summary[0].text}
          feature={coffeeshop.key_feature[0].text}
        />
    </div>
    );
}

export default styled(ReviewTemplate)`
background-image: url(${background});
  width: 100%;
  min-height: 100vh;
  background-repeat: repeat-y;
  background-position: center top;
  font-family: ${fonts.family};
  p {
    color: ${colors.grey};
    line-height: 24px;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .Hero {
    text-align: center;
    width: 100%;
    min-height: 100vh;
    display: flex;
    margin-bottom: ${spacing.large};
    flex-direction: column;
    h1 {
      border-bottom: 3px solid ${colors.blue};
      padding-bottom: ${spacing.medium};
      margin: 0 auto ${spacing.large};
    }
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
    font-weight: bold;
  }
  h5 {
    color: ${colors.blue};
    font-weight: 700;
  }
  .HeroText {
    max-width: 480px;
    margin: 0 auto ${spacing.large};
`;

export const query = graphql`
query CoffeeShopSingleQuery($uid: String!) {
    prismic {
      coffeeshop(lang: "en-gb", uid: $uid) {
        website {
            ... on PRISMIC__ExternalLink {
              _linkType
              url
            }
          }
        venue_rating
        venue_review
        venue_key_feature
        summary
        roasters
        rating
        name
        loyalty_scheme
        has_rating
        food_review
        key_feature
        food_rating
        food_key_feature
        facebook_page {
            ... on PRISMIC__ExternalLink {
              _linkType
              url
            }
          }
        coffee_review
        address
        coffee_key_feature
        coffee_rating
        _meta {
          uid
        }
      }
    }
  }
`