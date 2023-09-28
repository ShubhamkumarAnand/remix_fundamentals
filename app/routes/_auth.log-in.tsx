import type { ActionFunctionArgs } from "@remix-run/node"
import { Form } from "@remix-run/react"
import { redirect } from "react-router"

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData()
  console.log(...body)
  return redirect(`/dashboard`)
}

const Login = () => {
  return (
    <div>
      <Form method="post">
        <input type="email" name="email" placeholder="email" />
        <br />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Login</button>
      </Form>
    </div>
  )
}

export default Login