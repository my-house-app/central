import React from 'react';

const ItemForm = ({ tag, name, type, label, onChange, stateProperty }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {!tag && 
        <input
          value={stateProperty[name]}
          onChange={onChange}
          type={type}
          name={name}
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
          <option value="" disabled hidden>Elija uno</option>
          {type.map((e, i) => (<option key={i} value={e}>{e}</option>))}
        </select>
      }
    </div>
  );
};

export default ItemForm;
