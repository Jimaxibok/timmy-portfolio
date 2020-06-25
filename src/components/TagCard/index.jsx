import React from 'react';
import style from './tags.module.less';

const TagCard = (props) => {
  const {
    img, name, description, color, href,
  } = props;
  return (
    <div>
      <div className={style.tagCard}>
        <div className={style.tagCard}>
          <div
            className={style.tagImg}
            style={{
              backgroundImage: `url(${img})`,
            }}
          />
          <div className={style.pd20px}>
            <div className="textCenter">
              <h4 style={{ color: `${color}` }}>
                #
                {name}
              </h4>
            </div>
            <p>
              {description}
            </p>
            <a target="__blank" href={href}>View Project<i className="fa fa-globe"></i></a>
            <a target="__blank" href={href}>View Github<i className="fa fa-github"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagCard;
