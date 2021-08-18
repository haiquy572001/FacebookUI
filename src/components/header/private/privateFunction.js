import React from "react";
import "../../../styles/privateUser.css";
function PrivateFunction() {
  return (
    <div className="private_Function">
      <div className="user_profile">
        <div className="circle_user">
          <div className="circle_avt">
            <img
              src="https://baoangiang.com.vn/image/news/2020/20200317/origin/1584435356.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div className="username">
            <p>Quý</p>
          </div>
        </div>
      </div>
      <div className="user_function">
        <ul>
          <li>
            <a href="/">
              <span className="material-icons">menu</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="material-icons">messenger</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="material-icons">notifications</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="material-icons">arrow_drop_down</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PrivateFunction;
