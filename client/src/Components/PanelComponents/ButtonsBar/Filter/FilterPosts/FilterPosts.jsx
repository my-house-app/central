import React, { useEffect, useState } from 'react';
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import { FaRegTimesCircle } from 'react-icons/fa';
// eslint-disable-next-line import/extensions
import { useHistory } from 'react-router-dom';
import style from './FilterPosts.module.css';

function FilterPosts() {
  const history = useHistory();
  const querystring = window.location.search;
  const params = new URLSearchParams(querystring);
  const initialState = {
    post_name: '',
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
  // console.log('renderizando FilterPosts:');
  const [queryBlock, setQueryBlock] = useState(initialState);

 /*  function clear() {
    setQueryBlock(initialState);
    document.getElementById('form').reset();
  } */

  const [display, setDisplay] = useState(false);
  
  function handlerQueryBlock(event) {
    setQueryBlock({ 
      ...queryBlock,
      [event.target.name]: event.target.value,
    });

  }

  function sendForm(e) {
    e.preventDefault();
    const keysQueryBlock = Object.keys(queryBlock);

    for (let i = 0; i < keysQueryBlock.length; i++) {
      const key = keysQueryBlock[i];

      if (queryBlock[keysQueryBlock[i]]) {
        params.set(key, queryBlock[key]);
        updatePath(params);
      } else  {
        params.delete(key);
        updatePath(params);
      }
    }

  }
  useEffect(() => {
    for(var key of params.keys()) {
        queryBlock[key] = params.get(key);
    }
    setQueryBlock({ ...queryBlock });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


// // forma optimizada para el filtro de home
//   function changeURL(event) {
//     console.log("changeURL")
//     params.set(event.target.name, event.target.value);
//     updatePath(params);
//     setURL(window.location.href);
//   }

//   useEffect(() => {
//     // document.getElementById('filters').className = 'openFilter';
//     console.log('Hay cambios en la URL: ', URL);
//     console.log('params.keys: ', params.keys());
//     for(var key of params.keys()) {
//       if (!params.get(key)) {
//         console.log('eliminando: ', key);
//         params.delete(key);
//         updatePath(params);
//       }
//         queryBlock[key] = params.get(key);
//     }
//     setQueryBlock({ ...queryBlock });
//   }, [URL]);


  function updatePath(params) {
    history.push(`${window.location.pathname}?${params.toString()}`);
  }
  return (
    <div className={style.filter}>
      {/* <div type="button" className={style.closeIcon} onClick={clear}>
        <FaRegTimesCircle />
      </div> */}
      <form id="form" className={style.form}>
      <button type="submit" onClick={sendForm}> Enviar </button>
        {/* post_name */}
        <div className={style.field}>
          <label>
            Title:&nbsp;
            <input
              className={style.inputFilter}
              type="text"
              name="post_name"
              placeholder="title"
              value={queryBlock.post_name}
              onChange={handlerQueryBlock}
            />
          </label>
        </div>
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
              onChange={handlerQueryBlock}
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
              onChange={handlerQueryBlock}
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
              onChange={handlerQueryBlock}
            />
            <input
              className={style.inputMinMax}
              type="text"
              name="priceMax"
              placeholder="max"
              value={queryBlock.priceMax}
              onChange={handlerQueryBlock}
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
              onChange={handlerQueryBlock}
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
              onChange={handlerQueryBlock}
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
              onChange={handlerQueryBlock}
            />
            <input
              className={style.inputMinMax}
              type="text"
              name="areaMax"
              placeholder="max"
              value={queryBlock.areaMax}
              onChange={handlerQueryBlock}
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
              onChange={handlerQueryBlock}
            />
          </label>
        </div>

        {/* Type of property */}
        <div className={style.field}>
          <select className={style.selectFilter} name="prop_type" value={queryBlock.prop_type} onChange={handlerQueryBlock}>
            <option value="">Type of property</option>
            {['Casa', 'Apartamento'].map((type) => (<option value={type}>{type}</option>))}
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
              onChange={handlerQueryBlock}
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
          <input type="checkbox" onChange={handlerQueryBlock} name="pool" value={!queryBlock.pool} />
          <label htmlFor="pool"> Swimming pool</label>
          <br />
          <input type="checkbox" onChange={handlerQueryBlock} name="backyard" value={!queryBlock.backyard} />
          <label htmlFor="backyard"> Backyard</label>
          <br />
          <input type="checkbox" onChange={handlerQueryBlock} name="gym" value={!queryBlock.gym} />
          <label htmlFor="gym"> Gym</label>
          <br />
          <input type="checkbox" onChange={handlerQueryBlock} name="bbq" value={!queryBlock.bbq} />
          <label htmlFor="bbq"> Barbecue</label>
          <br />
          <input type="checkbox" onChange={handlerQueryBlock} name="parking_lot" value={!queryBlock.parking_lot} />
          <label htmlFor="parking_lot"> Parking lot</label>
          <br />
          <input type="checkbox" onChange={handlerQueryBlock} name="elevator" value={!queryBlock.elevator} />
          <label htmlFor="elevator"> Elevator</label>
          <br />
          <input type="checkbox" onChange={handlerQueryBlock} name="security" value={!queryBlock.security} />
          <label htmlFor="secutiry"> Security</label>
          <br />
          <input type="checkbox" onChange={handlerQueryBlock} name="garden" value={!queryBlock.garden} />
          <label htmlFor="garden"> Garden</label>
        </div>
      </form>
    </div>
  );
}

export default React.memo(FilterPosts);
