import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonOptions from '../ButtonOptions/ButtonOptions';
import style from './TableRow.module.css';

function TableRow({
  column1, column2Link, column3, path, id,
}) {
  return (
    <tr>
      <td>{column1}</td>
      <td>
        <NavLink to={`/admin/${path}/${column2Link}`} className={style.link}>
          {column2Link}
        </NavLink>
      </td>
      <td>{column3}</td>
      <td>
        <ButtonOptions
          id={id}
          path="posts"
        />
      </td>
    </tr>
  );
}

export default TableRow;
