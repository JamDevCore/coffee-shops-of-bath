import React, {useState, useEffect} from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components';
import {CaretDownCircle} from 'styled-icons/boxicons-solid/CaretDownCircle';
import SEO from "../components/seo"
import Header from '../components/header';
import ShopListItem from '../components/shop-list-item';
import background from '../images/csb_bg.png';
import Signup from '../components/signup';
import coffee from '../images/open-doodles-coffee.png';
import {colors, spacing, fonts} from '../theme';


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
    <a href="#list"><CaretDownCircle size="30" /></a>
 </div>
);


const IndexPage = ({ data, className }) => {
  const [showSignup, setShowSignup] = useState(false);
  useEffect(() => {
    console.log('working')
  })
  const { allCoffeeshops } = data.prismic;
  const totalShops = allCoffeeshops.edges.length;
  const rankedShops = allCoffeeshops.edges.sort((a,b) => (a.node.rank || totalShops) - (b.node.rank || totalShops))
  return (
    <div className={className}>
      <SEO title="Coffee shops of Bath" />
      <Header />
      <Hero></Hero>
      <div className="PageTitle">
        <h1>The Rankings</h1>
        <p>(These are solely my opinions)</p>
        </div>
      <div className="ShopListContainer">
        <ul className="ShopList" id="list">
          {rankedShops.map(({ node }) => {
            return node.has_rating ? (
              <ShopListItem
                key={node._meta.uid}
                name={node.name[0]}
                rating={node.rating}
                feature={node.key_feature[0]}
                rank={node.rank}
                summary={node.summary[0]}
                uid={node._meta.uid}
                />
            ) : <ShopListItem
                  comingSoon
                  name={node.name[0]} 
                  setShowSignup={setShowSignup}
             />;
          })}
      </ul>
      </div>
      <Signup revealBar={showSignup} stopRevealBar={setShowSignup}/>
   </div>)
};

export default styled(IndexPage)`
  background-image: url(${background});
  padding-bottom: 100px;
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
  }
  .PageTitle {
    max-width: 300px;
    margin: 0 auto;
    text-align: center;
  }
  .ShopListContainer {
    max-width: 1000px;
    box-sizing: border-box;
    margin: ${spacing.xlarge} auto;
  }
  .ShopList {
    box-sizing: border-box;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`
export const query = graphql`
query allCoffeeshopsQuery {
  prismic {
    allCoffeeshops {
      edges {
        node {
          summary
          name
          key_feature
          rating
          rank
          has_rating
          _meta {
            uid
          }
        }
      }
    }
  }
}`;
