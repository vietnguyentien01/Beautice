import "../assets/styles/blog.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import Img1 from "../assets/imgs/product/gallery1.png";
import Img2 from "../assets/imgs/product/gallery2.png";
import Img3 from "../assets/imgs/product/gallery3.png";
import FolderIcon from "../assets/imgs/icon/folder.png";
import Post1 from "../assets/imgs/img/post2.png";
import Post2 from "../assets/imgs/img/post1.png";
import Post3 from "../assets/imgs/img/post3.png";
import FB from "../assets/imgs/icon/facebook.png";
import TW from "../assets/imgs/icon/twitter.png";
import IN from "../assets/imgs/icon/linkedin.png";
import IG from "../assets/imgs/icon/instagram.png";
import SearchIcon from "../assets/imgs/icon/search.png";

export default function Blog() {
  return <div className="blog-container">
      <ScrollToTop />
      <Header />
      <div className="our-blog">
        <div className="our-sub-blog">
          <div className="our-blog-content">
            <h6>Blog</h6>
            <p>Home • Blog</p>
          </div>
        </div>
      </div>
      <div className="blog-posts">
        <div className="blog-post">
          <div className="blog-post-left">
            <div className="blog-card">
              <div className="blog-card_img">
                <img src={Img1} alt="" />
              </div>
              <div className="blog-card_content">
                <div className="blog-card_content_title">
                  <img src={FolderIcon} alt="" />
                  <h6>Consultation</h6>
                </div>
                <h3>How much does a consultation cost at our clinic?</h3>
                <p>
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created for the…
                </p>
                <button className="btn-public blog-btn">
                  Read More <p className="caret-play" />
                </button>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-card_img">
                <img src={Img2} alt="" />
              </div>
              <div className="blog-card_content">
                <div className="blog-card_content_title">
                  <img src={FolderIcon} alt="" />
                  <h6>Beauty</h6>
                </div>
                <h3>Watch out! don't choose the wrong beauty product</h3>
                <p>
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created for the…
                </p>
                <button className="btn-public blog-btn">
                  Read More <p className="caret-play" />
                </button>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-card_img">
                <img src={Img3} alt="" />
              </div>
              <div className="blog-card_content">
                <div className="blog-card_content_title">
                  <img src={FolderIcon} alt="" />
                  <h6>Treatments</h6>
                </div>
                <h3>About skin care you need to know</h3>
                <p>
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created for the…
                </p>
                <button className="btn-public blog-btn">
                  Read More <p className="caret-play" />
                </button>
              </div>
            </div>
          </div>
          <div className="blog-post-search">
            <input placeholder="Search here ..." />
            <div className="blog-post-search_img">
              <img src={SearchIcon} alt="" />
            </div>
          </div>
          <div className="blog-post-right">
            <div className="blog-post-recent">
              <div className="blog-post-sub-recent">
                <h6>Recent Posts</h6>
                <ul className="list-post">
                  <li className="post-item">
                    <img src={Post1} alt="" />
                    <div className="post-item_content">
                      <h6>01 jan 2021</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                      </p>
                    </div>
                  </li>
                  <li className="post-item">
                    <img src={Post2} alt="" />
                    <div className="post-item_content">
                      <h6>01 jan 2021</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                      </p>
                    </div>
                  </li>
                  <li className="post-item">
                    <img src={Post3} alt="" />
                    <div className="post-item_content">
                      <h6>01 jan 2021</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="blog-categories">
              <div className="blog-sub-categories">
                <h6>Categories</h6>
                <div className="blog-categories_content">
                  <p>Consultation</p>
                  <p>Beauty</p>
                  <p>Treatments</p>
                  <p>News</p>
                </div>
              </div>
            </div>
            <div className="blog-cloud-tags">
              <div className="blog-cloud-sub-tags">
                <h6>Cloud Tags</h6>
                <ul className="blog-cloud-tags_list">
                  <li className="blog-cloud-tags_item">
                    <p>beauty</p>
                  </li>
                  <li className="blog-cloud-tags_item">
                    <p>cute</p>
                  </li>
                  <li className="blog-cloud-tags_item">
                    <p>skin</p>
                  </li>
                  <li className="blog-cloud-tags_item">
                    <p>glow</p>
                  </li>
                  <li className="blog-cloud-tags_item">
                    <p>style</p>
                  </li>
                  <li className="blog-cloud-tags_item">
                    <p>clinic</p>
                  </li>
                  <li className="blog-cloud-tags_item">
                    <p>style</p>
                  </li>
                  <li className="blog-cloud-tags_item">
                    <p>great</p>
                  </li>
                  <li className="blog-cloud-tags_item">
                    <p>cute</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="blog-social">
              <div className="blog-sub-social">
                <h6>Social Connect</h6>
                <ul className="list-blog-social_content">
                  <li className="list-blog-social_item">
                    <img src={FB} alt="img" />
                  </li>
                  <li className="list-blog-social_item">
                    <img src={TW} alt="img" />
                  </li>
                  <li className="list-blog-social_item">
                    <img src={IG} alt="img" />
                  </li>
                  <li className="list-blog-social_item">
                    <img src={IN} alt="img" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-pagination">
          <ul className="list-pagination">
            <li className="pagination-item">
              <p> 1 </p>
            </li>
            <li className="pagination-item">
              <p>2</p>
            </li>
            <li className="pagination-item">
              <p>3</p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>;
}
