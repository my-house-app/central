import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import { FaRegTimesCircle } from 'react-icons/fa';
// eslint-disable-next-line import/extensions
import { getPanelFilteredProperties } from '../../../../../Redux/Actions/index.js';
import style from './FilterPosts.module.css';

function FilterPosts({ searched, filter }) {
  const initialState = {
    post_name: searched,
    prop_type: '',
    city: '',
    stratum: '',
    neighborhood: '',
    priceMin: '',
    priceMax: '',
    areaMin: '',
    areaMax: '',
    rooms: '',
    bathrooms: '',
    years: '',
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searched]);

 /*  function clear() {
    setQueryBlock(initialState);
    document.getElementById('form').reset();
  } */

  const [display, setDisplay] = useState(false);

  return (
    <div className={style.filter}>
      {/* <div type="button" className={style.closeIcon} onClick={clear}>
        <FaRegTimesCircle />
      </div> */}
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
              onChange={handlerQuery}
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
              onChange={handlerQuery}
            />
          </label>
        </div>

        {/* Price min y max */}
        <div className={style.field}>
          Price:&nbsp;
          <div className={style.from_to_ctn}>
            <div className={style.from_to}>
              from&nbsp;
              &nbsp;to&nbsp;
            </div>
            <input
              className={style.inputMinMax}
              type="text"
              name="priceMin"
              placeholder="min"
              value={queryBlock.priceMin}
              onChange={handlerQuery}
            />
            <input
              className={style.inputMinMax}
              type="text"
              name="priceMax"
              placeholder="max"
              value={queryBlock.priceMax}
              onChange={handlerQuery}
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
              value={queryBlock.rooms}
              onChange={handlerQuery}
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
              value={queryBlock.bathrooms}
              onChange={handlerQuery}
            />
          </label>
        </div>

        {/* Area min y max */}
        <div className={style.field}>
          Area:&nbsp;
          <div className={style.from_to_ctn}>
            <div className={style.from_to}>
              from&nbsp;
              &nbsp;to&nbsp;
            </div>
            <input
              className={style.inputMinMax}
              type="text"
              name="areaMin"
              placeholder="min"
              value={queryBlock.areaMin}
              onChange={handlerQuery}
            />
            <input
              className={style.inputMinMax}
              type="text"
              name="areaMax"
              placeholder="max"
              value={queryBlock.areaMax}
              onChange={handlerQuery}
            />
          </div>
        </div>

        {/* Stratum */}
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
              onChange={handlerQuery}
            />
          </label>
        </div>

        {/* Type of property */}
        <div className={style.field}>
          <select className={style.selectFilter} name="prop_type" value={queryBlock.prop_type} onChange={handlerQuery}>
            <option value="">Type of property</option>
            {['Casa', 'Apartamento'].map((type) => (<option value={type}>{type}</option>))}
            {/* {['Barrio', 'Antigüedad'].map((g) =>
            (<option key={g.id} value={g.name}>{g.name}</option>))} */}
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
              onChange={handlerQuery}
              min="0"
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
  filter: (queryBlock) => dispatch(getPanelFilteredProperties(queryBlock)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterPosts);
