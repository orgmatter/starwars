import { combineReducers } from 'redux';
import CharacterReducers from './CharacterReducer';
import PlanetReducers from './PlanetReducer';
import StarshipReducers from './StarshipReducer';
// import AppFeedbackReducer from './AppFeedbacksReducer';

export default combineReducers({
characters: CharacterReducers,
planets: PlanetReducers,
starships: StarshipReducers,
})