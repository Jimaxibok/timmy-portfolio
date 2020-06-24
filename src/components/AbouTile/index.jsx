import React from 'react';
import style from './about.module.less';

const AboutTile = (props) => {
  const {
    img, textH4, textH3, alt, height, width, a 
  } = props;
  return (
    <div className={style.aboutTile}>
      <div className={style.aboutBlock}>
        <img
          src={`../${img}`}
          height={height || 64}
          width={width || 64}
          alt={alt || ''}
        />
      </div>
      <div className={`textCenter ${style.mrTp26PX}`}>
        <h4>{ textH4 || ''}</h4>
        <h3>{textH3 || '' }</h3>
        <a href={a}>View</a>
      </div>
    </div>
  );
};

export default AboutTile;
