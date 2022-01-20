#!/usr/bin/env node

import meow from "meow";
import playlist from "./src/index.js";

const cli = meow(
  `
Usage
  $ spotify-to-jekyll <playlist_id>

Options
    --postsDir, -p  Relative path to your _posts folder
    --imgDir, -i  Relative path to your images folder
    --updateDataFile, -d  Update a data file with your playlist data

Examples
  $ spotify-to-jekyll 0000111100001111
  $ spotify-to-jekyll 0000111100001111 --postsDir=_posts`,
  {
    importMeta: import.meta,
    flags: {
      postsDir: {
        type: "string",
        default: "playlists/_posts",
        alias: "p",
      },
      imgDir: {
        type: "string",
        default: "img",
        alias: "i",
      },
      updateDataFile: {
        type: "boolean",
        default: false,
        alias: "d",
      },
    },
  }
);

if (!cli.input.length) {
  console.log(cli.help);
  process.exit(1);
}

process.env.SpotifyPlaylist = cli.input;
process.env.PostsDir = cli.flags.postsDir;
process.env.ImgDir = cli.flags.imgDir;
process.env.UpdateDataFile = cli.flags.updateDataFile;

(async () => {
  try {
    await playlist();
    console.log("Downloaded playlist");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
