import { useState, useEffect } from 'react';
import SliderCarousel from '../SliderCarousel/SliderCarousel';
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
              <img
                src="https://northstar-pres.com/wp-content/uploads/2015/10/google-map-placeholder.png"
                alt="map placeholder"
              />
            </article>
            <article className={styles.facilities_container}>
              <h3>Facilities</h3>
              <div className={styles.facilities}>
                <div className={styles.facility}>
                  Parking lot
                  {property.parking_lot && <span> ✔️ </span>}
                </div>
                <div className={styles.facility}>
                  GYM
                  {property.gym && <span> ✔️ </span>}
                </div>
                <div className={styles.facility}>
                  ELEVATOR
                  {property.elevator && <span> ✔️ </span>}
                </div>
                <div className={styles.facility}>
                  GARDEN
                  {property.garden && <span> ✔️ </span>}
                </div>
                <div className={styles.facility}>
                  BACKYARD
                  {property.backyard && <span> ✔️ </span>}
                </div>
                <div className={styles.facility}>
                  PRIVATE SECURITY
                  {property.private_security && <span> ✔️ </span>}
                </div>
              </div>
            </article>
          </section>
        </main>
      )}
      {loading && <div>Cargando...</div>}
    </div>
  );
}
