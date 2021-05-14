import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonOptions from '../ButtonOptions/ButtonOptions';
import style from './TablePage.module.css';

export default function TableRow({
  column1, column2Link, column3, path, buttonPath, id, buttonRole,
}) {
  return (
    <tr>
      <td>{column1}</td>
      <td>
        <NavLink to={`/panel/${buttonRole}/${path}/${column2Link}`} className={style.link}>
          {column2Link}
        </NavLink>
      </td>
      <td>{column3}</td>
      <td>
        <ButtonOptions
          buttonRole={buttonRole}
          id={id}
          buttonPath={buttonPath}
        />
      </td>
    </tr>
  );
}
