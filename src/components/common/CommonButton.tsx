import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import { Box } from "@mui/material";

import styles from "./styles/CommonButton.module.scss";

const CommonButton = () => {
    const [toggleClass, setToggleClass] = useState(true);

    const toggleButton = () => setToggleClass(!toggleClass);

    return (
        <Box className={styles.buttonContainer}>
            {!toggleClass ? <span className={styles.done}>Done</span> : ""}
            <button
                onClick={toggleButton}
                className={
                    toggleClass
                        ? `${styles.btn} ${styles.btnAdd}`
                        : `${styles.btn} ${styles.btnDone}`
                }
            >
                {toggleClass ? (
                    <AddIcon className={styles.addIcon} />
                ) : (
                    <DoneIcon className={styles.doneIcon} />
                )}
            </button>
        </Box>
    );
};

export default CommonButton;
