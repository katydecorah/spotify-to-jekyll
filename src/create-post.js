import { writeFile } from "fs/promises";

export default async function createPost(data) {
  try {
    const promise = writeFile(
      `${process.env.PostsDir}/${new Date().toISOString().slice(0, 10)}-${
        data.formatted_name
      }.md`,
      buildPost(data)
    );
    return await promise;
  } catch (error) {
    throw new Error(error);
  }
}

export function buildPost(data) {
  let contents = `---
title: ${data.name}
spotify: ${data.url}
image: ${data.formatted_name}.png
permalink: /playlists/${data.formatted_name}/
---

[Listen on Spotify](${data.url})

`;
  data.tracks.map((track) => {
    contents += `* ${track.name}, ${track.artist}\n`;
  });
  return contents;
}
