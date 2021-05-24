/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { getUserDataService, editUserService, addUserService } from '../../../../Services/properties.service';
import Loading from '../../../Auth0/Loading/loading';
import EditButtonBar from '../../ButtonsBar/EditButtonBar/EditButtonBar';
import style from '../Edit.module.css';

function EditUser({ session, id, action }) {
  const [input, setInput] = useState({})
  const [userDetail, setUserDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState('');

  const isAdmin = session.type === 'Admin' || session.type === 'SuperAdmin'; 

  useEffect(() => {
    async function fetchUser(id) {
      const userInfo = await getUserDataService(id);
      setUserDetail(userInfo.data.user);
      setLoading(false);
    }
    fetchUser(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (id !== session.id) setInput({
      name: action === 'edit' ? userDetail.name : '',
      email: action === 'edit' ? userDetail.email : '',
      password: action === 'edit' ? userDetail.password : '',
      password2: /*action === 'edit'  ? userDetail.password : */ '',
      phone: action === 'edit' ? userDetail.phone : '',
      photo: action === 'edit' ? userDetail.photo : '',
      city: action === 'edit' ? userDetail.city : '',
      street_number: action === 'edit' ? userDetail.street_number : '',
      zip_code: action === 'edit' ? userDetail.zip_code : '',
      status: action === 'edit' ? userDetail.status : '',
      type: action === 'edit' ? userDetail.type : '',
    });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action === 'edit' && userDetail.status]);
  

  function validate(input) {
    // const regEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
    const errors = {};
    if (!input.name) {
      errors.name = 'El nombre es requerido';
    } else if (!input.email) {
      errors.email = 'El correo electrónico es requerido';
    } /* else if (!regEmail.test(input.email)) {
      errors.email = 'Email is not valid';
    }  */else if (!input.password) {
      errors.password = 'La contraseña es requerida';
    }  else if (!input.password2 || input.password2 !== input.password) {
      errors.password2 = "Las contraseñas no coinciden";
    } else if (input.type !== 'User' && input.type !== 'Admin' && input.type !== 'SuperAdmin') {
      errors.type = 'El rol es requerido';
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
    if (Object.entries(errors).length > 0) {
      return alert('Revisar campos requeridos')
    } else {
      if (action === 'edit') {
        if (errors === '') {
          <Link to="/panel" />
          return alert('No se han realizado modificaciones')
        } else {
          const resp = window.confirm(`¿Quieres editar al usuario ${input.name}?`)
          if (resp){
            editUserService(id, input);
            alert(`Usuario ${input.name} editado correctamente `);
          } 
        }
      } else if (action === 'create') {
        if (errors === '') {
          return alert('Revisar campos requeridos')
        } else {
          const resp = window.confirm(`¿Quieres agregar al usuario ${input.name}?`)
          if (resp) {
            addUserService(input);
            alert(`Usuario ${input.name} agregado correctamente `);
          } 
        }
      }
    }
  }

  function resetForm() {
    setInput({
      phone: '', photo: '', city: '', street_number: '', zip_code: '',
    });
    document.getElementById('form').reset();
  }

  return (
    <div className={style.ctn}>
      {!loading && 
      <> 
        <EditButtonBar rol={session.type ? session.type : 'user'} handleSubmit={handleSubmit} element="user" id={id}/>
        <form onSubmit={handleSubmit} className={style.form} id="form">
          <div className={style.field}>
            <label htmlFor="name">Nombre</label>
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
            <label htmlFor="email">Correo electrónico</label>
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
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              value={input.password}
              name="password"
              onChange={handleChange}
            />
          </div>
          {errors.password && (<p className={style.pdanger}>{errors.password}</p>)}
          <div className={style.field}>
            <label htmlFor="password2">Repetir contraseña</label>
            <input
              type="password"
              value={input.password2}
              name="password2"
              onChange={handleChange}
            />
          </div>
          {errors.password2 && (<p className={style.pdanger}>{errors.password2}</p>)}
          {isAdmin &&
            <>
              <div className={style.field}>
                <label htmlFor="type">Rol</label>
                <select className={style.selectFilter} name="type" value={input.type} onChange={handleChange}>
                  <option>Rol</option>
                  {['User', 'Admin', 'SuperAdmin'].map((type, i) => (<option key={i} value={type}>{type}</option>))}
                </select>
              </div>
              {errors.type && (<p className={style.pdanger}>{errors.type}</p>)}
            </>
          }
          <div className={style.field}>
            <label htmlFor="phone">Teléfono móvil</label>
            <input
              type="text"
              value={input.phone}
              name="phone"
              onChange={handleChange}
            />
          </div>
          <div className={style.field}>
            <label htmlFor="city">Ciudad</label>
            <input
              type="text"
              value={input.city}
              name="city"
              onChange={handleChange}
            />
          </div>
          <div className={style.field}>
            <label htmlFor="street_number">Dirección</label>
            <input
              type="text"
              value={input.street_number}
              name="street_number"
              onChange={handleChange}
            />
          </div>
          <div className={style.field}>
            <label htmlFor="zip_code">Código postal</label>
            <input
              type="text"
              value={input.zip_code}
              name="zip_code"
              onChange={handleChange}
            />
          </div>
          <div className={style.field}>
            <label htmlFor="photo">Foto</label>
            <input
              type="text"
              value={input.photo}
              name="photo"
              onChange={handleChange}
            />
          </div>
          <div className={style.btnReset}>
            <button className={style.btn} type="button" onClick={(e)=>resetForm(e)}>
                <FontAwesomeIcon icon={faEraser} />
                {'  Borrar'}
            </button>
          </div>
        </form>
      </>
      }
      {loading && <Loading />}
      
    </div>
  );
}

const mapStateToProps = (state) => ({
  session: state.session,
});

export default connect(mapStateToProps)(EditUser);
