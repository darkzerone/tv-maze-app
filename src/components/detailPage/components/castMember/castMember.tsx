import React from "react";
import { ShowCastMember } from "../../../../api/tvMaze/types";

type CastMemberProps = {
  castMember: ShowCastMember;
};

function CastMember({ castMember }: CastMemberProps) {
  return (
    <div className="col-6 col-md-4 col-lg-3 d-flex flex-column mb-3">
      <img
        src={
          castMember.character.image?.medium || castMember.person.image?.medium
        }
        alt={castMember.character?.name}
      />
      <span>
        {castMember.person?.name} as {castMember.character?.name}
      </span>
    </div>
  );
}

export default CastMember;
