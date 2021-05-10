import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import SliderCarousel from '../SliderCarousel/SliderCarousel';
import Map from '../Map/Map';
import styles from './Details.module.css';

export default function Details({ routerProps }) {
  const { id } = routerProps.match.params;

  const [property, setProperty] = useState('');
  const [loading, setLoading] = useState(true);

  const getPropertyDetails = async () => {
    const response = await fetch(`http://localhost:3001/post/${id}`);
    const propertyFetch = await response.json();
    setProperty(propertyFetch);
    setLoading(false);
  };
  useEffect(() => {
    getPropertyDetails();
  }, []);

  return (
    <div>
      {!loading && (
        <main className={styles.container}>
          <section className={styles.title}>
            <h1>{property.description}</h1>
            <p>{property.prop_type}</p>
          </section>
          <section className={styles.photo_description}>
            <article className={styles.address_detail}>
              <div>
                <h2>{property.city}</h2>
                <p>{property.neighborhood}</p>
                <p>{property.price}</p>
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
              {/* <img
                src="https://northstar-pres.com/wp-content/uploads/2015/10/google-map-placeholder.png"
                alt="map placeholder"
              /> */}
              <div>
                <Map />
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
