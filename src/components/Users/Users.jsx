import React from "react";

import { followAC, unFollowAC } from "../../redux/usersPage";

// export function User(props) {
//   // debugger;
//   return (
//     <div>
//       <h3>{props.user.name}</h3>
//       {/* <img src="" alt="avatarka" /> */}
//       <p className="discription">{props.user.location.country}</p>
//       <p className="discription">{props.user.location.city}</p>
//       <button
//         onClick={`${
//           props.user.follow
//             ? props.dispatch(followAC())
//             : props.dispatch(unFollowAC())
//         }`}
//       >{`${props.user.follow ? "unfollow" : "follow"}`}</button>
//     </div>
//   );
// }

export function Users(props) {
  //   debugger;
  let usersElements = props.users.map((user) => {
    return (
      <div>
        <h3>{user.name}</h3>
        {/* <img src="" alt="avatarka" /> */}
        <p className="discription">{user.location.country}</p>
        <p className="discription">{user.location.city}</p>
        <button
          onClick={() =>
            user.follow
              ? props.dispatch(unFollowAC(user.id))
              : props.dispatch(followAC(user.id))
          }
        >{`${user.follow ? "unfollow" : "follow"}`}</button>
      </div>
      // <User user={user} dispatch={props.dispatch} />
    );
  });
  return <section className="container">{usersElements}</section>;
}
