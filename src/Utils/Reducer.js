import { reducerCases } from "./Constants";

export const initialState = {
    token: null,
    userInfo: null,
    playlists: [],
    currentPlaying: null,
    playerState: false,
    selectedPlaylist: null,
    selectedPlaylistId: "37i9dQZF1E37jO8SiMT0yN",
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case reducerCases.SET_TOKEN:
        return {
          ...state,
          token: action.token,
        };
        case reducerCases.SET_PLAYLISTS:
          return {
            ...state,
            playlists: action.playlists,
          };
          case reducerCases.SET_USER:
            return {
              ...state,
              userInfo: action.userInfo,
            };

          default:
            return state;
 
  }}
  export  {reducer};