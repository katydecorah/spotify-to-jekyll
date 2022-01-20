import { pluck, findWhere } from "underscore";

export default function formatTracks(data) {
  return {
    name: data.name,
    formatted_name: data.name.replace("/", "-").toLowerCase().replace(" ", "-"),
    url:
      data.external_urls && data.external_urls.spotify
        ? data.external_urls.spotify
        : "",
    tracks: getTracks(data.tracks),
    image: findWhere(data.images, { width: 640 }).url,
  };
}

export function getTracks(tracks) {
  return tracks.items.reduce((arr, item) => {
    arr.push({
      name: item.track.name,
      artist: pluck(item.track.artists, "name").join(", "),
      album: item.track.album.name,
    });
    return arr;
  }, []);
}
