import { writeFile, readFile } from "fs/promises";

export default async function updateMain(data) {
  try {
    const newContents = await buildNewMain(data);
    const promise = writeFile("_data/playlists.yml", newContents);
    return await promise;
  } catch (error) {
    throw new Error(error);
  }
}

export async function buildNewMain(data) {
  try {
    const promise = readFile("_data/playlists.yml", "utf-8");
    let content = await promise;
    content += `- playlist: ${data.name}\n  spotify: ${data.url}\n  tracks:\n`;
    data.tracks.map((track) => {
      content += `  - track: ${JSON.stringify(
        track.name
      )}\n    artist: ${JSON.stringify(
        track.artist
      )}\n    album: ${JSON.stringify(track.album)}\n`;
    });
    return content;
  } catch (error) {
    throw new Error(error);
  }
}
