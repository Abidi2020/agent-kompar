/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import elec_eco_green_v1 from "../../donwloads/Elec EcoGreen 02-2021 V1.pdf";
import elec_eco_v1 from "../../donwloads/Elec Eco 02-2021 V1.pdf";
import cvg from "../../donwloads/cvg.pdf";
import gaz_eco_v1 from "../../donwloads/Gaz ECO 01022021 V1.pdf";
import gaz_fix_v1 from "../../donwloads/Gaz FIXE 01022021 V1.pdf";
import fiche_descriptive_electricite_eco_green_vattenfall from "../../donwloads/fiche-descriptive-electricite-eco-green-vattenfall01012021.pdf";
import fiche_descriptive_electricite_eco from "../../donwloads/fiche-descriptive-electricite-eco-01012021.pdf";
import fiche_descriptive_gaz_eco from "../../donwloads/fiche-descriptive-gaz-eco-01012021.pdf";
import fiche_descriptive_gaz_fixe_36_mois from "../../donwloads/fiche-descriptive-gaz-fixe-36-mois-01012021.pdf";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Links() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <Typography className={classes.root}>
      <Link href={cvg} download>
        C G V Vattenfall
      </Link>
      <Link href={gaz_fix_v1} download>
        C Grille tarifaire Gaz Fix 36 mois
      </Link>
      <Link href={elec_eco_v1} download>
        Grille Tarifaire Électricité Éco
      </Link>
      <Link href={elec_eco_green_v1} download>
        Grille Tarifaire électicité Eco Green
      </Link>
      <Link href={fiche_descriptive_electricite_eco} download>
        <Link href={gaz_eco_v1} download>
          C Grille tarifaire offre gaz eco
        </Link>
        Fiche Descriptive Electricité Eco
      </Link>
      <Link href={fiche_descriptive_gaz_eco} download>
        Fiche Descriptive Gaz Eco
      </Link>
      <Link
        href={fiche_descriptive_electricite_eco_green_vattenfall}
        download
      >
        Fiche Descriptive Eléctricité eco green
      </Link>
      <Link href={fiche_descriptive_gaz_fixe_36_mois} download>
        Fiche Descriptive Gaz Fixe 36 mois
      </Link>
    </Typography>
  );
}
