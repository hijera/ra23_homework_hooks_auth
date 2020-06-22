import React from 'react';
import PropTypes from 'prop-types';

NewsItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string
};

function NewsItem(props) {
    return (
        <div className="card news-card">
            <img src={props.image} className="card-img-top" alt={props.alt}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    );
}

NewsItem.defaultProps = {
    title: null,
    description: null,
    image: null,
    alt: ''
};

export default NewsItem;