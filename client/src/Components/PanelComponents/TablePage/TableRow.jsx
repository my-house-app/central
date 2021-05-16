import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonOptions from '../ButtonOptions/ButtonOptions';
import style from './TablePage.module.css';

export default function TableRow({
  column1, displayLink, link, column2, column3,
  path, buttonPath, id, buttonRole, deleteAction,
}) {
  return (
    <tr>
      <td>{column1}</td>
      {displayLink
        ? (
          <td>
            <NavLink to={`/panel/${buttonRole}/${path}/${link}`} className={style.link}>
              {column2}
            </NavLink>
          </td>
        )
        : (
          <td>
            { column2 }
          </td>
        )}
      <td>{column3}</td>
      <td>
        <ButtonOptions
          deleteAction={deleteAction}
          buttonRole={buttonRole}
          id={id}
          buttonPath={buttonPath}
        />
      </td>
    </tr>
  );
}
