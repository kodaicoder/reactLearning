import { Route } from "react-router-dom";
export const Welcome = () => {
  return (
    <section>
      <h1>Welcome Page</h1>
      {/* nested route will show if the route is correct*/}
      <Route path="/welcome/new-user">
        <p>welcome to new user!!</p>
      </Route>
    </section>
  );
};
