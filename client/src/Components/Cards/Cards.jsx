import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import { getAllPost } from '../../Redux/Actions/index';
// import style from './Cards.module.css';

function Cards({ principalState, principal }) {
  useEffect(() => {
    if (!principalState.length) principal();
  }, []);
  const list = principalState?.map((e) => (
    <Card
      image={e.property.images[0]?.photo}
      postName={e.post_name}
      propType={e.property.prop_type}
      neighborhood={e.property.neighborhood}
      price={e.property.price}
      rooms={e.property.rooms}
      bathrooms={e.property.bathrooms}
      m2={e.property.m2}
      id={e.property.id}
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
  principal: () => dispatch(getAllPost()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
