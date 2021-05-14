/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Paginacion from '../../Paginacion/Paginacion';
import ButtonOptions from '../ButtonOptions/ButtonOptions';
import TableRows from './TableRow';
import style from './TablePage.module.css';

function TablePage({
  tableName,
  columns,
  data,
  buttonRole,
  buttonPath,
  path,
  count,
  paginaActual,
  limit,
  functionNext,
  selfEndpoint,
  pagsPath,

}) {
  return (
    <>
      <table className={style.ctnList}>
        <caption>{tableName}</caption>
        <thead>
          <tr>
            {columns && (columns.map((col) => (
              <td>{col}</td>
            )))}
          </tr>
        </thead>
        <tbody>
          {data?.map((e) => (
            <TableRows
              column1={e.post_name}
              column2Link={e.userId}
              column3={e.city}
              id={e.id}
              buttonPath={buttonPath}
              buttonRole={buttonRole}
              path={path}
            />
          ))}
        </tbody>
      </table>
      {count && (
        <Paginacion
          count={count}
          paginaActual={paginaActual}
          limit={limit}
          functionNext={functionNext}
          self={selfEndpoint}
          path={pagsPath}
        />
      )}
    </>
  );
}

export default TablePage;
