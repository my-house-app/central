/* eslint-disable no-shadow */
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FaCheck } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import SliderCarousel from '../../Components/SliderCarousel/SliderCarousel';
import Map from '../../Components/Map/Map'; // esta no se esta usando, se puede eliminar? @rennygalindez
import { getPostService } from '../../Services/properties.service';
import styles from './Details.module.css';

export default function Details({ routerProps }) {
  const { id } = routerProps.match.params;

  const [property, setProperty] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchApi(propertyId) {
      const propertyFetch = await getPostService(propertyId);
      setProperty(propertyFetch);
      setLoading(false);
    }
    fetchApi(id);
  }, []);
  return (
    <div>
      {!loading && (
        <main className={styles.container}>
          <section className={styles.title}>
            <h1>{property.post_name}</h1>
            <p>{property.prop_type}</p>
          </section>
          <section className={styles.photo_description}>
            <article className={styles.address_detail}>
              <div>
                <h2>{`${property.department}, ${property.city}`}</h2>
                <p>{property.neighborhood}</p>
                <p>{`Stratum ${property.stratum}`}</p>
                <p className={styles.price}>{`$${new Intl.NumberFormat('de-DE').format(property.price)}`}</p>
                <p>{property.description}</p>
                <div className={styles.details}>
                  <p>
                    {property.rooms}
                    <span className={styles.dicon}>
                      <FontAwesomeIcon icon={faBed} />
                    </span>
                  </p>
                  <p>
                    {property.bathrooms}
                    <span className={styles.dicon}>
                      <FontAwesomeIcon icon={faBath} />
                    </span>
                  </p>
                  <p>
                    {property.m2}
                    <span className={styles.dicon}>
                      <FontAwesomeIcon icon={faRulerCombined} />
                    </span>
                  </p>
                </div>
              </div>
            </article>
            <article className={styles.hero_carousel}>
              <div className={styles.photo_gallery}>
                <SliderCarousel elements={property.images} />
              </div>
            </article>
            <article className={styles.tour_schedule}>
              <div className={styles.details}>
                <h3>Arrange you tour</h3>
                <input type="date" name="tour_date" />
                <input type="time" name="tour_time" />
                <button type="submit">Select</button>
              </div>
            </article>
          </section>
          <section className={styles.map_facilities}>
            <article className={styles.map_container}>
              <div>
                <Map
                  lat={property.latitude}
                  lon={property.longitude}
                />
              </div>
            </article>
            <article className={styles.facilities_container}>
              <h3 className={styles.tit}>Facilities</h3>
              <div className={styles.facilities}>
                {property.parking_lot && (
                  <div className={styles.facility}>
                    PARKING LOT
                    <span className={styles.icon}><FaCheck /></span>
                  </div>
                )}
                {property.gym && (
                  <div className={styles.facility}>
                    GYM
                    <span className={styles.icon}><FaCheck /></span>
                  </div>
                )}
                {property.elevator && (
                  <div className={styles.facility}>
                    ELEVATOR
                    <span className={styles.icon}><FaCheck /></span>
                  </div>
                )}
                {property.garden && (
                  <div className={styles.facility}>
                    GARDEN
                    <span className={styles.icon}><FaCheck /></span>
                  </div>
                )}
                {property.backyard && (
                  <div className={styles.facility}>
                    BACKYARD
                    <span className={styles.icon}><FaCheck /></span>
                  </div>
                )}
                {property.private_security && (
                  <div className={styles.facility}>
                    PRIVATE SECURITY
                    <span className={styles.icon}><FaCheck /></span>
                  </div>
                )}
                {property.pool && (
                  <div className={styles.facility}>
                    SWIMMING POOL
                    <span className={styles.icon}><FaCheck /></span>
                  </div>
                )}
                {property.bbq && (
                  <div className={styles.facility}>
                    BARBECUE
                    <span className={styles.icon}><FaCheck /></span>
                  </div>
                )}
              </div>
            </article>
          </section>
        </main>
      )}
      {loading && <div>Cargando...</div>}
    </div>
  );
}
