import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import { detailPokemon } from '../../Redux/Actions/index';
// import style from './Cards.module.css';

function Cards({ principalState, principal }) {
  useEffect(() => {
    if (!principalState.length) principal();
  }, [principal]);
  const list = principalState?.map((e) => (
    <Card
      image={e.image}
      postName={e.postName}
      propType={e.propType}
      neighborhood={e.neighborhood}
      price={e.price}
      rooms={e.rooms}
      m2={e.m2}
    />
  ));
  return (
    <div>
      {list}
    </div>
  );
}

const mapStateToProps = (state) => ({
  principalState: state.principal,
});

const mapDispatchToProps = (dispatch) => ({
  principal: () => dispatch(detailPokemon()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
