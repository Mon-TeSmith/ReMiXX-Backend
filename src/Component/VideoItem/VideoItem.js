import React, { useEffect, useState } from "react";
import CommentArea from "../CommentArea/commentArea";
import axios from "axios";
export const VideoItem = (props) => {
  const [comments, setComments] = useState([]);
  var url = `https://www.youtube.com/embed/${props.videoID}?autoplay=1&origin=http://example.com`;

  const handleAddComment = async (e, comment) => {
    e.preventDefault();
    const body = {
      text: comment,
      videoId: props.videoID,
    };
    const res = await axios.post("http://localhost:5000/api/comments", body);
    console.log("comment posted", res.data);
    setComments([res.data, ...comments]);
  };

  useEffect(() => {
    const getComments = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/comments/${props.videoID}`
      );
      setComments(res.data);
    };
    getComments();
  }, []);

  return (
    <div>
      <iframe
        title="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={url}
        frameborder="0"
      ></iframe>
      <CommentArea
        videoID={props.videoID}
        handleAddComment={handleAddComment}
        comments={comments}
      />
    </div>
  );
};

export default VideoItem;
