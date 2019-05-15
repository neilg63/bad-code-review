const initialState = {
    links: [
        { label: 'Home', href: '/' },
        { label: 'Posts', href: '/posts' }
    ],
};
// This does not appear to be used.
const UPDATE_ACTIVE_LINK = 'Nav/UPDATE_ACTIVE_LINK';

export function updateActiveLink(label) {
    return { type: UPDATE_ACTIVE_LINK, payload: label }
}
// Just name reducer navReducer with export keyword
export const navReducer = (state = initialState, action) => {
    switch (action.type) {
        // no need for exra curly brace around case clause
        case UPDATE_ACTIVE_LINK:
            // map is moe efficient, but forEach works if mutating the same array
            /* state.links.forEach((link) => {
                link.active = link.label === action.payload
            }); */
            state.links = state.links.map(link => {
                link.active = link.label === action.payload
                return link;
            });
            break;
        default:
            // linter may argue without default, but not necessary in this case
            break;
    }
    // always return state, no need to destructure
    return state
}


