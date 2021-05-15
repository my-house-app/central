import React from 'react';
import EditUser from './EditUser/EditUser';
/* import EditPost from './EditPost/EditPost';
import EditBooking from './EditBooking/EditBooking'; */

function EditForm({ match }) {
  const { path } = match.params;
  function display() {
    if (path === 'users') return <EditUser />;
    /* if (path === 'posts') return <EditPost />;
    if (path === 'bookings') return <EditBooking />; */
    return <span>Nothing to edit, sorry</span>;
  }
  return (
    <div>
      {display()}
    </div>
  );
}

export default EditForm;
