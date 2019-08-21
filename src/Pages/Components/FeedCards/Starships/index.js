import React, { Component } from 'react';
import { connect } from 'react-redux';
import { images as IMAGES } from '../../../../Images';
import { Link } from 'react-router-dom';
import { getStarship } from '../../../../Store/Actions/GetStarshipAction';
// import { styles } from '../styles';



class Starships extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getStarship();
    }

    render () {
        const { starships } = this.props;

        const { results } = starships.starshipData;
        console.log(results);

        if(results){
            var arraySize = 6;
             this.starshipCard = results.slice(0, arraySize).map((starship, index) => {
                    return (
                        <div className="feedcards-starships-card-item" key={index}>
                            <div className="feedcards-starships-card-cover">
                                <div className="card-image-cover">
                                    <img className="card-img" src={IMAGES.starships.i} title="" />
                                </div>
                                <div className="card-text-cover">
                                    <div className="card-text-title-div">
                                        <h2 className="card-title">{starship.name}</h2>
                                    </div>
                                    <div className="card-text-subtitle-div">
                                        <p className="card-subtitle">subtitle</p>
                                    </div>
                                    <div className="card-btn-cover">
                                        <div className="card-btn-flex">
                                            <div className="card-btn-item">
                                                <Link to={starship.url} className="card-btn">View more</Link>
                                                {/* <a className="card-btn" href="#">Hello</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
             })
        }

        return (
            <div className="feedcards-starships-container">
                <div className="feedcards-starships-cover">
                    <div className="feedcards-starships-title-container">
                        <div className="starships-title-flex">
                            <div className="starships-title-item">
                                <div className="starships-title-cover">
                                    <h2 className="starships-title">Popular Starships</h2>
                                    <p className="title-underline-p"><span className="title-underline-span"></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="feedcards-starships-content-container">
                        <div className="feedcards-starships-content-cover">
                            <div className="feedcards-starships-card-flex">
                                { this.starshipCard }
                            </div>
                        </div>
                    </div>
                    <div className="feedcards-viewmore-btn-container">
                        <div className="feedcards-viewmore-btn-cover">
                            <div className="feedcards-viewmore-btn-flex">
                                <div className="feedcards-viewmore-btn-item">
                                    <button className="feedcards-viewmore-btn">View more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        starships: state.starships,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getStarship: () => dispatch(getStarship())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Starships);