import React, { useState, useEffect } from "react";

const CommentArea = ({ handleAddComment, comments }) => {
  const [comment, setComment] = useState("");

  return (
    <section>
      <form class="mb-3" onSubmit={(e) => handleAddComment(e, comment)}>
        <label for="exampleFormControlTextarea1" class="form-label">
          Write a comment:
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button type="submit" class="submit primary">
          Submit
        </button>
      </form>

      <div class="container my-5 py-5 text-dark">
        <div class="row d-flex justify-content-center">
          <div class="col-md-11 col-lg-9 col-xl-7">
            {comments.map((comment) => (
              <div class="d-flex flex-start mb-4">
                <img
                  class="rounded-circle shadow-1-strong me-3"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                  alt="avatar"
                  width="65"
                  height="65"
                />
                <div class="card w-100">
                  <div class="card-body p-4">
                    <div class="">
                      <h5>Annoymous</h5>
                      <p class="small">3 hours ago</p>
                      <p>{comment.text}</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center">
                          <a href="#!" class="link-muted me-2">
                            <i class="fas fa-thumbs-up me-1"></i>
                            {comment.likes}
                          </a>
                          <a href="#!" class="link-muted">
                            <i class="fas fa-thumbs-down me-1"></i>
                            {comment.dislikes}
                          </a>
                        </div>
                        <a href="#!" class="link-muted">
                          <i class="fas fa-reply me-1"></i> Reply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CommentArea;
