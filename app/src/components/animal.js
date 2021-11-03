// import React from 'react';
import { connect } from 'react-redux';
import { getAnimal } from '../actions/actions';

const Animal = (props) => {

    // ----- Animal Getter ----
    const handleClick = () => {
        console.log('Clicked')
        props.getAnimal();
    }

    // ----- Initial Dog Pic -----  <<<<<<< UPDATE LATER

    // ---- Fetching or Error -----
    if (props.error) {
        return (
            <div className='fetching-error-container'>
                <h2>Houston, we have a problem!</h2>
                <h4>{props.error}</h4>
                <img src={props.animalPicture} alt='A cat'/> 
            </div>
        )
    }  
    if (props.isFetching){
        return (
            <div className='fetching-error-container'>
                <h2>One moment please... </h2>
                <img src={props.animalPicture} alt='A cat'/> 
            </div>
        )
    }

    // ---- Success -----
    return (
        <div className='picture-container'>
            <img src={props.animalPicture} alt='A dog'/> 
            <div>
                <button onClick={handleClick}>Get New Animal!</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        animalPicture: state.animalPicture,
        error: state.error,
        isFetching: state.isFetching
    })
}

export default connect(mapStateToProps, { getAnimal })(Animal);