export default function formatTracks(data) {
  return {
    name: data.name,
    formatted_name: data.name.replace("/", "-").toLowerCase().replace(" ", "-"),
    url:
      data.external_urls && data.external_urls.spotify
        ? data.external_urls.spotify
        : "",
    tracks: getTracks(data.tracks),
    image: data.images.find(({ width }) => width === 640).url,
  };
}

export function getTracks(tracks) {
  return tracks.items.map(({ track }) => ({
    name: track.name,
    artist: track.artists.map(({ name }) => name).join(", "),
    album: track.album.name,
  }));
}
