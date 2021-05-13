import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonOptions from '../../ButtonOptions/ButtonOptions';
import style from './PostCard.module.css';

function PostCard({
  name, userId, premium, city, id,
}) {
  return (
    <tr>
      <td>{name}</td>
      <td>
        <NavLink to={`/admin/psots/${userId}`} className={style.link}>
          {userId}
        </NavLink>
      </td>
      <td>{city}</td>
      <td>
        <ButtonOptions
          id={id}
        />
      </td>
    </tr>
  );
}

export default PostCard;
