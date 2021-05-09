import React from 'react';
import style from './Order.module.css';

export default function Orders() {
  return (
    <div className={style.selectNav}>
      <div className={style.selectMenu}>
        <select name="filters" id="filters" value="">
          <option value="" disabled hidden>Sort</option>
          <optgroup label="Alphabetic">
            <option value="al-asc">A - Z</option>
            <option defaultValue value="al-desc">Z - A</option>
          </optgroup>
          <optgroup label="Weight">
            <option value="w-asc">Asc</option>
            <option value="w-desc">Desc</option>
          </optgroup>
        </select>
      </div>
    </div>
  );
}
