/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import style from './Filter.module.css';
import { getAllPost, getFilteredPropierties } from '../../Redux/Actions';

function Filter({ searched, filter, getAllPost }) {
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
  };
  const [queryBlock, setQueryBlock] = useState(initialState);

  function handlerQuery(event) {
    setQueryBlock(
      {
        ...queryBlock,
        [event.target.name]: event.target.value,
        searched,
      },
    );
    filter({
      ...queryBlock,
      [event.target.name]: event.target.value,
    });
  }

  useEffect(() => {
    setQueryBlock({
      ...queryBlock,
      post_name: searched,
    });
    filter({
      ...queryBlock,
      post_name: searched,
    });
  }, [searched]);

  function clear() {
    setQueryBlock(initialState);
    document.getElementById('form').reset();
    getAllPost();
  }

  const [display, setDisplay] = useState(false);

  return (
    <div className={style.filter}>
      <button type="button" id={style.closeIcon} onClick={clear}>
        <strong>X</strong>
      </button>
      <form id="form" style={{ display: 'flex', flexDirection: 'column' }}>
        {/* City */}
        <label>
          City:&nbsp;
          <input
            className={style.inputFilter}
            type="text"
            name="city"
            placeholder="City"
            value={queryBlock.city}
            onChange={handlerQuery}
          />
        </label>

        {/* Neighborhood */}
        <label>
          Neighborhood:&nbsp;
          <input
            className={style.inputFilter}
            type="text"
            name="neighborhood"
            placeholder="Neighborhood"
            value={queryBlock.neighborhood}
            onChange={handlerQuery}
          />
        </label>

        {/* Price min y max */}
        <label>
          Price:&nbsp;
          &nbsp;from&nbsp;
          <input
            className={style.inputMinMax}
            type="text"
            name="priceMin"
            placeholder="price min"
            value={queryBlock.priceMin}
            onChange={handlerQuery}
          />
          &nbsp;to&nbsp;
          <input
            className={style.inputMinMax}
            type="text"
            name="priceMax"
            placeholder="price max"
            value={queryBlock.priceMax}
            onChange={handlerQuery}
          />
        </label>

        {/* Rooms  */}
        <label>
          Rooms:&nbsp;
          <input
            className={style.inputMinMax}
            type="number"
            name="rooms"
            placeholder="0"
            value={queryBlock.rooms}
            onChange={handlerQuery}
          />
        </label>

        {/* Bathrooms */}
        <label>
          Bathrooms:&nbsp;
          <input
            className={style.inputMinMax}
            type="number"
            name="bathrooms"
            placeholder="0"
            value={queryBlock.bathrooms}
            onChange={handlerQuery}
          />
        </label>

        {/* Area min y max */}
        <label>
          Area:&nbsp;
          &nbsp;from&nbsp;
          <input
            className={style.inputMinMax}
            type="text"
            name="areaMin"
            placeholder=" min"
            value={queryBlock.areaMin}
            onChange={handlerQuery}
          />
          &nbsp;to&nbsp;
          <input
            className={style.inputMinMax}
            type="text"
            name="areaMax"
            placeholder=" max"
            value={queryBlock.areaMax}
            onChange={handlerQuery}
          />
        </label>

        {/* Stratum */}
        {/* Hay que cambiarlo debería ser un input type number */}
        <label>
          Stratum:&nbsp;
          <input
            className={style.inputMinMax}
            type="number"
            name="stratum"
            placeholder="0"
            min="0"
            max="6"
            value={queryBlock.stratum}
            onChange={handlerQuery}
          />
        </label>

        {/* Type of property */}
        <select className={style.selectFilter} name="prop_type" value={queryBlock.prop_type} onChange={handlerQuery}>
          <option value="">Type of property</option>
          {['Casa', 'Apartamento'].map((type) => (<option value={type}>{type}</option>))}
          {/* {['Barrio', 'Antigüedad'].map((g) =>
          (<option key={g.id} value={g.name}>{g.name}</option>))} */}
        </select>

        {/* years */}
        <label>
          Years:&nbsp;
          <input
            type="number"
            name="years"
            placeholder="years"
            value={queryBlock.years}
            onChange={handlerQuery}
          />
        </label>
        <label onClick={() => setDisplay(!display)}>
          Other facilities
        </label>
        <div className={display ? style.facilities : style.noFacilities}>
          <input type="checkbox" onChange={handlerQuery} name="pool" value={!queryBlock.pool} />
          <label htmlFor="pool"> Swimming pool</label>
          <br />
          <input type="checkbox" onChange={handlerQuery} name="backyard" value={!queryBlock.backyard} />
          <label htmlFor="backyard"> Backyard</label>
          <br />
          <input type="checkbox" onChange={handlerQuery} name="gym" value={!queryBlock.gym} />
          <label htmlFor="gym"> Gym</label>
          <br />
          <input type="checkbox" onChange={handlerQuery} name="bbq" value={!queryBlock.bbq} />
          <label htmlFor="bbq"> Barbecue</label>
          <br />
          <input type="checkbox" onChange={handlerQuery} name="parking_lot" value={!queryBlock.parking_lot} />
          <label htmlFor="parking_lot"> Parking lot</label>
          <br />
          <input type="checkbox" onChange={handlerQuery} name="elevator" value={!queryBlock.elevator} />
          <label htmlFor="elevator"> Elevator</label>
          <br />
          <input type="checkbox" onChange={handlerQuery} name="security" value={!queryBlock.security} />
          <label htmlFor="secutiry"> Security</label>
          <br />
          <input type="checkbox" onChange={handlerQuery} name="garden" value={!queryBlock.garden} />
          <label htmlFor="garden"> Garden</label>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  searched: state.searched,
});

const mapDispatchToProps = (dispatch) => ({
  filter: (queryBlock) => dispatch(getFilteredPropierties(queryBlock)),
  getAllPost: () => dispatch(getAllPost()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
