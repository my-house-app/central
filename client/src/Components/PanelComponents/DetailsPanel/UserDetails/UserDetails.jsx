import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export default function PostDetails() {
  
  const {user} = useAuth0()
  return (
    <h3>
     hello {user.email}
     id: {user.sub}
    </h3>
  );
}
