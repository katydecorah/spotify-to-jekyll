# spotify-to-jekyll

Turn a Spotify playlist into a Jekyll post.

## Set up

1. Create a [Spotify app](https://developer.spotify.com/dashboard/applications).
2. From terminal, export the following variables using the information from your Spotify app:
```
echo "export SpotifyClientID=0000ffff0000ffff0000ffff0000ffff0000ffff" >> ~/.bash_profile
echo "export SpotifyClientSecret=0000ffff0000ffff0000ffff0000ffff0000ffff" >> ~/.bash_profile
echo "export SpotifyUser=0000ffff0000" >> ~/.bash_profile
```

Install the app:

```
npm install -g
```

Open the directory you wish to download the Spotify playlist and run in terminal:

```
spotify-to-jekyll --playlist=<playlist-id>
```

You can find your playlist's ID in its URL.
