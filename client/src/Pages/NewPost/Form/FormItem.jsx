import React from 'react';
import style from './Form.module.css';

const ItemForm = ({ tag, name, type, label, onChange, stateProperty }) => {
  return (
    <div className={style.form}>
      <div className={style.field}>
      <label htmlFor={name}>{label}</label>
      {!tag && type !== 'checkbox' && 
        <input
          value={stateProperty[name]}
          onChange={onChange}
          type={type}
          name={name}
        />
      }

      {!tag && type === 'checkbox' &&
        <input
          type={type}
          onChange={(e) => {
            onChange(e);
            console.log(!stateProperty[name])
            console.log(typeof e.target.value)
          }}
          name={name}
          value={!stateProperty[name]}
        />
      }
      {tag === 'textarea' && 
        <textarea
          value={stateProperty[name]}
          onChange={onChange}
          name={name}
        />
      }
      {tag === 'select' && 
        <select
          value={stateProperty[name]}
          onChange={onChange}
          name={name}
        > 
          <option key={0} value=''>Elige un tipo</option>
          {type.map((e, i) => (<option key={i+1} value={e}>{e}</option>))}
        </select>
      }
      </div>
    </div>
  );
};

export default ItemForm;
