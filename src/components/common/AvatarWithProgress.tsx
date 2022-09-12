import React, { useMemo } from "react";
import { Avatar, Box, CircularProgress } from "@mui/material";

import styles from "./styles/AvatarWithProgress.module.scss";

type Props = {
    src: string;
    progress: number;
    size?: number;
};

const AvatarWithProgress: React.FC<Props> = ({ progress = 0, size = 80, src }) => {
    const [top, left] = useMemo(() => {
        const total = 100;
        const radius = 38;
        const theta = 2 * Math.PI * (progress / total);
        const left = size / 2 - total / progress + radius * Math.sin(theta);
        const top = size / 2 - total / progress - radius * Math.cos(theta);
        return [top, left];
    }, [progress, size]);

    return (
        <Box className={styles.avatarImage}>
            <div className={styles.circularProgressWrapper}>
                <div className={styles.circularProgressParent}>
                    <div className={styles.circularProgressPosition} style={{ top, left }}>
                        <div className={styles.circularProgressLabelWrapper}>
                            <div className={styles.circularProgressLabel}>{progress}</div>
                        </div>
                    </div>
                    <CircularProgress
                        className={styles.circularProgress}
                        size={size}
                        variant="determinate"
                        value={progress}
                    />
                </div>
            </div>
            <Avatar src={src} alt="avatar" className={styles.img} />
        </Box>
    );
};

export default AvatarWithProgress;
