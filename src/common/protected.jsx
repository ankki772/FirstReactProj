import React from 'react';

export default function Protected(props) {
    const page = props.page
    const token = localStorage.getItem('token')

    return token ? page : <div>Unauthorized</div>
  return <div></div>;
}
