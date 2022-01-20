import SpotifyWebApi from "spotify-web-api-node";

export default async function getPlaylist(playlist) {
  try {
    const spotifyApi = new SpotifyWebApi({
      clientId: process.env.SpotifyClientID,
      clientSecret: process.env.SpotifyClientSecret,
    });
    const {
      body: { access_token },
    } = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(access_token);

    const { body } = await spotifyApi.getPlaylist(playlist);

    return body;
  } catch (err) {
    throw new Error(err);
  }
}
