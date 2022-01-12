import React, { Component } from "react";
import reactDom from "react-dom";
import axios from "axios";
import VideoItem from "./Component/VideoItem/VideoItem";
import SideBar from "./Component/SideBar/SideBar";
import SearchBar from "./Component/SearchBar/SearchBar";
import CommentArea from "./Component/CommentArea/commentArea";
import NavBar from "./Component/NavBar/NavBar"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      videoID: "A1kzG9Ld1kI&ab",
      object: null,
      comment: "",
    };
    this.fetchVideos = this.fetchVideos.bind(this);
  }

  componentDidMount() {
    this.fetchVideos("BrianMcKnight");
    console.log(this.state.videos);
  }

  async fetchVideos(search) {
    try {
      let response = await axios.get(
        'https://www.google.com/search?sxsrf=AOaemvKjpZyFU47vlVgd9SuxN74U_aX-XQ:1641929657358&q=youtube+api+video+id+brian+mcknight+uh+oh&spell=1&sa=X&ved=2ahUKEwj-8OPPuKr1AhXQLs0KHVMzDfkQBSgAegQIARAy&biw=1413&bih=924&dpr=1'
      );
      console.log(response.data);
      this.setState({ videos: response.data.items });
    } catch (error) {
      console.log(error);
    }
  }

  handleVideoSelect = (videoID) => {
    this.setState({ videoID: videoID });
  };

  handleCommentAdd = (comment) => {
    this.setState({ comment: comment });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {<VideoItem videoID={this.state.videoID} />}
        {
          <SideBar
            videos={this.state.videos}
            handleVideoSelect={this.handleVideoSelect}
          />
        }

        <SearchBar
          comments={this.state.videos}
          handleCommentAdd={this.handleCommentAdd}
          fetchVideos={this.fetchVideos}
        />
        <NavBar />
      </div>
    );
  }
}

export default App;
