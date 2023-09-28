import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Fundamentals" },
    { name: "description", content: "Testing the fundamentals with remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-bold text-3xl animate-pulse">
      <p>Welcome to the remix</p>
      <Link to='/log-in'>Login</Link>
      <Link to='/sign-up'>SignUp</Link>
    </div>
  );
}
