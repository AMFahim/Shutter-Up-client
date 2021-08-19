import React from 'react';
import Teams from '../Teams/Teams';
import avatar from '../../../images/about.jpg';
const photographer =[
  {
    name: "Diane Arbus",
    photo: avatar,
    skill: "Photographer",
  },
  {
    name: "Cindy Sherman",
    photo: avatar,
    skill: "Photographer",
  },
  {
    name: "Helen Levitt",
    photo: avatar,
    skill: "Photographer",
  },
]

const Team = () => {
  return (
    <div className="text-center container for-padding">
      <h2 className="font-style">[ MEET OUR <span className="for-US"><b>CREATIVE TEAM</b></span> ]</h2>
      <small className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis quo magni quos voluptates porro alias incidunt! Corrupti reiciendis.</small>
      <div className="row justify-content-center pt-5">
        {
          photographer.map(Tm => <Teams Team={Tm}></Teams>)
        }
      </div>
    </div>
  );
};

export default Team;