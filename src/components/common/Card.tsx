import React from "react";
import { Box, Grid } from "@mui/material";
import AvatarWithProgress from "./AvatarWithProgress";
import CommonButton from "./CommonButton";
import image from "../images/avatarImage.jpg";

import styles from "./styles/Card.module.scss";

type CardTypes = {
    name: string;
    surname: string;
    trust: number;
    service: string;
};

const Card: React.FC<CardTypes> = ({ name, surname, trust, service }) => {
    return (
        <Box className={styles.cardContainer}>
            <Box className={styles.userContainer}>
                <Grid container>
                    <Grid item xs={3}>
                        <Box className={styles.avatarBlock}>
                            <AvatarWithProgress src={image} progress={trust} />
                        </Box>
                    </Grid>
                    <Grid item xs={7}>
                        <Box className={styles.infoBlock}>
                            <p className={styles.name}>{`${name} ${surname}`}</p>
                            <span className={styles.desc}>nessuna connessione</span>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <CommonButton />
                    </Grid>
                </Grid>
            </Box>
            <Box className={styles.serviceContainer}>
                <p className={styles.service}>
                    Sta già condividendo
                    <span className={styles.serviceName}> {service}</span>
                </p>
            </Box>
        </Box>
    );
};

export default Card;
