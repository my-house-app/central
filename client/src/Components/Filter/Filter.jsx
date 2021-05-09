/* eslint-disable no-console */
import React, { useState } from 'react';
import './Filter.css';
import { useDispatch } from 'react-redux';
import { detailPokemon, getFilteredPropierties } from '../../Redux/Actions';
/**
Puedo filtrar por
city
stratum
neighborhood
price
m2
rooms
bathrooms
years

zip_code
 */
export default function Filter() {
  const initialState = {
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
  };
  const dispatch = useDispatch();
  const [queryBlock, setQueryBlock] = useState(initialState);

  function handleSubmit(event) {
    event.preventDefault();
    console.log('buscando action');
    dispatch(getFilteredPropierties(queryBlock));
  }

  function handlerQuery(event) {
    console.log('City: ', event.target.value);
    setQueryBlock(
      {
        ...queryBlock,
        [event.target.name]: event.target.value,
      },
    );
  }

  function clear() {
    setQueryBlock(initialState);
    dispatch(detailPokemon());
  }

  return (
    <div className="filter">
      <h2>Filter</h2>
      <button type="button" id="closeIcon" onClick={clear}>
        <strong>X</strong>
      </button>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
        {/* City */}
        <label>
          City:&nbsp;
          <input
            className="input-filter"
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
            className="input-filter"
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
            className="input-MinMax"
            type="text"
            name="priceMin"
            placeholder="price min"
            value={queryBlock.priceMin}
            onChange={handlerQuery}
          />
          &nbsp;to&nbsp;
          <input
            className="input-MinMax"
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
            className="input-MinMax"
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
            className="input-MinMax"
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
            className="input-MinMax"
            type="text"
            name="areaMin"
            placeholder=" min"
            value={queryBlock.areaMin}
            onChange={handlerQuery}
          />
          &nbsp;to&nbsp;
          <input
            className="input-MinMax"
            type="text"
            name="areaMax"
            placeholder=" max"
            value={queryBlock.areaMax}
            onChange={handlerQuery}
          />
        </label>

        {/* Stratum */}
        {/* Hay que cambiarlo debería ser un input type number */}
        <select className="select-filter" name="stratum" value={queryBlock.stratum} onChange={handlerQuery}>
          <option value="">Stratum</option>
          {['stratum 1', 'stratum 2', 'stratum 3'].map((strat) => (<option value={strat}>{strat}</option>))}
        </select>

        {/* Type of property */}
        <select className="select-filter" name="prop_type" value={queryBlock.prop_type} onChange={handlerQuery}>
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
        <button type="submit" onClick={handleSubmit}> Send </button>

      </form>
      {/* <button type="submit" onClick={() =>
        dispatch(getVideogamesByRating(true, orden))}> Ratng </button> */}
    </div>
  );
}
