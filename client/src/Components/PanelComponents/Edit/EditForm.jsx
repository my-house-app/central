import React from 'react';
import EditUser from './EditUser/EditUser';
import EditPosts from './EditPost/EditPost';
import EditBooking from './EditBooking/EditBooking';

function EditForm({ match }) {
  const { path, id, action } = match.params;
  function display() {
    if (path === 'user') return <EditUser action={action} id={id} />;
    if (path === 'post') return <EditPosts action={action} path={path} id={id} />;
    if (path === 'booking') return <EditBooking action={action} path={path} id={id} />;
    return null;
  }
  return (
    <div>
      {display()}
    </div>
  );
}

export default EditForm;
