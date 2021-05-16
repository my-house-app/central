import React from 'react';
import EditUser from '../Edit/EditUser/EditUser';
import EditPosts from '../Edit/EditPost/EditPost';
import EditBooking from '../Edit/EditBooking/EditBooking';

function CreateForm({ match }) {
  const { path, id } = match.params;
  function display() {
    if (path === 'user') return <EditUser action="create" id={id} />;
    if (path === 'post') return <EditPosts action="create" path={path} id={id} />;
    if (path === 'booking') return <EditBooking action="create" path={path} id={id} />;
    return null;
  }
  return (
    <div>
      {display()}
    </div>
  );
}

export default CreateForm;
