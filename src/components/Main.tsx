import Card from "./common/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import getUsers from "../store/slice/actions/get-users";
import { AppDispatch } from "../store";
import { selectIsLoading, selectUsers } from "../store/slice/users-slice";
import CardsWithSkeleton from "./common/CardsWithSkeleton";
import { Box } from "@mui/material";

const Main = () => {
    const dispatch = useDispatch<AppDispatch>();
    const users = useSelector(selectUsers);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <Box>
            {isLoading ? (
                <Box>
                    {Array.from(Array(10).keys()).map((index) => (
                        <Box key={index}>
                            <CardsWithSkeleton />
                        </Box>
                    ))}
                </Box>
            ) : (
                users.map((user) => (
                    <Card
                        key={user.id}
                        name={user.first_name}
                        surname={user.last_name}
                        trust={user.trust}
                        service={user.shared_service}
                    />
                ))
            )}
        </Box>
    );
};

export default Main;
