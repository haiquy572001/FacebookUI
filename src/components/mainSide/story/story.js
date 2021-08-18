import React from "react";
import "../../../styles/story.css";
function Story() {
  const stories = [
    {
      name: "Nguyễn Đặng Trường Giang",
      avatar:
        "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/179967536_1120260941794588_1712638087287103158_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-zfNMu-jKgMAX9gclKB&_nc_ht=scontent-xsp1-3.xx&oh=fb0da55f6248d26d8a121dfc57bed31d&oe=60F33619",
      story:
        "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/179967536_1120260941794588_1712638087287103158_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-zfNMu-jKgMAX9gclKB&_nc_ht=scontent-xsp1-3.xx&oh=fb0da55f6248d26d8a121dfc57bed31d&oe=60F33619",
    },
    {
      name: "Hải Quý",
      avatar:
        "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/179967536_1120260941794588_1712638087287103158_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-zfNMu-jKgMAX9gclKB&_nc_ht=scontent-xsp1-3.xx&oh=fb0da55f6248d26d8a121dfc57bed31d&oe=60F33619",
      story:
        "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/179967536_1120260941794588_1712638087287103158_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-zfNMu-jKgMAX9gclKB&_nc_ht=scontent-xsp1-3.xx&oh=fb0da55f6248d26d8a121dfc57bed31d&oe=60F33619",
    },
    {
      name: "Hải Quý",
      avatar:
        "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/179967536_1120260941794588_1712638087287103158_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-zfNMu-jKgMAX9gclKB&_nc_ht=scontent-xsp1-3.xx&oh=fb0da55f6248d26d8a121dfc57bed31d&oe=60F33619",
      story:
        "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/179967536_1120260941794588_1712638087287103158_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-zfNMu-jKgMAX9gclKB&_nc_ht=scontent-xsp1-3.xx&oh=fb0da55f6248d26d8a121dfc57bed31d&oe=60F33619",
    },
    {
      name: "Hải Quý",
      avatar:
        "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/179967536_1120260941794588_1712638087287103158_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-zfNMu-jKgMAX9gclKB&_nc_ht=scontent-xsp1-3.xx&oh=fb0da55f6248d26d8a121dfc57bed31d&oe=60F33619",
      story:
        "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/179967536_1120260941794588_1712638087287103158_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-zfNMu-jKgMAX9gclKB&_nc_ht=scontent-xsp1-3.xx&oh=fb0da55f6248d26d8a121dfc57bed31d&oe=60F33619",
    },
    // {
    //   name: "Hải Quý",
    //   avatar:
    //     "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/179967536_1120260941794588_1712638087287103158_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-zfNMu-jKgMAX9gclKB&_nc_ht=scontent-xsp1-3.xx&oh=fb0da55f6248d26d8a121dfc57bed31d&oe=60F33619",
    //   story:
    //     "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/179967536_1120260941794588_1712638087287103158_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-zfNMu-jKgMAX9gclKB&_nc_ht=scontent-xsp1-3.xx&oh=fb0da55f6248d26d8a121dfc57bed31d&oe=60F33619",
    // },
  ];
  return (
    <div className="story">
      <div className="story_card user">
        <div className="create_story">
          <span className="material-icons">add</span>
        </div>
        <div className="name">
          <p className="text-center">Tạo tin</p>
        </div>
      </div>
      {stories.map((story, index) => (
        <div
          key={index}
          className="story_card"
          style={{
            backgroundImage: `url(${story.story})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="avatar">
            <img src={story.avatar} alt="" srcset="" />
          </div>
          <div className="name">
            <p>{story.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Story;
