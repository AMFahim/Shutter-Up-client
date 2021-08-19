import React from 'react';
import ProfileUi from 'react-profile-card';


const Teams = ({ Team }) => {
  return (
    <div className="col-md-4 container">
      <ProfileUi
        imgUrl={Team.photo}
        name={Team.name}
      >
      </ProfileUi>
    </div>
  );
};

export default Teams;