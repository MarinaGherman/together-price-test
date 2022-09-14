import Card from "./common/Card";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, useEffect } from "react";
import getUsers from "../store/slice/actions/get-users";
import { AppDispatch } from "../store";
import {
    selectIsLoading,
    selectPagination,
    selectUsers,
    setPage
} from "../store/slice/users-slice";
import CardsWithSkeleton from "./common/CardsWithSkeleton";
import { Box, Pagination } from "@mui/material";

const Main = () => {
    const dispatch = useDispatch<AppDispatch>();
    const users = useSelector(selectUsers);
    const isLoading = useSelector(selectIsLoading);
    const pagination = useSelector(selectPagination);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const handleChangePage = (_: ChangeEvent<unknown>, page: number) => {
        dispatch(setPage(page));
    };

    return (
        <Box>
            {isLoading ? (
                <Box>
                    {Array.from(Array(5).keys()).map((index) => (
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
            <Pagination count={pagination.totalPages} onChange={handleChangePage} />
        </Box>
    );
};

export default Main;
