import getPlaylist from "./get-playlist.js";
import formatTracks from "./format-tracks.js";
import createPost from "./create-post.js";
import updateMain from "./update-main.js";
import saveImage from "./save-image.js";

export default async function playlist() {
  if (!process.env.SpotifyClientID)
    throw new Error(
      "Missing `SpotifyClientID` environment variable please see README.md"
    );
  if (!process.env.SpotifyClientSecret)
    throw new Error(
      "Missing `SpotifyClientSecret` environment variable please see README.md"
    );
  const playlist = await getPlaylist(process.env.SpotifyPlaylist);
  const formattedTracks = formatTracks(playlist);
  await createPost(formattedTracks);

  // save tracks to playlists.yml (optional)
  if (process.env.UpdateDataFile === true) {
    await updateMain(formattedTracks);
    return;
  }
  await saveImage(formattedTracks);
}
