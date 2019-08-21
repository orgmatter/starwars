import React, { useState } from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Typography from '@material-ui/core/Typography';
import Send from '@material-ui/icons/Send';
import { styles } from '../styles';
import { images as IMAGES } from '../../../Images';


function Header ({title, handleClickOpen}) {
    const classes = styles();
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (e) => {
        var inputVal = e.target.value;
        setSearchValue(inputVal)
    }
    return (
        <div className="header-container">
            <div className="header-cover">
                <div className="header-img-bg-cover">
                    <div className="header-bg-overlay">
                        <div className="header-logo-cover-flex">
                            <div className="header-logo-cover-item">
                                <img className="header-logo-img" src={IMAGES.logo} />
                            </div>
                        </div>
                        <div className="header-content-overlay-flex">
                            <div className="header-content-overlay-item">
                                <div className="overlay-header-text-div-flex">
                                    <div className="overlay-header-text-div-item">
                                        <div className="overlay-title-div-flex">
                                            <div className="overlay-title-div-main-item">
                                                <div className="overlay-title-div-item" id="image-div-item">
                                                    <img className="header-logo-img" src={IMAGES.logo} />
                                                </div>
                                                <div className="overlay-title-div-item" id="text-div-item">
                                                    <h2 className="overlay-title-h">Directory</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="overlay-subtitle-div-flex">
                                            <div className="overlay-subtitle-div-item">
                                                <div className="overlay-subtitle-div">
                                                    <p className="overlay-subtitle-p">Find your favorite Characters, Films, Sources, Starships and Planets</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="overlay-searchbox-container">
                                    <div className="overlay-searchbox-flex">
                                        <div className="overlay-searchbox-item">
                                            <div className="overlay-searchbox-cover">
                                                <input type="text" className="overlay-searchbox-input" name="searchVal" id="search_val" value={searchValue} onChange={handleInputChange} placeholder="Type a search term" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;

