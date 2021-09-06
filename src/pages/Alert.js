import React from 'react';

const Alert=()=>{
    return(
        <div className="alert alert-warning alert-dismissible fade show" >
  <strong>Warning!</strong> You should check in on some of those fields below.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    );
}