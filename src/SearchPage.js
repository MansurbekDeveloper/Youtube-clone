import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/Tune";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwnj8RtKKAlRthZGyfivC3fsPuYjXW_E0n6P3RoNj=s88-c-k-c0x00ffffff-no-rj"
        channel="Ed Sheeran"
        verified
        subs="46.5M"
        noOfVideos={111}
        description="Music is a Magic"
      />
      <hr />

      <VideoRow
        views="33M"
        subs="46.5M"
        description="The official performance video for Ed Sheeran - Afterglow "
        timestamp="2 weeks ago"
        channel="Ed Sheeran"
        title="Ed Sheeran - Afterglow [Official Performance Video]
        "
        image="https://i.ytimg.com/an_webp/_NGQfFCFUn4/mqdefault_6s.webp?du=3000&sqp=CKTi4v8F&rs=AOn4CLAYJqWypDgLqq89dfF51I2usCvmuw"
      />

      <VideoRow
        views="85M"
        subs="46.5M"
        description="The official music video for Ed Sheeran - Take Me Back To London (Sir Spyro Remix) [feat. @Stormzy, @Jaykae & @Aitch]"
        timestamp="1 years ago"
        channel="Ed Sheeran"
        title="Ed Sheeran - Take Me Back To London (Sir Spyro Remix) [feat. Stormzy, Jaykae & Aitch]"
        image="https://i.ytimg.com/an_webp/XJQy_R9CYR4/mqdefault_6s.webp?du=3000&sqp=CJ7G4v8F&rs=AOn4CLB85YCEsYr4P4iIYJU90m2wlxEo2w"
      />

      <VideoRow
        views="279M"
        subs="46.5M"
        description="The official music video for Ed Sheeran - Beautiful People (feat. @Khalid)"
        timestamp="1 years ago"
        channel="Ed Sheeran"
        title="Ed Sheeran - Beautiful People (feat. Khalid) [Official Music Video]"
        image="https://i.ytimg.com/an_webp/mj0XInqZMHY/mqdefault_6s.webp?du=3000&sqp=CJjR4v8F&rs=AOn4CLBnW8QfpzFd6j8s0kzyhqBz10w05A"
      />

      <VideoRow
        views="2.7B"
        subs="46.5M"
        description="The official music video for Ed Sheeran - Perfect "
        timestamp="3 years ago"
        channel="Ed Sheeran"
        title="Ed Sheeran - Perfect (Official Music Video)"
        image="https://i.ytimg.com/an_webp/2Vv-BfVoq4g/mqdefault_6s.webp?du=3000&sqp=CLjv4v8F&rs=AOn4CLD8mvuA2ydhpUiInLRqkgMhNaHmEA"
      />

      <VideoRow
        views="5.1B"
        subs="46.5M"
        description="The official music video for Ed Sheeran - Shape Of You"
        timestamp="3 years ago"
        channel="Ed Sheeran"
        title="Ed Sheeran - Shape of You (Official Music Video)"
        image="https://i.ytimg.com/an_webp/JGwWNGJdvx8/mqdefault_6s.webp?du=3000&sqp=CLS24v8F&rs=AOn4CLDcZ4Xz3CQw-bGuovA-SMXowM_VIg"
      />

      <VideoRow
        views="1B"
        subs="46.5M"
        description="The official music video for Ed Sheeran - Photograph"
        timestamp="5 years ago"
        channel="Ed Sheeran"
        title="Ed Sheeran - Photograph (Official Music Video)"
        image="https://i.ytimg.com/an_webp/nSDgHBxUbVQ/mqdefault_6s.webp?du=3000&sqp=CMyz4v8F&rs=AOn4CLB5rD8P-txN70XgZzuA6zovwbC-tA"
      />
    </div>
  );
}

export default SearchPage;
