/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { getPostService, editPostService, addPostService } from '../../../../Services/properties.service';
import Loading from '../../../Auth0/Loading/loading';
import EditButtonBar from '../../ButtonsBar/EditButtonBar/EditButtonBar';
import style from '../Edit.module.css';

function EditPosts({ id, action, session }) {

  const [input, setInput] = useState({})
  const [postDetail, setPostDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = React.useState('');
  
  // const isAdmin = session.type === 'Admin' || session.type === 'SuperAdmin'; 

  useEffect(() => {
    async function fetchPost(id) {
      const postInfo = await getPostService(id);
      setPostDetail(postInfo.data);
      setLoading(false);
    }
    fetchPost(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(session.id)
  useEffect(() => {
    setInput({
      premium: action === 'edit' ? postDetail.premium : false,
      post_name: action === 'edit' ? postDetail.post_name : '',
      department: action === 'edit' ? postDetail.department : '',
      city: action === 'edit' ? postDetail.city : '',
      street_number: action === 'edit' ? postDetail.street_number : '',
      description: action === 'edit' ? postDetail.description : '',
      stratum: action === 'edit' ? postDetail.street_number : '',
      neighborhood: action === 'edit' ? postDetail.neighborhood : '',
      price: action === 'edit' ? postDetail.price : '',
      prop_type: action === 'edit' ? postDetail.prop_type : '',
      m2: action === 'edit' ? postDetail.m2 : '',
      rooms: action === 'edit' ? postDetail.rooms : '',
      years: action === 'edit' ? postDetail.years : '',
      pool: action === 'edit' ? postDetail.pool : false,
      backyard: action === 'edit' ? postDetail.backyard : false,
      gym: action === 'edit' ? postDetail.gym : false,
      parking_lot: action === 'edit' ? postDetail.parking_lot : false,
      garden: action === 'edit' ? postDetail.garden : false,
      elevator: action === 'edit' ? postDetail.elevator : false,
      security: action === 'edit' ? postDetail.security : false,
      bbq: action === 'edit' ? postDetail.bbq : false,
      images: action === 'edit' ? postDetail.images : [],
      status: action === 'edit' ? postDetail.status : '',
      createdAt: action === 'edit' ? postDetail.createdAt : '',
      idUser: session.id,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postDetail.id]);
  

  function validate(input) {
    const errors = {};
    if (!input.post_name) {
      errors.post_name = 'El título es requerido';
    } else if (!input.premium) {
      errors.depatment = 'El plan contratado es requerido';
    } else if (!input.department) {
      errors.depatment = 'El deparmento es requerido';
    } else if (!input.city) {
      errors.city = 'La ciudad es requerida';
    } else if (!input.street_number) {
      errors.street_number = 'La dirección es requerida';
    } else if (!input.neighborhood) {
      errors.neighborhood = 'El barrio es requerido';
    } else if (!input.price) {
      errors.price = 'El precio es requerido';
    } else if (!input.prop_type) {
      errors.prop_type = 'El tipo de inmueble es requerido';
    } else if (!input.m2) {
      errors.m2 = 'Los metros cuadrados son requeridos';
    } else if (!input.rooms) {
      errors.rooms = 'Las habitaciones son requeridas';
    } else if (!input.bathrooms) {
      errors.bathrooms = 'Los baños son requeridos';
    } else if (input.stratum > 6) {
      errors.stratum = '6 es el estrato máximo';
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
          const resp = window.confirm(`¿Quieres editar la publicación ${input.post_name}?`)
          if (resp) {
            editPostService(id, input);
            alert(`Publicación '${input.post_name}' editada correctamente `);
          } 
        }
      } else if (action === 'create') {
        if (errors === '') {
          return alert('Revisar campos requeridos')
        } else {
          const resp = window.confirm(`¿Quieres crear la publicación ${input.post_name}?`)
          if (resp) {
            console.log(input)
            addPostService(input);
            alert(`Publicación '${input.post_name}' creada correctamente `);
          }
        }
      }
    }
  }

  function resetForm(e) {
    e.preventDefault()
    setInput({
      premium: '',
      post_name: '',
      department: '',
      city: '',
      street_number: '',
      description: '',
      stratum: '',
      neighborhood: '',
      price: '',
      m2: '',
      rooms: '',
      years: '',
      pool: false,
      backyard: false,
      bbq: false,
      gym: false,
      parking_lot: false,
      garden: false,
      elevator: false,
      security: false,
    });
    document.getElementById('form').reset();
  }

  const [display, setDisplay] = useState(false);
  return (
    <div className={style.ctn}>
      {!loading && 
        <>
          <EditButtonBar rol={session.type} handleSubmit={handleSubmit} element="post" id={id}/>
          <form onSubmit={handleSubmit} className={style.form} id="form">
            <div className={style.field}>
              <label htmlFor="post_name">Título</label>
              <input
                type="text"
                value={input.post_name}
                name="post_name"
                onChange={handleChange}
              />
            </div>
            {errors.post_name && (<p className={style.pdanger}>{errors.post_name}</p>)}
            <div className={style.field}>
              <label htmlFor="premium"> Plan contratado</label>
              <select className={style.selectFilter} name="premium" value={input.premium} onChange={handleChange}>
                <option key="0" value={input.premium}>Elija uno</option>
                <option key="1" value={!input.premium} >Premium</option>
                <option key="2" value={input.premium} >Classic</option>
              </select>
            </div>
            {errors.premium && (<p className={style.pdanger}>{errors.premium}</p>)}
            <div className={style.field}>
              <label htmlFor="department">Departmento</label>
              <input
                type="text"
                value={input.department}
                name="department"
                onChange={handleChange}
              />
            </div>
            {errors.department && (<p className={style.pdanger}>{errors.department}</p>)}
            <div className={style.field}>
              <label htmlFor="city">Ciudad</label>
              <input
                type="text"
                value={input.city}
                name="city"
                onChange={handleChange}
              />
            </div>
            {errors.city && (<p className={style.pdanger}>{errors.city}</p>)}
            <div className={style.field}>
              <label htmlFor="street_number">Dirección</label>
              <input
                type="text"
                value={input.street_number}
                name="street_number"
                onChange={handleChange}
              />
            </div>
            {errors.street_number && (<p className={style.pdanger}>{errors.street_number}</p>)}
            <div className={style.field}>
              <label htmlFor="neighborhood">Barrio</label>
              <input
                type="text"
                value={input.neighborhood}
                name="neighborhood"
                onChange={handleChange}
              />
            </div>
            {errors.neighborhood && (<p className={style.pdanger}>{errors.neighborhood}</p>)}
            <div className={style.field}>
              <label htmlFor="price">Precio</label>
              <input
                type="text"
                value={input.price}
                name="price"
                onChange={handleChange}
              />
            </div>
            {errors.price && (<p className={style.pdanger}>{errors.price}</p>)}
            <div className={style.field}>
              <label htmlFor="prop_type">Tipo de propiedad</label>
              <select className={style.selectFilter} name="prop_type" value={input.prop_type} onChange={handleChange}>
                <option value="" disabled hidden>Elija uno</option>
                {['Casa', 'Apartamento'].map((type, i) => (<option key={i} value={type}>{type}</option>))}
              </select>
            </div>
            {errors.prop_type && (<p className={style.pdanger}>{errors.prop_type}</p>)}
            <div className={style.field}>
              <label htmlFor="m2">Metros cuadrados</label>
              <input
                type="number"
                value={input.m2}
                name="m2"
                min="0"
                onChange={handleChange}
              />
            </div>
            {errors.m2 && (<p className={style.pdanger}>{errors.m2}</p>)}
            <div className={style.field}>
              <label htmlFor="rooms">Habitaciones</label>
              <input
                type="number"
                value={input.rooms}
                name="rooms"
                min="0"
                onChange={handleChange}
              />
            </div>
            {errors.rooms && (<p className={style.pdanger}>{errors.rooms}</p>)}
            <div className={style.field}>
              <label htmlFor="bathrooms">Baños</label>
              <input
                type="number"
                value={input.bathrooms}
                name="bathrooms"
                min="0"
                onChange={handleChange}
              />
            </div>
            {errors.bathrooms && (<p className={style.pdanger}>{errors.bathrooms}</p>)}
            <div className={style.field}>
              <label htmlFor="stratum">Estrato</label>
              <input
                type="number"
                value={input.stratum}
                name="stratum"
                min="0"
                onChange={handleChange}
              />
            </div>
            {errors.stratum && (<p className={style.pdanger}>{errors.stratum}</p>)}
            <div className={style.field}>
              <label htmlFor="years">Años</label>
              <input
                type="number"
                value={input.years}
                name="years"
                min="0"
                onChange={handleChange}
              />
            </div>
            <div className={style.field}>
              <label htmlFor="description">Descripción</label>
              <input
                type="text"
                value={input.description}
                name="description"
                onChange={handleChange}
              />
            </div>
            <div className={style.field}>
              <label htmlFor="photo">Fotos URL</label>
              <input
                type="text"
                value={input.photo}
                name="photo"
                onChange={handleChange}
              />
            </div>
            <div className={style.field} onClick={() => setDisplay(!display)}>
              <p className={style.tit_facilities}>
                Otras comodidades
              </p>
            </div>
            <div className={display ? style.facilities : style.noFacilities}>
              <input type="checkbox" onChange={handleChange} name="pool" value={!input.pool} />
              <label htmlFor="pool"> Piscina</label>
              <br />
              <input type="checkbox" onChange={handleChange} name="backyard" value={!input.backyard} />
              <label htmlFor="backyard"> Patio</label>
              <br />
              <input type="checkbox" onChange={handleChange} name="gym" value={!input.gym} />
              <label htmlFor="gym"> Gimnasio</label>
              <br />
              <input type="checkbox" onChange={handleChange} name="bbq" value={!input.bbq} />
              <label htmlFor="bbq"> Barbecue</label>
              <br />
              <input type="checkbox" onChange={handleChange} name="parking_lot" value={!input.parking_lot} />
              <label htmlFor="parking_lot"> Cochera</label>
              <br />
              <input type="checkbox" onChange={handleChange} name="elevator" value={!input.elevator} />
              <label htmlFor="elevator"> Ascensor</label>
              <br />
              <input type="checkbox" onChange={handleChange} name="security" value={!input.security} />
              <label htmlFor="secutiry"> Seguridad</label>
              <br />
              <input type="checkbox" onChange={handleChange} name="garden" value={!input.garden} />
              <label htmlFor="garden"> Jardín</label>
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

export default connect(mapStateToProps)(EditPosts);
