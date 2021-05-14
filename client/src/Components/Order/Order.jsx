import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { getFilteredPropierties, orderBy } from '../../Redux/Actions';
import style from './Order.module.css';

function Orders({ sorting, filter }) {
  const history = useHistory();
  const querystring = window.location.search;
  const params = new URLSearchParams(querystring);

  useEffect(() => {
    if (!params.get('orden')) {
      params.delete('orden');
    }
    if (!params.get('atributo')) {
      params.delete('atributo');
    }
  });

  function handleOrder(e) {
    // console.log('e.target.value: ', e.target.value);
    const [prop, type] = e.target.value.split('_');
    const parameters = window.location.search ? window.location.search.slice(1).split('&') : null;
    const queryBlock = {};
    // console.log('window.location.search:', window.location.search);
    // console.log('parameters:', parameters);
    if (parameters) {
      parameters.forEach((param) => {
        // console.log('param: ', param);
        if (param.split('=')[0] !== 'page') {
          // eslint-disable-next-line prefer-destructuring
          queryBlock[`${param.split('=')[0]}`] = param.split('=')[1];
          params.set(`${param.split('=')[0]}`, param.split('=')[1]);
        }
      });
    }
    // console.log('queryBlock:', queryBlock);
    history.push(`/home?${params.toString()}`);
    sorting({ prop, type });
    filter(queryBlock);
  }

  return (
    <div className={style.selectNav}>
      <div className={style.selectMenu}>
        <select name="filters" value="" onChange={(e) => handleOrder(e)}>
          <option value="" disabled hidden>Sort</option>
          <optgroup label="Price">
            <option name="price_ASC" value="price_ASC">- to +</option>
            <option name="price_DESC" value="price_DESC">+ to -</option>
          </optgroup>
          <optgroup label="Rooms">
            <option name="rooms_ASC" value="rooms_ASC">- to +</option>
            <option name="rooms_DESC" value="rooms_DESC">+ to -</option>
          </optgroup>
        </select>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    sorting: (order) => dispatch(orderBy(order)),
    filter: (queryBlock) => dispatch(getFilteredPropierties(queryBlock)),
  };
}

export default connect(null, mapDispatchToProps)(Orders);
