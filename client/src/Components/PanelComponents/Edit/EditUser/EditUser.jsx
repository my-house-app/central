/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { editUser, getUserData } from '../../../../Redux/Actions/index';
import ButtonsBar from '../../ButtonsBar/ButtonsBar';
import style from '../Edit.module.css';

function EditUser({
  editUser, getUser, userDetail, msg, id, action,
}) {
  useEffect(() => {
    getUser(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [input, setInput] = useState({
    name: action === 'edit' ? userDetail.name : '',
    email: action === 'edit' ? userDetail.email : '',
    phone: action === 'edit' ? userDetail.phone : '',
    photo: action === 'edit' ? userDetail.photo : '',
    city: action === 'edit' ? userDetail.city : '',
    street_number: action === 'edit' ? userDetail.street_number : '',
    zip_code: action === 'edit' ? userDetail.zip_code : '',
    status: action === 'edit' ? userDetail.status : '',
    type: action === 'edit' ? userDetail.type : '',
  });

  const [errors, setErrors] = React.useState({});

  const isAdmin = true;
  useEffect(() => {
    setInput({
      name: action === 'edit' ? userDetail.name : '',
      email: action === 'edit' ? userDetail.email : '',
      phone: action === 'edit' ? userDetail.phone : '',
      photo: action === 'edit' ? userDetail.photo : '',
      city: action === 'edit' ? userDetail.city : '',
      street_number: action === 'edit' ? userDetail.street_number : '',
      zip_code: action === 'edit' ? userDetail.zip_code : '',
      status: action === 'edit' ? userDetail.status : '',
      type: action === 'edit' ? userDetail.type : '',
    });
  }, []);
  function validate(input) {
    const regEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
    const errors = {};
    if (!input.name) {
      errors.name = 'Name is required';
    } else if (!input.email) {
      errors.email = 'Email is required';
    } else if (!regEmail.test(input.email)) {
      errors.email = 'Email is not valid';
    }
    return errors;
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setErrors(validate({
      ...input,
      [name]: value,
    }));
    setInput({
      ...input,
      [name]: value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    editUser(id, input);
    alert(msg);
  }

  function resetForm() {
    setInput({
      phone: '', photo: '', city: '', street_number: '', zip_code: '',
    });
    document.getElementById('form').reset();
  }

  return (
    <div className={style.ctn}>
      <ButtonsBar />
      <form onSubmit={handleSubmit} className={style.form} id="form">
        <div className={style.field}>
          <label htmlFor="name">Name</label>
          <input
            disabled={!isAdmin}
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        {errors.name && (<p className={style.pdanger}>{errors.name}</p>)}
        <div className={style.field}>
          <label htmlFor="email">E-mail</label>
          <input
            disabled={!isAdmin}
            type="text"
            value={input.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        {errors.email && (<p className={style.pdanger}>{errors.email}</p>)}
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
          <label htmlFor="type">Role</label>
          <select className={style.selectFilter} name="type" value={input.type} onChange={handleChange}>
            <option>Role</option>
            {['User', 'Admin', 'SuperAdmin'].map((type, i) => (<option key={i} value={type}>{type}</option>))}
          </select>
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
        <div className={style.btnReset}>
          <button className={style.btn} type="button" onClick={(e) => resetForm(e)}>Reset</button>
          <button className={style.btn} type="submit" onClick={handleSubmit}>Save changes</button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userDetail: state.panelUser.render,
  msg: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: (userId) => dispatch(getUserData(userId)),
  editUser: (userId) => dispatch(editUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
