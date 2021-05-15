/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAvailableFilteredPropierties } from '../../Redux/Actions/index';
import './Paginacion.css';

function Paginacion({
  count, paginaActual, limit, functionNext = getAvailableFilteredPropierties, path = '/home',
}) {
  const dispatch = useDispatch();
  const ultimaPagina = Math.ceil(count / limit);
  const [listaDePaginas, setListaDePaginas] = useState(range(ultimaPagina));
  const primeraPagina = 1;
  const history = useHistory();

  const querystring = window.location.search;
  const params = new URLSearchParams(querystring);

  // endpoint = `http://localhost:3001/posts?offset=45`;
  useEffect(() => {
    // console.log("object 3")
    setListaDePaginas(range(ultimaPagina));// [1,2,3,4,...,100]
  }, [count]);

  function paginate(numero) {
    const parameters = window.location.search.slice(1).split('&');
    const offset = (numero * limit) - limit;
    // console.log('window.location.search:', window.location.search);
    // console.log('parameters:', parameters);
    if (parameters.length) {
      parameters.forEach((param) => {
        // console.log('param.split("=")[0]: ', param.split('=')[0]);
        // console.log('param.split("=")[1]: ', param.split('=')[1]);
        if (param.split('=')[0] === 'orden' || param.split('=')[0] === 'atributo') {
          params.set(`${param.split('=')[0]}`, param.split('=')[1]);
        }
      });
    }
    params.set('page', numero);
    history.push(`${path}?${params.toString()}`);
    dispatch(functionNext());
    window.scrollTo(0, 0);
  }

  // intentar mejorarlo
  // intentar usar use memo
  // eslint-disable-next-line consistent-return
  function updateNumeroDePaginas(numero) {
    console.log('updateNumeroDePaginas: ', numero);
    if (numero === 1 || numero === 2) {
      return listaDePaginas.slice(0, 5);
    }

    if (numero > 2 && numero !== ultimaPagina) {
      return listaDePaginas.slice(numero - 3, numero + 2);
    }

    if (numero === ultimaPagina) {
      // si no es mayor que 0 devuelvo 0
      const pagina = (ultimaPagina - 4) >= 0 ? ultimaPagina - 4 : 0;
      return listaDePaginas.slice(pagina, ultimaPagina);
    }
  }

  return (
    <div>
      <b style={{
        color: '#b4c2cd', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: '6px 0 0 0',
      }}
      >
        Page:
        {paginaActual}
        {' '}
        from
        {ultimaPagina}
      </b>
      {ultimaPagina > 1
                && (
                  <ul className="paginacion">

                    <strong style={{ color: '#b4c2cd' }}> Pages:</strong>
                    {paginaActual > primeraPagina
                        && (
                          <>
                            <li id="li-first">
                              <a onClick={() => paginate(primeraPagina)} className="page-link">
                                {' '}
                                <strong>First</strong>
                                {' '}
                              </a>
                            </li>
                            <li id="li-previous">
                              <a onClick={() => paginate(paginaActual - 1)} className="page-link">
                                {' '}
                                <strong>Previuos</strong>
                                {' '}
                              </a>
                            </li>
                          </>
                        )}

                    {updateNumeroDePaginas(paginaActual)?.map((numero) => (
                      numero === paginaActual

                        ? (
                          <li key={numero} className="number-page">
                            <strong style={{ color: '#b4c2cd' }}>{numero}</strong>
                          </li>
                        )
                        : (
                          <li key={numero} className="number-page-selected">
                            <a onClick={() => paginate(numero)} className="page-link">
                              <strong>{numero}</strong>
                            </a>
                          </li>
                        )
                    ))}

                    {paginaActual < ultimaPagina
                        && (
                          <>
                            <li id="li-next">
                              <a onClick={() => paginate(paginaActual + 1)} className="page-link">
                                <strong>
                                  Next
                                  {' '}
                                </strong>
                              </a>
                            </li>
                            <li id="li-Last">
                              <a onClick={() => paginate(ultimaPagina)} className="page-link">
                                <strong>Last</strong>
                              </a>
                            </li>
                          </>
                        )}
                  </ul>
                )}
    </div>
  );
}

export default React.memo(Paginacion);

function range(ultimaPagina) {
  const listaDePaginas = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= ultimaPagina; i++) {
    listaDePaginas.push(i);
  }
  return listaDePaginas;// [1,2,3,4,...,100]
}
