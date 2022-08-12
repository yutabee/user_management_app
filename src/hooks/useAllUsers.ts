import axios from "axios";
import { useCallback, useState } from "react"
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [users, setUsers] = useState<Array<User>>([]);

    const { showMessage } = useMessage();

    const getUsers = useCallback(() => {
        axios.get<Array<User>>('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setLoading(true);
                setUsers(res.data);

            }).catch((error) => {
                showMessage({title:'ユーザーに失敗しました',status:'error' })
                console.log(error);

            }).finally(() => {
                setLoading(false);
            });
        
    }, [showMessage]);

    return { getUsers, loading , users }
}