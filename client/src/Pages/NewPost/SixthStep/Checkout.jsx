import React from 'react';
import useCreatePost from '../hooks/useCreatePost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faBath,
  faRulerCombined,
} from '@fortawesome/free-solid-svg-icons';
import { FaCheck } from 'react-icons/fa';
import SliderCarousel from '../../../Components/SliderCarousel/SliderCarousel';
import styles from './Checkout.module.css';
// import Map from '../../../Map/Map';

function PostDetails() {
  const { postDetails } = useCreatePost();
  return (
    <div>
      <main className={styles.container}>
        <div className={styles.status}>
          <h4>{postDetails.status}</h4>
        </div>
        <section className={styles.title}>
          <h1>{postDetails.post_name}</h1>
          <p>{postDetails.prop_type}</p>
        </section>
        <section className={styles.photo_description}>
          <article className={styles.address_detail}>
            <div>
              <h2>{`${postDetails.department}, ${postDetails.city}`}</h2>
              <p>{postDetails.neighborhood}</p>
              <p>{`Stratum ${postDetails.stratum}`}</p>
              <p className={styles.price}>{`$${new Intl.NumberFormat(
                'de-DE'
              ).format(postDetails.price)}`}</p>
              <p>{postDetails.description}</p>
              <div className={styles.details}>
                <p>
                  {postDetails.rooms}
                  <span className={styles.dicon}>
                    <FontAwesomeIcon icon={faBed} />
                  </span>
                </p>
                <p>
                  {postDetails.bathrooms}
                  <span className={styles.dicon}>
                    <FontAwesomeIcon icon={faBath} />
                  </span>
                </p>
                <p>
                  {postDetails.m2}
                  <span className={styles.dicon}>
                    <FontAwesomeIcon icon={faRulerCombined} />
                  </span>
                </p>
              </div>
            </div>
          </article>
          <article className={styles.hero_carousel}>
            <div className={styles.photo_gallery}>
              <SliderCarousel elements={postDetails.images} />
            </div>
          </article>
        </section>
        <section className={styles.map_facilities}>
          {/*             <article className={styles.map_container}>
              <div>
                <Map
                  lat={postDetails.latitude}
                  lon={postDetails.longitude}
                />
              </div>
            </article> */}
          <article className={styles.facilities_container}>
            <h3 className={styles.tit}>Facilities</h3>
            <div className={styles.facilities}>
              {postDetails.parking_lot && (
                <div className={styles.facility}>
                  PARKING LOT
                  <span className={styles.icon}>
                    <FaCheck />
                  </span>
                </div>
              )}
              {postDetails.gym && (
                <div className={styles.facility}>
                  GYM
                  <span className={styles.icon}>
                    <FaCheck />
                  </span>
                </div>
              )}
              {postDetails.elevator && (
                <div className={styles.facility}>
                  ELEVATOR
                  <span className={styles.icon}>
                    <FaCheck />
                  </span>
                </div>
              )}
              {postDetails.garden && (
                <div className={styles.facility}>
                  GARDEN
                  <span className={styles.icon}>
                    <FaCheck />
                  </span>
                </div>
              )}
              {postDetails.backyard && (
                <div className={styles.facility}>
                  BACKYARD
                  <span className={styles.icon}>
                    <FaCheck />
                  </span>
                </div>
              )}
              {postDetails.private_security && (
                <div className={styles.facility}>
                  PRIVATE SECURITY
                  <span className={styles.icon}>
                    <FaCheck />
                  </span>
                </div>
              )}
              {postDetails.pool && (
                <div className={styles.facility}>
                  SWIMMING POOL
                  <span className={styles.icon}>
                    <FaCheck />
                  </span>
                </div>
              )}
              {postDetails.bbq && (
                <div className={styles.facility}>
                  BARBECUE
                  <span className={styles.icon}>
                    <FaCheck />
                  </span>
                </div>
              )}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default PostDetails;
