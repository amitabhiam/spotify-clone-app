import { useEffect } from 'react';
import Login from './Login';
import { getTokenFromUrl } from './zspotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi(); // creating a new instance for spotify api to communicate back and forth with spotify

// start at 2:05
function App() {

  // const [token, setToken] = useState();
  const [{token}, dispatch] = useDataLayerValue();
  //Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash ="";
    const _token = hash.access_token;

    if(_token) {
      dispatch({
        type:'SET_TOKEN',
        token: _token,
      });

      

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {

        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcQvfhWuPp1yi').then(response => 
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      );

    }

  }, []);

  return (
    <div className="App">
    {token ? <Player spotify={spotify} /> : <Login />}

    </div>
  );
}

export default App;
