import React from "react";
import ReactTooltip from "react-tooltip";

import Button from "./primitives/Button";
import Link from "./primitives/Link";

import { FiGithub } from "react-icons/fi";

const BtnRepo = ({ repo }) => {
  return (
    <Button className="btnRepo" data-tip="Repositorio" data-for="repositorio">
      <Link href={repo} target="_blank" rel="noreferrer">
        <ReactTooltip
          id="repositorio"
          place="top"
          type="error"
          effect="solid"
        />
        <FiGithub style={{ fontSize: "19px" }} />
      </Link>
    </Button>
  );
};
export default BtnRepo;
