import PropTypes from 'prop-types';

const MoviePropTypes = PropTypes.shape({
  display_title: PropTypes.string,
  mpaa_rating: PropTypes.string,
  critics_pick: PropTypes.number,
  byline: PropTypes.string,
  headline: PropTypes.string,
  summary_short: PropTypes.string,
  publication_date: PropTypes.string,
  opening_date: PropTypes.string,
  date_updated: PropTypes.string,
  link: PropTypes.shape({
    type: PropTypes.string,
    url: PropTypes.string,
    suggested_link_text: PropTypes.string,
  }),
  multimedia: PropTypes.shape({
    type: PropTypes.string,
    src: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
  }),
});

export default MoviePropTypes;
