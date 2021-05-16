import React from 'react';
import PostDetails from './PostDetails/PostDetails';

function DetailsPanel({ match }) {
  const { path, id } = match.params;
  function display() {
    if (path === 'posts') {
      return (
        <>
          <PostDetails id={id} />
        </>
      );
    }
    /* if (path === 'user') return <UserDetails />;
    if (path === 'booking') return <BookingDetails />; */
    return null;
  }
  return (
    <>
      {display()}
    </>
  );
}

export default DetailsPanel;
