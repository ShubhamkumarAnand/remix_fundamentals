import { useLoaderData } from "@remix-run/react"

interface postType {
  id: number,
  title: string,
  body: string,
  userId: number
}

export async function loader() {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
  console.log(data)
  return data
}

const GetToDo = () => {
  const posts: postType[] = useLoaderData()
  return (
    <div>
      {posts.map((post: postType) => (
        <div className="border-2 m-5 border-green-600 p-4 rounded-lg max-w-md" key={post.id}>
          <li>
            <p>{post.userId}</p>
            <br />
            <p>{post.title}</p>
            <br />
            <p>{post.body}</p>
          </li>
        </div>
      ))}
    </div>
  )
}

export default GetToDo