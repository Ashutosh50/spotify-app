import { reducerCases } from "./Constants";

export const initialState = {
    token: null,
    userInfo: null,
    playlists: [],
    currentPlaying: null,
    playerState: false,
    selectedPlaylist: null,
    selectedPlaylistId: "2NdeG8vRZKyk4yFoJjh51B",
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case reducerCases.SET_TOKEN:
        return {
          ...state,
          token: action.token,
        };
        case reducerCases.SHOW_PLAYLISTS:
          return {
            ...state,
            playlists: action.playlists,
          };
          case reducerCases.SET_USER:
            return {
              ...state,
              userInfo: action.userInfo,
            };
            case reducerCases.SET_PLAYLIST:
              return {
                ...state,
                selectedPlaylist: action.selectedPlaylist,
              };
              case reducerCases.SET_PLAYING:
                return {
                  ...state,
                  currentPlaying: action.currentPlaying,
                };

          default:
            return state;
 
  }}
  export  {reducer};