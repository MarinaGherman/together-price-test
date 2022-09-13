import React from "react";
import { Box, Grid, Skeleton, Stack } from "@mui/material";

import styles from "./styles/CardsWithSceleton.module.scss";

const CardsWithSkeleton = () => {
    return (
        <Box className={styles.skeletonContainer}>
            <Stack spacing={1}>
                <Grid container>
                    <Grid item xs={3}>
                        <Box className={styles.skeletonImg}>
                            <Skeleton variant="circular" width={80} height={80} />
                        </Box>
                    </Grid>
                    <Grid item xs={7}>
                        <Box className={styles.skeletonDesc}>
                            <Stack spacing={1}>
                                <Skeleton variant="rounded" width={190} height={15} />
                                <Skeleton variant="rounded" width={190} height={10} />
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box className={styles.skeletonBtn}>
                            <Skeleton variant="rounded" width={37} height={37} />
                        </Box>
                    </Grid>
                </Grid>
                <Box className={styles.skeletonMain}>
                    <Skeleton variant="rounded" width={367} height={80} />
                </Box>
                <Skeleton variant="rounded" width={367} height={20} />
            </Stack>
        </Box>
    );
};

export default CardsWithSkeleton;
