import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchedPost } from '../../Redux/Actions';

function Searchbar({ find }) {
  const [search, setSearch] = useState('');

  function handleChange(e) {
    setSearch(e.target.value);
    find(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search any post here..."
        value={search}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  find: (postName) => dispatch(searchedPost(postName)),
});

export default connect(null, mapDispatchToProps)(Searchbar);
