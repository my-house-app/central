/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FaRegTimesCircle } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import style from './Filter.module.css';
import { getFilteredPropierties } from '../../Redux/Actions';

function Filter({
  searched, filter, orderProp, orderType,
}) {
  const history = useHistory();
  const querystring = window.location.search;// '?post_name=cas&rooms=3&page=4&bathrooms=0'
  const params = new URLSearchParams(querystring);
  const [URL, setURL] = useState('');
  const initialState = {
    post_name: searched, // search by postName
    prop_type: '', // select
    city: '', // input
    stratum: '', // select es un numero
    neighborhood: '', // input
    priceMin: '',
    priceMax: '',
    areaMin: '',
    areaMax: '',
    rooms: '', // input number
    bathrooms: '', // input number
    years: '', // input number
    pool: false,
    backyard: false,
    gym: false,
    bbq: false,
    parking_lot: false,
    elevator: false,
    security: false,
    garden: false,
    atributo: orderProp, // tipo de propiedad para ordenar
    orden: orderType, // modo a ordenar
  };
  const [queryBlock, setQueryBlock] = useState(initialState);

  function changeURL(event) {
    // console.log('window.location.search: ', window.location);
    params.set(event.target.name, event.target.value);
    history.push(`/home?${params.toString()}`);
    setURL(window.location.href);
  }

  useEffect(() => {
    params.set('post_name', searched);
    params.set('orden', orderType);
    params.set('atributo', orderProp);
    if (!params.get('post_name')) {
      params.delete('post_name');
    }
    if (!params.get('orden')) {
      params.delete('orden');
    }
    if (!params.get('atributo')) {
      params.delete('atributo');
    }
    history.push(`/home?${params.toString()}`);
    setQueryBlock({
      ...queryBlock,
      post_name: searched,
      atributo: orderProp,
      orden: orderType,
    });// filter busca a la api externa
    filter({
      ...queryBlock,
      post_name: searched,
      atributo: orderProp,
      orden: orderType,
    });
  }, [searched, orderProp, orderType]);

  useEffect(() => {
    console.log('Hay cambios en la URL: ', URL);
    const paramsKeys = Object.keys(queryBlock);
    // traigo todos los valores del path y los pongo en mi queryBlock
    for (let i = 0; i < paramsKeys.length; i++) {
      queryBlock[paramsKeys[i]] = params.get(paramsKeys[i]);
      // elimino una query en el params si es null
      if (!params.get(paramsKeys[i])) {
        params.delete(paramsKeys[i]);
        history.push(`/home?${params.toString()}`);
      }
    }

    setQueryBlock({
      ...queryBlock,
      post_name: searched,
      atributo: orderProp,
      orden: orderType,
    });
    filter({
      ...queryBlock,
      post_name: searched,
      atributo: orderProp,
      orden: orderType,
    });
  }, [URL]);

  function clear() {
    history.push('/home');
    setQueryBlock(initialState);
    filter({});
    document.getElementById('form').reset();
  }

  const [display, setDisplay] = useState(false);

  return (
    <div className={style.filter}>
      <div type="button" className={style.closeIcon} onClick={clear}>
        <FaRegTimesCircle />
      </div>
      <form id="form" className={style.form}>
        {/* City */}
        <div className={style.field}>
          <label>
            City:&nbsp;
            <input
              className={style.inputFilter}
              type="text"
              name="city"
              placeholder="City"
              value={queryBlock.city}
              onChange={changeURL}
            />
          </label>
        </div>

        {/* Neighborhood */}
        <div className={style.field}>
          <label>
            Neighborhood:
            <input
              className={style.inputFilter}
              type="text"
              name="neighborhood"
              placeholder="Neighborhood"
              value={queryBlock.neighborhood}
              onChange={changeURL}
            />
          </label>
        </div>

        {/* Price min y max */}
        <div className={style.field}>
          Price:&nbsp;
          <div className={style.from_to}>
            from&nbsp;
            <input
              className={style.inputMinMax}
              type="text"
              name="priceMin"
              placeholder="min"
              value={queryBlock.priceMin}
              onChange={changeURL}
            />
            &nbsp;to&nbsp;
            <input
              className={style.inputMinMax}
              type="text"
              name="priceMax"
              placeholder="max"
              value={queryBlock.priceMax}
              onChange={changeURL}
            />
          </div>
        </div>

        {/* Rooms  */}
        <div className={style.field}>
          <label>
            Rooms:&nbsp;
            <input
              className={style.inputMinMax}
              type="number"
              name="rooms"
              placeholder="0"
              min="0"
              value={queryBlock.rooms}
              onChange={changeURL}
            />
          </label>
        </div>

        {/* Bathrooms */}
        <div className={style.field}>
          <label>
            Bathrooms:&nbsp;
            <input
              className={style.inputMinMax}
              type="number"
              name="bathrooms"
              placeholder="0"
              min="0"
              value={queryBlock.bathrooms}
              onChange={changeURL}
            />
          </label>
        </div>

        {/* Area min y max */}
        <div className={style.field}>
          Area:&nbsp;
          <div className={style.from_to}>
            from&nbsp;
            <input
              className={style.inputMinMax}
              type="text"
              name="areaMin"
              placeholder="min"
              value={queryBlock.areaMin}
              onChange={changeURL}
            />
            &nbsp;to&nbsp;
            <input
              className={style.inputMinMax}
              type="text"
              name="areaMax"
              placeholder="max"
              value={queryBlock.areaMax}
              onChange={changeURL}
            />
          </div>
        </div>

        {/* Stratum */}
        {/* Hay que cambiarlo debería ser un input type number */}
        <div className={style.field}>
          <label>
            Stratum:  &nbsp;
            <input
              className={style.inputMinMax}
              type="number"
              name="stratum"
              placeholder="0"
              min="0"
              max="6"
              value={queryBlock.stratum}
              onChange={changeURL}
            />
          </label>
        </div>

        {/* Type of property */}
        <div className={style.field}>
          <select className={style.selectFilter} name="prop_type" value={queryBlock.prop_type} onChange={changeURL}>
            <option>Type of property</option>
            {['Casa', 'Apartamento'].map((type, i) => (<option key={i} value={type}>{type}</option>))}
          </select>
        </div>

        {/* years */}
        <div className={style.field}>
          <label>
            Years:  &nbsp;
            <input
              className={style.inputMinMax}
              type="number"
              name="years"
              value={queryBlock.years}
              min="0"
              onChange={changeURL}
            />
          </label>
        </div>

        {/* Facilities */}
        <div className={style.field} onClick={() => setDisplay(!display)}>
          <p className={style.tit_facilities}>
            Other facilities
          </p>
        </div>
        <div className={display ? style.facilities : style.noFacilities}>
          <input type="checkbox" onChange={changeURL} name="pool" value={!queryBlock.pool} />
          <label htmlFor="pool"> Swimming pool</label>
          <br />
          <input type="checkbox" onChange={changeURL} name="backyard" value={!queryBlock.backyard} />
          <label htmlFor="backyard"> Backyard</label>
          <br />
          <input type="checkbox" onChange={changeURL} name="gym" value={!queryBlock.gym} />
          <label htmlFor="gym"> Gym</label>
          <br />
          <input type="checkbox" onChange={changeURL} name="bbq" value={!queryBlock.bbq} />
          <label htmlFor="bbq"> Barbecue</label>
          <br />
          <input type="checkbox" onChange={changeURL} name="parking_lot" value={!queryBlock.parking_lot} />
          <label htmlFor="parking_lot"> Parking lot</label>
          <br />
          <input type="checkbox" onChange={changeURL} name="elevator" value={!queryBlock.elevator} />
          <label htmlFor="elevator"> Elevator</label>
          <br />
          <input type="checkbox" onChange={changeURL} name="security" value={!queryBlock.security} />
          <label htmlFor="secutiry"> Security</label>
          <br />
          <input type="checkbox" onChange={changeURL} name="garden" value={!queryBlock.garden} />
          <label htmlFor="garden"> Garden</label>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  searched: state.searched,
  orderProp: state.orderProp,
  orderType: state.orderType,
});

const mapDispatchToProps = (dispatch) => ({
  filter: (queryBlock) => dispatch(getFilteredPropierties(queryBlock)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
