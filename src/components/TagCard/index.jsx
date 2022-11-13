import React from 'react'
import style from './tags.module.less'

const TagCard = props => {
  const { img, description, color, website, github, projectName } = props
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
                <b>{projectName}</b>
              </h4>
            </div>
            <p>{description}</p>
            <a target="__blank" href={website}>
              <i className="fa fa-globe" style={{ color: '#fcba02' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TagCard
