import React from 'react';
import PostDetails from './PostDetails/PostDetails';
import ButtonsBar from '../../ButtonsBar/ButtonsBar';

function DetailsPanel({ match }) {
  const { path, id } = match.params;
  function display() {
    if (path === 'posts') return <PostDetails id={id} />;
    /* if (path === 'user') return <PostDetails />;
    if (path === 'booking') return <BookingDetails />; */
    return <span>Nothing to edit, sorry</span>;
  }
  return (
    <>
      <ButtonsBar />
      {display()}
    </>
  );
}

export default DetailsPanel;
