import React from 'react';
import classNames from 'classnames/bind';
import NewLeft from './Components/NewLeft/NewLeft';
import NewRight from './Components/NewRight/NewRight';
import style from './New.module.css';

const cx = classNames.bind(style);

function New() {
  return (
    <>
      <main className={cx('mt-5')}>
        <div className={cx('container')}>
        <h3 className={cx('mb-5')}>TIN TỨC</h3>
          <div className={cx('row')}>
            <div className={cx('col-md-8', "p-0")}>
              <div className={cx('container', "row")}>
                <NewLeft/>
              </div>
            </div>
            <div className={cx('col-md-4', "p-0")}>
              <NewRight/>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default New;