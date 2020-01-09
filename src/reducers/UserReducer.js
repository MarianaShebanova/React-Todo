export const UserReducer = (state, action) => {

    switch (action.type) {
        case 'USERNAME':
            return Object.assign({}, state, {
                username: action.username
            });
        default:
            return {username: ''}   ;
    }
}