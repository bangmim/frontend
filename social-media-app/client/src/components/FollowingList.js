import { useEffect, useState, Suspense, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import fetchData from "../utils/fetchData"
import AuthContext from "./AuthContext";
import Avatar from "./Avatar";

export default function FollowingList() {
    const { username } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const auth = useContext(AuthContext);
    const isMaster = auth.user.username === username;
    const [following, setFollowing] = useState([]);

    useEffect(() => {
        setIsLoaded(false);
        setError(null);

        fetchData(`${process.env.REACT_APP_SERVER}/profiles/${username}/following`)
            .then(data => {
                setFollowing([...following, ...data])
            })
            .catch(error => {
                console.log(error)
                setError(error)
            })
            .finally(() => setIsLoaded(true))

    }, [])

    console.log(following)

    const followingList = following.map(follow => (
        <li key={follow._id}>{follow.following.username} </li>
    ))

    return (
        <>
            <div>
            <Avatar user={username} />
            </div>

        <ul className="">
            {followingList}
        </ul>
        </>
    )

};