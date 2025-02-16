import { prismaClient } from "db"

export default async function Home() {
  const user = await prismaClient.user.findMany()
  return (
    <div>
      {JSON.stringify(user)}
      h1212
    </div>
  )
}