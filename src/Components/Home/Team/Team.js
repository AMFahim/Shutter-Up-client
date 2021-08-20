import React from 'react';
import Teams from '../Teams/Teams';
import photographer1 from '../../../images/grapher(1).jpg';
import photographer2 from '../../../images/grapher (2).jpg';
import photographer3 from '../../../images/grapher (3).jpg';
const photographer =[
  {
    name: "Diane Arbus",
    photo: photographer1,
    skill: "Photographer",
  },
  {
    name: "Cindy Sherman",
    photo: photographer2,
    skill: "Photographer",
  },
  {
    name: "Helen Levitt",
    photo: photographer3,
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