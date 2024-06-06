import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type MemberInfo = {
  name: string;
  email: string;
  address?: string;
};

const member = {
  name: "Becca Peckman",
  email: "rebeccapeckman@gmail.com"
};

async function addMember({ name, email, address = "" }: MemberInfo) {
  const book = await prisma.member.create({
    data: {
      Name: name,
      Email: email,
      Address: address
    }
  });
  console.log(member);
}

async function main() {
  await addMember(member);
}

main();
