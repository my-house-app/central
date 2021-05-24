import React, { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { getBookingService, editBookingService } from '../../../../Services/booking.service'
import styles from '../../DetailsPanel/BookingDetails/BookingDetails.module.css';
import Logo from '../../../../images/blue_slim/logoCirculo.png';
import EditButtonBar from '../../ButtonsBar/EditButtonBar/EditButtonBar';
import Loading from '../../../Auth0/Loading/loading';

export default function EditBooking({ id, action }) {
  // path={path} action="edit" id={id}
  const { session } = useSelector(state => state);
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState({});
  // console.log('id: ', id);
  // console.log('action: ', action);

  useEffect(() => {
    getBookingService(id).then(
      res => {
        // console.log('res.data', res.data.bookingSended || res.data.booking)
        setBooking(res.data.bookingSended || res.data.booking);
        setLoading(false);
      }
    )
      .catch(e => console.log("Error: ", e.message))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleChange(e) {
    e.preventDefault();
    // cambio el estado tambien tengo que cambiar la fecha
    setBooking(
      {
        ...booking,
        [e.target.name]: e.target.value,
        date: new Date(),
      }
    )
  }

  async function handleSubmit() {
    // console.log('guardando...');
    const respuesta = await editBookingService(id, booking);
    if (respuesta.status===200) alert('Booking was updating');
  }

  if (loading) {
    return <Loading />//<div>Cargando...</div>
  } else {
    return (
      <Fragment>
        <EditButtonBar rol={session.type ? session.type : 'user'} handleSubmit={handleSubmit} element="user" id={id} />
        <div className={styles.container}>
          <div className={styles.header}>
            <img className={styles.logo} src={Logo} alt='logo' />
            <div className={styles.headerText}>
              <h1>Booking</h1>
              <h3>MY HOUSE APP S.R.L</h3>
            </div>

          </div>
          <hr style={{ margin: '1%' }}/>

          <div className={styles.bodyBooking}>
            <div className={styles.bodyBookingHeader} >
              <select className={styles.selectStatus} name= 'status' value={booking.status} onChange={evento => { handleChange(evento) }}>
                {['Confirmed', 'Pending', 'Expired', 'Cancelled'].map(orden =>
                  (<option key={orden} value={orden}>{orden}</option>))
                }
              </select>&nbsp;&nbsp;
              <label> {new Date(booking.date).toLocaleDateString("es-ES")}</label>
            </div>
            <div>
              <label>Lugar: </label>&nbsp;&nbsp;
              <label> {booking.post.city}</label>
            </div>
            <div>
              <label>Estado de la publicación: </label>&nbsp;&nbsp;
              <label>{booking.post.status}</label>
            </div>
            <hr style={{ margin: '1%' }} />
            <h2>Datos del propietario</h2>
            <div>
              <label>Nombre</label>&nbsp;&nbsp;
              <label>{booking.owner.name}</label>
            </div>
            <div>
              <label>Telefono</label>&nbsp;&nbsp;
              <label>{booking.owner.phone}</label>
            </div>
            <div>
              <label>Email</label>&nbsp;&nbsp;
              <label>{booking.owner.email}</label>
            </div>
            <hr style={{ margin: '1%' }} />
            <h2>Datos del interesado</h2>
            <div>
              <label>Nombre</label>&nbsp;&nbsp;
              <label>{booking.interested.name}</label>
            </div>
            <div>
              <label>Telefono</label>&nbsp;&nbsp;
              <label>{booking.interested.phone}</label>
            </div>
            <div>
              <label>Email</label>&nbsp;&nbsp;
              <label>{booking.interested.email}</label>
            </div>
          </div>

        </div>
      </Fragment>
    );

  }
}
