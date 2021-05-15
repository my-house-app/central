/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { editUser, getUserData } from '../../../../Redux/Actions/index';
import ButtonsBar from '../../ButtonsBar/ButtonsBar';
import style from '../Edit.module.css';

function EditUser({
  match, editUser, getUser, userDetail, msg,
}) {
  const { id } = match.params;
  useEffect(() => {
    getUser(id);
  }, []);

  const [input, setInput] = useState({
    name: userDetail.name,
    email: userDetail.email,
    phone: userDetail.phone,
    photo: userDetail.phone,
    city: userDetail.city,
    street_number: userDetail.street_number,
    zip_code: userDetail.zip_code,
  });
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    editUser(id, input);
    alert(msg);
  }

  return (
    <div>
      <ButtonsBar />
      <form onSubmit={handleSubmit}>
        <div className={style.field}>
          <label htmlFor="name">Name</label>
          <input
            disabled
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className={style.field}>
          <label htmlFor="phone">Phone number</label>
          <input
            type="text"
            value={input.phone}
            name="phone"
            onChange={handleChange}
          />
        </div>
        <div className={style.field}>
          <label htmlFor="email">E-mail</label>
          <input
            disabled
            type="text"
            value={input.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className={style.field}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            value={input.city}
            name="city"
            onChange={handleChange}
          />
        </div>
        <div className={style.field}>
          <label htmlFor="street_number">Address</label>
          <input
            type="text"
            value={input.street_number}
            name="street_number"
            onChange={handleChange}
          />
        </div>
        <div className={style.field}>
          <label htmlFor="zip_code">Zip code</label>
          <input
            type="text"
            value={input.zip_code}
            name="zip_code"
            onChange={handleChange}
          />
        </div>
        <div className={style.field}>
          <label htmlFor="photo">Picture URL</label>
          <input
            type="text"
            value={input.photo}
            name="photo"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userDetail: state.detail,
  msg: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: (userId) => dispatch(getUserData(userId)),
  editUser: (userId) => dispatch(editUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
