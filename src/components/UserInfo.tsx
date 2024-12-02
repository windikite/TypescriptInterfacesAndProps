import { User } from "../models/User.model";

const UserInfo: React.FC<User> = (props) => {
    return (
        <div>
            <h1>User Info</h1>
            <h2>{props.username} (ID: {props.id})</h2>
            <p>{`Email: ${props.email}`}</p>
            <p>{`Age: ${props.age}`}</p>
        </div>
    )   
}

export default UserInfo;