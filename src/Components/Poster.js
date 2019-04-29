import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`font-size: 12px;`;
const Image = styled.div`
  background-image: url(${props =>
    `https://image.tmdb.org/t/p/w300/${props.bgUrl}`});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
`;
const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
  }
`;
const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
`;
const Title = styled.span`
  display: block;
  font-size: 12px;
  margin-bottom: 3px;
`;
const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) =>
  <Link to={isMovie ? `movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image bgUrl={imageUrl} />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>{" "}
          {rating} / 10
        </Rating>
      </ImageContainer>
      <Title>
        {title}
      </Title>
      <Year>
        {year}
      </Year>
    </Container>
  </Link>;

Poster.prototype = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string,
  year: PropTypes.string,
  isMovie: PropTypes.bool
};

export default Poster;
