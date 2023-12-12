import React from "react";
import Post1 from "../../images/imgs/blog/post-1.jpg";
import Post2 from "../../images/imgs/blog/post-2.jpg";
import Post3 from "../../images/imgs/blog/post-3.jpg";
import Post4 from "../../images/imgs/blog/post-5.webp";
import Post5 from "../../images/imgs/blog/post-5.jpg";

import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const LatestBlog = () => {
  return (
    <main className="main-section" dir="rtl">
      <div className="container">
        <section className="latest-news-container">
          <div className="section-title">
            <h2>أحدث المقالات</h2>
            <div className="articles-wraper">
              <article className="main-article">
                <Link to="/blogs/blog">
                  <div className="article-img">
                    <span className="category">التغذية</span>
                    <img src={Post1} alt="post-1" />
                  </div>
                </Link>
                <div className="descbox">
                  <div className="title">
                    <a href="">
                      فوائد العسل الابيض وهل من الممكن تناوله في التخسيس
                    </a>
                  </div>
                  <div className="desc">
                    <p>
                      التخلص من الكرش بتمارين الحديد يحتاج إلى مجموعة من الخطوات
                      السهلة والبسيطة والتي يمكنك تنفيذها بسهولة لتجد تغيير سريع
                      في حجم الكرش ودهون الجسم.
                    </p>
                  </div>
                </div>
              </article>

              <div className="thumbnails-wraper">
                <article className="thumbnail-article">
                  <Link to="/blogs/blog">
                    <div className="article-img">
                      <span className="category">كمال الأجسام</span>
                      <img src={Post2} alt="post-2" />
                    </div>
                  </Link>
                  <div className="descbox">
                    <div className="title">
                      <a href="">هل أكل الخيار ليلا يزيد الوزن؟</a>
                    </div>
                    <div className="desc">
                      <p>
                        الخيار من أنواع الخضروات المشبعة في الرجيم، ولكن هل أكل
                        الخيار في الليل يمكن أن يسبب زيادة الوزن أو بطئ في معدل
                        حرق دهون الجسم؟.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="thumbnail-article">
                  <Link to="/blogs/blog">
                    <div className="article-img">
                      <span className="category">كمال الأجسام</span>
                      <img src={Post3} alt="post-3" />
                    </div>
                  </Link>
                  <div className="descbox">
                    <div className="title">
                      <a href="">البروتين شيك | ما هي أنوعه؟</a>
                    </div>
                    <div className="desc">
                      <p>
                        البروتين شيك أو مشروب البروتين هو وسيلة سهلة وفعالة
                        للرياضيين ولاعبي كمال الاجسام للحصول على نسبة من
                        البروتين لإكمال الحاجة اليومية من البروتين، وهناك أنواع
                        مختلفة من البروتين شيك والتي تختلف فيما بينها من ناحية
                        المكونات والقيمة الغذائية.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="thumbnail-article">
                  <Link to="/blogs/blog">
                    <div className="article-img">
                      <span className="category">كمال الأجسام</span>
                      <img src={Post4} alt="post-4" />
                    </div>
                  </Link>
                  <div className="descbox">
                    <div className="title">
                      <a href="">البروتين شيك | ما هي أنوعه؟</a>
                    </div>
                    <div className="desc">
                      <p>
                        البروتين شيك أو مشروب البروتين هو وسيلة سهلة وفعالة
                        للرياضيين ولاعبي كمال الاجسام للحصول على نسبة من
                        البروتين لإكمال الحاجة اليومية من البروتين، وهناك أنواع
                        مختلفة من البروتين شيك والتي تختلف فيما بينها من ناحية
                        المكونات والقيمة الغذائية.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="thumbnail-article">
                  <Link to="/blogs/blog">
                    <div className="article-img">
                      <span className="category">كمال الأجسام</span>
                      <img src={Post5} alt="post-5" />
                    </div>
                  </Link>
                  <div className="descbox">
                    <div className="title">
                      <a href="">البروتين شيك | ما هي أنوعه؟</a>
                    </div>
                    <div className="desc">
                      <p>
                        البروتين شيك أو مشروب البروتين هو وسيلة سهلة وفعالة
                        للرياضيين ولاعبي كمال الاجسام للحصول على نسبة من
                        البروتين لإكمال الحاجة اليومية من البروتين، وهناك أنواع
                        مختلفة من البروتين شيك والتي تختلف فيما بينها من ناحية
                        المكونات والقيمة الغذائية.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="more-articles">
            <Link to="/blogs/all-articles">أحدث المقالات</Link>
          </div>
        </section>
        <Sidebar />
      </div>
    </main>
  );
};

export default LatestBlog;
