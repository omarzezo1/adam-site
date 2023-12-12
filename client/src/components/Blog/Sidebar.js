import React from "react";
import { Link } from "react-router-dom";
import Topic1 from '../../images/imgs/blog/topic-1.jpg'
import Topic2 from '../../images/imgs/blog/topic-2.jpg'
import Topic3 from '../../images/imgs/blog/topic-3.jpg'
import Topic4 from '../../images/imgs/blog/topic-4.jpg'
import Topic5 from '../../images/imgs/blog/topic-5.jpg'

const Sidebar = () => {
  return (
    <aside className="side-bar">
      <div className="section-title">
        <h2>مواضيع تهمك</h2>
      </div>
      <div className="top-topics-wraper">
        <div className="topic">
          <div className="topic-img">
            <Link to="/blogs/blog">
              <img src={Topic1} alt="topic-1" />
            </Link>
          </div>
          <div className="topic-title">
            <Link to="/blogs/blog">4 طرق لتجنب الآم المفاصل وحمايتها</Link>
          </div>
        </div>

        <div className="topic">
          <div className="topic-img">
            <Link to="/blogs/blog">
              <img src={Topic2} alt="topic-2" />
            </Link>
          </div>
          <div className="topic-title">
            <Link to="/blogs/blog">هل أكل الخيار ليلا يزيد الوزن؟</Link>
          </div>
        </div>

        <div className="topic">
          <div className="topic-img">
            <Link to="/blogs/blog">
              <img src={Topic3} alt="topic-3" />
            </Link>
          </div>
          <div className="topic-title">
            <Link to="/blogs/blog">تمارين لتقوية عضلات الرجل في البيت</Link>
          </div>
        </div>

        <div className="topic">
          <div className="topic-img">
            <Link to="/blogs/blog">
              <img src={Topic4} alt="topic-4" />
            </Link>
          </div>
          <div className="topic-title">
            <Link to="/blogs/blog">هل البيض المقلي يزيد الوزن</Link>
          </div>
        </div>

        <div className="topic">
          <div className="topic-img">
            <Link to="/blogs/blog">
              <img src={Topic5} alt="topic-5" />
            </Link>
          </div>
          <div className="topic-title">
            <Link to="/blogs/blog">أعراض مقاومة الإنسولين للرجال</Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
