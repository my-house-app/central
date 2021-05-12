import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { searchedPost } from '../../Redux/Actions';
import style from './Searchbar.module.css';

function Searchbar({ find }) {
  const [search, setSearch] = useState('');
  // const querystring = window.location.search;
  // const params = new URLSearchParams(querystring);

  function handleChange(e) {
    setSearch(e.target.value);
    find(e.target.value);
  }

  return (
    <div className={style.searchBox}>
      <input
        className={style.searchText}
        type="text"
        autoComplete="off"
        value={search}
        onChange={(e) => handleChange(e)}
        placeholder="Search any post here..."
      />
      <FaSearch className={style.searchIcon} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  find: (postName) => dispatch(searchedPost(postName)),
});

export default connect(null, mapDispatchToProps)(Searchbar);
