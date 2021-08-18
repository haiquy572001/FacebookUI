import React from "react";
import "../../../styles/feed.css";
function Feed() {
  return (
    <div className="feed">
      <div className="create_feed">
        <div className="header_feed">
          <div className="avatar">
            <img
              src="https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/179967536_1120260941794588_1712638087287103158_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-zfNMu-jKgMAX9gclKB&_nc_ht=scontent-xsp1-3.xx&oh=fb0da55f6248d26d8a121dfc57bed31d&oe=60F33619"
              alt=""
              srcset=""
            />
          </div>
          <div className="input_feed">
            <input type="text" placeholder="Qúy ơi, bạn đang nghĩ gì thế?" />
          </div>
        </div>
        <hr />
        <div className="button_group_feed">
          <div className="button_feed">
            <span className="material-icons">video_call</span>
            <p>Video trực tiếp</p>
          </div>
          <div className="button_feed">
            <span className="material-icons">collections</span>
            <p>Ảnh/Video</p>
          </div>
          <div className="button_feed">
            <span className="material-icons">insert_emoticon</span>
            <p>Cảm xúc/Hoạt động</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
