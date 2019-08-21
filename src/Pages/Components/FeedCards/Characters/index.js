import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCharacters } from '../../../../Store/Actions/GetCharacterAction';
import { images as IMAGES } from '../../../../Images';
import { Link } from 'react-router-dom';
// import { styles } from '../styles';

class Characters extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getCharacters();
    }

    render () {
        const { characters } = this.props;

        const { results } = characters.characterData;
        console.log(results);
        
       if(results){
           var arraySize = 5;
        this.characterCard = results.slice(0, arraySize).map((character, index) => {
                return (
                    <div className="feedcards-characters-card-item" key={index}>
                        <div className="feedcards-characters-card-cover">
                            <div className="card-image-cover">
                                <img className="card-img" src={IMAGES.characters.i} title="" />
                            </div>
                            <div className="card-text-cover">
                                <div className="card-text-title-div">
                                    <h2 className="card-title">{character.name}</h2>
                                </div>
                                <div className="card-text-subtitle-div">
                                    <p className="card-subtitle">subtitle</p>
                                </div>
                                <div className="card-text-link-div">
                                    <Link to={character.url}>View more</Link>
                                </div>
    
                                {/* <div className="card-btn-cover">
                                    <div className="card-btn-flex">
                                        <div className="card-btn-item">
                                            <a className="card-btn" href="#">Hello</a>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                )
            })
        }

        

        return (
            <div className="feedcards-characters-container">
                <div className="feedcards-characters-cover">
                    <div className="feedcards-characters-title-container">
                        <div className="characters-title-flex">
                            <div className="characters-title-item">
                                <div className="characters-title-cover">
                                    <h2 className="characters-title">Popular Characters</h2>
                                    <p className="title-underline-p"><span className="title-underline-span"></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="feedcards-characters-content-container">
                        <div className="feedcards-characters-content-cover">
                            <div className="feedcards-characters-card-flex">
                                { this.characterCard }
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
        characters: state.characters,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCharacters: () => dispatch(getCharacters())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);