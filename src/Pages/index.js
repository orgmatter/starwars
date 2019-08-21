import React, { useState } from 'react';
import Header from './Components/Header';
import FeedCards from './Components/FeedCards';
import AlertDialogSlide from './Components/Dialog';
import { connect } from 'react-redux';

function Pages(props)  {

    const [open, setOpen] = useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="body-container-div">
            <AlertDialogSlide handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} setOpen={setOpen} />
            <div className="header-div">
                <Header />
            </div>
            <div className="body-content-div">
                <div className="body-container-div-flex">
                    <div className="body-container-div-item">
                        <FeedCards />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        appFeedbacks: state.appFeedbacks,
    }
}

export default connect(mapStateToProps, null)(Pages);

