import { Grid } from "@material-ui/core";
import { SearchBar, VideoList, VideoDetails } from "./components";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async (search) => {
    const res = await axios.get("search", {
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: {
        part: "snippet",
        maxResults: 5,
        key: process.env.YOUTUBE_API,
        q: search,
      },
    });

    setVideos(res.data.items);
    setSelectedVideo(res.data.items[0]);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetails video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
