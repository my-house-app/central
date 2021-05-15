import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import { getAvailablePosts } from '../../Redux/Actions/index';
// import style from './Cards.module.css';

function Cards({ principalState, principal }) {
  useEffect(() => {
    if (!principalState.length) principal();
  }, []);
  const list = principalState?.map((e) => (
    <Card
      key={e.id}
      image={e.images[0]?.photo[0]}
      postName={e.post_name}
      propType={e.prop_type}
      neighborhood={e.neighborhood}
      price={e.price}
      rooms={e.rooms}
      bathrooms={e.bathrooms}
      m2={e.m2}
      id={e.id}
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
  principal: () => dispatch(getAvailablePosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
