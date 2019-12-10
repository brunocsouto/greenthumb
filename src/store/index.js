import { createStore } from 'redux';

const INITIAL_STATE = {
    questions: [
        {
            name: 'sun', 
            selected: null,
            options: [
                {option: 'high', label: 'High Sunlight'},
                {option: 'low', label: 'Low Sunlight'},
                {option: 'no', label: 'No Sunlight'},
            ],
            img: './assets/illustrations/sun.png',
        },
        { 
            name: 'water', 
            selected: null,
            options: [
                {option: 'daily', label: 'Daily'},
                {option: 'regularly', label: 'Regularly'},
                {option: 'rarely', label: 'Rarely'},
            ],
            img: './assets/illustrations/wateringcan.png',
        },
        {
            name: 'pets', 
            selected: null,
            options: [
                {id:1, option: 'true', label: 'Yes'},
                {id:2, option: 'false', label: "No/They don't care"},
            ],
            img:'./assets/illustrations/dog.png',
        }
    ],
    activeQuestion: 0
}


function questions(state = INITIAL_STATE, action){
    switch(action.type){
        case 'RESET_STATE':
            return { INITIAL_STATE };
        case 'INCREMENT_QUESTION':
            return { ...state, activeQuestion: action.current+1}
        case 'DECREMENT_QUESTION':
            return { ...state, 
                    activeQuestion: action.current-1,
                    questions: {
                        ...state.questions,
                        [action.current] : {
                            ...state.questions[action.current],
                            selected: null
                        },
                        [action.current-1] : {
                            ...state.questions[action.current-1],
                            selected: null
                        }

                    },
                }
        case 'SELECT_OPTION': {
            return { 
                ...state, 
                questions: {
                    ...state.questions,
                    [action.question] : {
                        ...state.questions[action.question],
                        selected: action.value
                    }
                }
            }
        }
        default: 
            return state;
    }
}

const store = createStore(questions);

export default store;