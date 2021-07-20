import React from "react";
import SocialInfo from '../Components/SocialInfo';
import TokenInfo from '../Components/TokenInfo';

const ContainerOne = ({ ID }) => {
  return (
    <div className="container px-6 py-10 mx-auto md:py-16 ">
      {/* Subcontainer 1.1 */}
      <SocialInfo />
      {/* Subcontainer 1.2 */}
      <TokenInfo ID={ID} />
    </div>
  );
};

export default ContainerOne;
