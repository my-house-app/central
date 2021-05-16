import React from 'react';
import Paginacion from '../../Paginacion/Paginacion';
import ButtonsBar from '../ButtonsBar/ButtonsBar';
import TableRows from './TableRow';
import style from './TablePage.module.css';

function TablePage({
  deleteAction,
  tableName,
  columns,
  data,
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
      <ButtonsBar tableName={tableName} />
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
              deleteAction={deleteAction}
              column1={e.column1}
              displayLink={e.displayLink}
              link={e.link}
              column2={e.column2}
              column3={e.column3}
              id={e.id}
              buttonPath={buttonPath}
              path={path}
            />
          ))}
        </tbody>
      </table>
      {/*  {count && (
        <Paginacion
          count={count}
          paginaActual={paginaActual}
          limit={limit}
          functionNext={functionNext}
          self={selfEndpoint}
          path={pagsPath}
        />
      )} */}
    </>
  );
}

export default TablePage;
