import React from "react";
import "../../styles/leftSide.css";
function LeftSide() {
  return (
    <div className="leftSide">
      <div className="useful">
        <ul>
          <li>
            <a href="/">
              <div className="icon">
                <img
                  src="https://baoangiang.com.vn/image/news/2020/20200317/origin/1584435356.jpg"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="text">
                <p>Hải Quý</p>
              </div>
            </a>
          </li>
          <li>
            <a href="/">
              <div className="icon">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="text">
                <p>Bạn bè</p>
              </div>
            </a>
          </li>
          <li>
            <a href="/">
              <div className="icon">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="text">
                <p>Nhóm</p>
              </div>
            </a>
          </li>
          <li>
            <a href="/">
              <div className="icon">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="text">
                <p>Marketplace</p>
              </div>
            </a>
          </li>
          <li>
            <a href="/">
              <div className="icon">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="text">
                <p>Watch</p>
              </div>
            </a>
          </li>
          <li>
            <a href="/">
              <div className="icon">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/QAyfjudAqqG.png"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="text">
                <p>Sự kiện</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSide;
