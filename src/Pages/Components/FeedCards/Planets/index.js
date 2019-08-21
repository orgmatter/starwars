import React, { Component } from 'react';
import { connect } from 'react-redux';
import { images as IMAGES } from '../../../../Images';
import { Link } from 'react-router-dom';
import { getPlanets } from '../../../../Store/Actions/GetPlanetAction';
// import { styles } from '../styles';



class Planets extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getPlanets();
    }

    render () {
        const { planets } = this.props;
        console.log(planets);

        const { results } = planets.planetData;
        console.log(results);

        if(results){
            var arraySize = 3;
             this.planetCard = results.slice(0, arraySize).map((planet, index) => {
                    return (
                        <div className="feedcards-planets-card-item" key={index}>
                            <div className="feedcards-planets-card-cover">
                                <div className="card-image-cover">
                                    <img className="card-img" src={IMAGES.planets.i} title="" />
                                </div>
                                <div className="card-img-title-overlay">
                                    <div className="card-img-title-overlay-flex">
                                        <div className="card-img-title-overlay-item">
                                            <div className="card-img-title-div">
                                                <h2 className="card-img-title"><Link to={planet.url}>{planet.name}</Link></h2>
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
            <div className="feedcards-planets-container">
                <div className="feedcards-planets-cover">
                    <div className="feedcards-planets-title-container">
                        <div className="planets-title-flex">
                            <div className="planets-title-item">
                                <div className="planets-title-cover">
                                    <h2 className="planets-title">Popular Planets</h2>
                                    <p className="title-underline-p"><span className="title-underline-span"></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="feedcards-planets-content-container">
                        <div className="feedcards-planets-content-cover">
                            <div className="feedcards-planets-card-flex">
                                { this.planetCard }
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
        planets: state.planets,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPlanets: () => dispatch(getPlanets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Planets);