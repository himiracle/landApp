import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`padding: 0px 10px;`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading
    ? <Loader />
    : <Container>
        {topRated &&
          topRated.length > 0 &&
          <Section title="인기 오피스텔 분양정보">
            {topRated.map(show =>
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_title}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
              />
            )}
          </Section>}
        {popular &&
          popular.length > 0 &&
          <Section title="분양 예정 오피스텔">
            {popular.map(show =>
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_title}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
              />
            )}
          </Section>}
        {airingToday &&
          airingToday.length > 0 &&
          <Section title="특가 분양 오피스텔">
            {airingToday.map(show =>
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_title}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
              />
            )}
          </Section>}
        {error && <Message text={error} color="#e74c3c" />}
      </Container>;

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TVPresenter;
