import type { ActionFunctionArgs } from "@remix-run/node"
import { Form } from "@remix-run/react"
import { redirect } from "react-router"

export async function action({request}: ActionFunctionArgs){
  const body = await request.formData()
  const hashPassword = body.get('password')
  console.log(...body, hashPassword)
  return redirect(`/dashboard`)
}

const SignUp = () => {
  return (
    <div>
      <Form method="post">
        <input type="email" name="email" placeholder="email"/>
        <br />
        <input type="password" name="password" placeholder="password"/>
        <br />
        <input type="text" name="name" placeholder="name"/>
        <br />
        <button type="submit">SignUp</button>
      </Form>
    </div>
  )
}

export default SignUp