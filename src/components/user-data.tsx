import { FC } from "react";
import { SuperContext } from "../context/context";

const UserData: FC = () => (
  <SuperContext.Consumer>
    {({ mode, profile }) => {
      const { email, username } = profile;
      const textMode = mode === "dark" ? "light" : "dark";

      return (
        <table className={`table w-50 table-hover text-${textMode} bg-${mode}`}>
          <thead>
            <tr>
              <th>email</th>
              <th>username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{email}</td>
              <td>{username}</td>
            </tr>
          </tbody>
        </table>
      );
    }}
  </SuperContext.Consumer>
);
export default UserData;
