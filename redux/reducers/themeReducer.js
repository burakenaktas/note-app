const themeReducer = (state = 'LIGHT_THEME', action) => {
    switch (action.type) {
        case 'DARK_THEME':
            return 'DARK_THEME'
        case 'LIGHT_THEME':
            return 'LIGHT_THEME'
        default:
            return state
    }
}

export default themeReducer
