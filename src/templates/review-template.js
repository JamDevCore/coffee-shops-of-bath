import React, {useEffect} from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components';
import SEO from "../components/seo"
import Header from '../components/header';
import coffee from '../images/open-doodles-coffee.png';
import {colors, spacing, fonts} from '../theme';
import background from '../images/csb_bg.png';
import {CaretDownCircle} from 'styled-icons/boxicons-solid/CaretDownCircle';
import {Coffee} from 'styled-icons/fa-solid/Coffee';
import {FacebookSquare} from 'styled-icons/fa-brands/FacebookSquare';
import {Building} from 'styled-icons/fa-solid/Building';
import {Cake3} from 'styled-icons/remix-fill/Cake3';
import Feature from '../components/feature';
import Rating from '../components/rating';
import Signup from '../components/signup';
import reading from '../images/open-doodles-reading-side.png';

const Selector = styled.section`
max-width: 1100px;
margin: 0 auto;
display: flex;
padding: 0;
justify-content: space-between;
flex-wrap: wrap;
flex-direction: row;
@media(max-width: 998px) {
    justify-content: center;
    flex-direction: column;
}
a {
    text-decoration: none;
}
.SelectorBox {
    cursor: pointer;
    width: 230px;
    margin: ${spacing.medium} ${spacing.large};
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.9);
    background: white;
    height: 120px;
    text-align: center;
    padding: ${spacing.medium};
    svg {
        margin-top: ${spacing.medium};
        color: ${colors.yellow};
    }
    h2 {
        margin: auto auto;
        font-weight: bold;
        font-size: ${fonts.h2};
        color: ${colors.blue};
    }
    p {
        font-size: 12px;
        color: ${colors.grey};
    }
}
@media(max-width: 998px) {
    a {
        margin: 0;
        width: 100%;
    }
    .SelectorBox {
        width: 100% !important;
        max-width: 450px;
        margin: ${spacing.medium} auto;
    }
}
`;

const Review = ({
    rating,
    review,
    feature,
    label,
    id,
}) => {
    return (
        <article id={id} className="Review">
            <div className="ReviewHeader">
                <h3>{label}</h3>
                <Rating rating={rating} noText/>
            </div>
           <div className="ReviewFeatureWrapper">
               <Feature>{feature}</Feature>
            </div> 
            {review.map(({ text }) => (
                <p>{text}</p>
            ))}
        </article>
    )
}

const Hero = ({
    name,
    summary,
    feature,
    rating,
}) => {
    return (
        <div className="Hero">
        <img src={coffee} alt="Coffee Doodle" />
        <div className="HeroText">
            <p>A thorough review of</p>
            <h1>{name}</h1>
            <p>{summary}</p>
            <br />
            <Feature>{feature}</Feature>
            <div className="OverallRating">
                <Rating rating={rating} />
            </div>

        </div>
        <p>Find out more</p>
        <a href="#review"><CaretDownCircle size="25" /></a>
    </div>)
};

const selectors = [{
    label: 'Coffee', icon: () => <Coffee size="30"/>, review: 'coffee',
    }, {
        label: 'Venue', icon: () => <Building size="30"/>, review: 'venue',
    }, {
        label: 'Drinks & Food', icon: () => <Cake3 size="30"/>, review: 'food',
    }];

const ReviewTemplate = ({ className, data }) => {
    const { coffeeshop } = data.prismic;
    return coffeeshop && coffeeshop.has_rating ? (
    <div className={className}>
        <SEO title={`A detailed review of ${coffeeshop.name[0].text}`} description={coffeeshop.summary[0].text} />
        <Header />
        <Hero
          name={coffeeshop.name[0].text}
          summary={coffeeshop.summary[0].text}
          feature={coffeeshop.key_feature[0].text}
          rating={coffeeshop.rating}
        />
        <Selector>
            {selectors.map(({ label, icon, review }) => (
                <a key={label} href={`#${review}`}>
                <div key={label} className="SelectorBox">
                    {icon()}
                    <h2>{label}</h2>
                    <p>Read in full</p>
                </div>
                </a>
            ))}

        </Selector>
        <section className="article-container">
            <main id="review">
                {selectors.map(({ label, review }) => {
                    return (
                    <Review 
                        key={`${review} - ${label}`}
                        label={label}
                        id={review}
                        rating={coffeeshop[`${review}_rating`]}
                        review={coffeeshop[`${review}_review`]}
                        feature={coffeeshop[`${review}_key_feature`][0].text}
                    />);
                })}
            </main>
            <div className="sidebar-container">
                <div className="sidebar">
                    <div className="sidebar-item address">
                        {coffeeshop.address.map(line => <h5>{line.text}</h5>)}
                        <a href={coffeeshop.website.url}>{coffeeshop.website.url}</a>
                        <a href={coffeeshop.facebook_page.url}><FacebookSquare size="30" /></a>
                    </div>
                    <div className="sidebar-item loyalty">
                        <h5>Loyalty Scheme</h5>
                        <p className="scheme-summary">{coffeeshop.loyalty_scheme_summary[0].text}</p>
                        <p>{coffeeshop.loyalty_scheme[0].text}</p>
                    </div>
                </div>
            </div>
        </section> 
        <div className="credit">
        <img src={reading} alt="Reading a book" />
        <a  href="https://icons8.com" className="credit">Images from Icons8</a>
        </div>
        
        <Signup showByDefault stopRevealBar={() => {}}/>
    </div>
    ) : <h1>Coming Soon</h1>
}

export default styled(ReviewTemplate)`
  padding-bottom: 150px;
  background-image: url(${background});
  width: 100%;
  min-height: 100vh;
  background-repeat: repeat-y;
  background-position: center top;
  font-family: ${fonts.family};
  .article-container {

    box-sizing: border-box;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    @media(max-width: 998px) {
        flex-wrap: wrap-reverse;
        main {
            margin: 0 auto;
        }
        .sidebar-container {
            width: 100%;
            margin: 0 auto;
            max-width: 450px;

        }
    }
        main {
            display: flex;
            flex-direction: column;
        }
  }
  .Review {
      box-sizing: border-box;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
      border-radius: ${spacing.radius};
      max-width: 450px;
      margin: ${spacing.large};
      @media(max-width:660px) {
        margin: ${spacing.large} 0;
        max-width: 450px;
        width: 100%;
    }
      padding: ${spacing.medium} ${spacing.large};
      
      background-color: ${colors.blue};
      color: white !important;
        p {
            color: white;
            margin-top: ${spacing.large};
        }
        .ReviewHeader {
            display: flex;
        }
        h3 {
            font-size: ${fonts.h3};
            margin-right: ${spacing.medium};
            margin-bottom: auto 0;
        }
  }
  p {
    color: ${colors.grey};
    line-height: 26px;
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
  }
.OverallRating  {
    max-width: 320px;
    margin: ${spacing.medium} auto 0;
}
.sidebar-container {
    box-sizing: border-box;
    background: transparent;
    width: 100%;
    max-width: 550px;
.sidebar {

    position: sticky;
    top: 30px;
    margin-top: ${spacing.large};   
    .sidebar-item {
        border-radius: ${fonts.radius};
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.9);
        margin-top: ${spacing.medium};
        padding: ${spacing.large};
        background: white; 
        h5 {
            margin: 3px 0;
            font-size: 16px;
            font-weight: bold;
            color: ${colors.blue};
        }
        .scheme-summary {
            color: ${colors.yellow};
            font-weight: bold;
            font-style: italic;
        }
        p {
            font-size: 14px;
            color: ${colors.blue};
        }
        a {
            font-size: 12px;
            margin-top: 10px;
            color: ${colors.grey};
        }
        svg {
            float: right;   
            color: ${colors.blue};
        }
    }
    }
}
img {
    margin: 30px auto 20px;
    width: 180px;
}
.credit {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
}
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
        loyalty_scheme_summary
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