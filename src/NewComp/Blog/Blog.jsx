import React, { useEffect } from "react";
import "./Blog.css";
import helemt from "/Construction Site/my-app/src/Images/blog-12-370x272.jpg";
import helmet2 from "/Construction Site/my-app/src/Images/blog-13-370x272.jpg";
import helmet3 from "/Construction Site/my-app/src/Images/blog-14-370x272.jpg";
import Aos from 'aos'
import 'aos/dist/aos.css'

function Blog() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
}, [])

  return (
    <div className="news-div">
      <p className="news-desc">
        Going forward, a new normal that has evolved from generation is on
        <br /> the runway heading towards a streamlined.
      </p>
      <p className="news-title">FROM THE BLOG</p>
      <p className="news-subtitle">New & Articles</p>
      <div className="news-grid" data-aos="fade-right">
        <div className="article-div">
          <img src={helemt} alt="" />
          <div className="anim-div"></div>
          <div className="sub-div">
            <p className="comments">admin / 0 Comments</p>
            <p className="sub-exp">
              Normal that has evolved from <br /> generation on
            </p>
            <div className="sub-circle">
              <p>29 </p>
              <p>Mar</p>
            </div>
          </div>
        </div>
        <div className="article-div">
          <img src={helmet2} alt="" />
        <div className="anim-div"></div>
          <div className="sub-div">
            <p className="comments">admin / 0 Comments</p>
            <p className="sub-exp">
              Normal that has evolved from <br /> generation on
            </p>
            <div className="sub-circle">
              <p>29 </p>
              <p>Mar</p>
            </div>
          </div>
        </div>
        <div className="article-div">
          <img src={helmet3} alt="" />
          <div className="anim-div"></div>
          <div className="sub-div">
            <p className="comments">admin / 0 Comments</p>
            <p className="sub-exp">
              Normal that has evolved from <br /> generation on
            </p>
            <div className="sub-circle">
              <p>29 </p>
              <p>Mar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
