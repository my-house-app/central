/* eslint-disable no-console */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getSearchedPost } from '../../Redux/Actions/index';

function Searchbar({ searchPost }) {
  const [search, setSearch] = useState('');

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchPost(search);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Busca alguna publicacion aqui..."
        value={search}
        onChange={(e) => handleChange(e)}
      />
      <input type="submit" value="Buscar" />
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  searchPost: (postName) => dispatch(getSearchedPost(postName)),
});

export default connect(null, mapDispatchToProps)(Searchbar);
