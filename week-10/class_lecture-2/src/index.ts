import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data: {
        username,
        password,
        firstName,
        lastName
    },
    select:{
        id: true,
        username:true
    }
  })

  console.log(res)
}

interface UpdateParams {
    firstName : string
    lastName : string
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where:{
        username
    },
    data:{
        firstName,lastName
    },
    select:{
        username:true,
        firstName:true,
        lastName:true

    }
  })
  console.log(res)
}
// updateUser("mobu@gmail.com",{firstName : "mobu", lastName : "mobu"})
// insertUser("mobu@gmail.com","12345","adamya","agrawal")