import PlansCard from './PlansCard/PlansCard';
import style from './MercadoPago.module.css';

function MercadoPago() {

  return (
    <div className={style.ctn}>
      <PlansCard
      plan= 'Basic'
      price= '29.900'
      description= 'increased visibility for 30 days'
      numberPhotos= '10'
      />
      <PlansCard
      plan= 'Premium'
      price= '69.900'
      description= 'increased visibility for 90 days'
      numberPhotos= '20'
      />
    </div>

  );
}

export default MercadoPago;
