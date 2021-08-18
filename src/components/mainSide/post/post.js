import React from "react";
import "../../../styles/post.css";
function Post() {
  const posts = [
    {
      name: "Hải Quý",
      time: "3 giờ",
      content: "Hello December",
      image:
        "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/179967536_1120260941794588_1712638087287103158_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-zfNMu-jKgMAX9gclKB&_nc_ht=scontent-xsp1-3.xx&oh=fb0da55f6248d26d8a121dfc57bed31d&oe=60F33619",
      reaction: "137 nguời khác",
      comment: "326 bình luận",
    },
    {
      name: "Hải Quý",
      time: "3 giờ",
      content: "Hello December",
      image:
        "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/179967536_1120260941794588_1712638087287103158_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-zfNMu-jKgMAX9gclKB&_nc_ht=scontent-xsp1-3.xx&oh=fb0da55f6248d26d8a121dfc57bed31d&oe=60F33619",
      reaction: "137 nguời khác",
      comment: "326 bình luận",
    },
    {
      name: "Hải Quý",
      time: "3 giờ",
      content: "Hello December",
      image:
        "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/179967536_1120260941794588_1712638087287103158_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-zfNMu-jKgMAX9gclKB&_nc_ht=scontent-xsp1-3.xx&oh=fb0da55f6248d26d8a121dfc57bed31d&oe=60F33619",
      reaction: "137 nguời khác",
      comment: "326 bình luận",
    },
    {
      name: "Hải Quý",
      time: "3 giờ",
      content: "Hello December",
      image:
        "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/179967536_1120260941794588_1712638087287103158_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-zfNMu-jKgMAX9gclKB&_nc_ht=scontent-xsp1-3.xx&oh=fb0da55f6248d26d8a121dfc57bed31d&oe=60F33619",
      reaction: "137 nguời khác",
      comment: "326 bình luận",
    },
    {
      name: "Hải Quý",
      time: "3 giờ",
      content: "Hello December",
      image:
        "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/179967536_1120260941794588_1712638087287103158_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-zfNMu-jKgMAX9gclKB&_nc_ht=scontent-xsp1-3.xx&oh=fb0da55f6248d26d8a121dfc57bed31d&oe=60F33619",
      reaction: "137 nguời khác",
      comment: "326 bình luận",
    },
  ];
  return (
    <div className="post_container">
      {posts.map((post, index) => (
        <div className="post">
          <div className="header_post">
            <div className="user">
              <div className="avatar_post">
                <img
                  src="https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/179967536_1120260941794588_1712638087287103158_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-zfNMu-jKgMAX9gclKB&_nc_ht=scontent-xsp1-3.xx&oh=fb0da55f6248d26d8a121dfc57bed31d&oe=60F33619"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="name_post">
                <div className="username">{post.name}</div>
                <div className="timer">
                  <div className="text_time">
                    <p>5 giờ .</p>
                  </div>
                  <div className="icon">
                    <span class="material-icons">public</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="update_post">
              <span class="material-icons">more_horiz</span>
            </div>
          </div>
          <div className="main_post">
            <div className="content_post">
              <p>{post.content}</p>
            </div>
            <div className="images_post">
              <img src={post.image} alt="" srcset="" />
            </div>
          </div>
          <div className="react_post">
            <div className="react">
              <div className="group_react">
                <span className="material-icons">thumb_up</span>
                <span className="material-icons">favorite</span>
              </div>
              <p>{post.reaction}</p>
            </div>
            <div className="comments">
              <p>{post.comment}</p>
            </div>
          </div>
          <div className="group_button_react">
            <button type="button">
              <i className="far fa-thumbs-up"></i>
              <strong>Thích</strong>
            </button>
            <button type="button">
              <i className="far fa-comments"></i>
              <strong>Bình luận</strong>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
