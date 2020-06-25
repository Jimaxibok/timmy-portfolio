import React from 'react';
import { Link } from 'gatsby';
import Config from '../../../config';
import Utils from '../../utils/pageUtils';
import style from './tags.module.less';

const TagCard = (props) => {
  const {
    img, name, description, color, href,
  } = props;
  const tagPage = Config.pages.tag;
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
            <a target="__blank" to={href}>View Project</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagCard;
