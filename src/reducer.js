export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove after finish developing
    // token: 'BQCfq3-iFaOkBPIdewn9ElfkGsG-1DPGQSh87FuevkGY-eHR4RXlKlnMK0A5_wyLpKEFPfwwW4yzv5q_PVQ386zJTjuiXluQTRYE7uBiKHXbL2grUJYOIenC-c-ax9M3oMXrncRlcdBHxeIWEw30Me--FPu2g4K-PQCEdz_HEfIYUb1x6c-xmh2ihrdb8oH1pWz7FqCs-bxjlRqy',
};

const reducer = (state, action) => {
    console.log(action);

// Action-> type, [payload]
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };

        case 'SET_DISCOVER_WEEKLY' :
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        
        default:
            return state;
    }
};

export default reducer;