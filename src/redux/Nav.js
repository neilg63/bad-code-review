const initialState = {
    links: [
        {label: 'Home', href: '/'},
        {label: 'Posts', href: '/posts'}
    ],
};

const UPDATE_ACTIVE_LINK = 'Nav/UPDATE_ACTIVE_LINK';

export function updateActiveLink(label) {
    return {type: UPDATE_ACTIVE_LINK, payload: label}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ACTIVE_LINK: {
            state.links.forEach((link) => {
                link.active = link.label === action.payload
            });
            return {
                ...state
            }
        }
        default:
            return state
    }
}
export {reducer as navReducer}

