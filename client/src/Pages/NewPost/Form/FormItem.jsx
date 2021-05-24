import React from 'react';
import style from './Form.module.css';

const ItemForm = ({ tag, name, type, min, label, onChange, stateProperty }) => {
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
          min={type === 'number' && min}
        />
      }

      {!tag && type === 'checkbox' &&
        <input
          type={type}
          onChange={(e) => {
            onChange(e);
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
