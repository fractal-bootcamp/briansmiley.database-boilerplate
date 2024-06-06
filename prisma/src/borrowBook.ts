import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type BookType = {
  title: string;
  author: string;
  ISBN: string;
};
type BorrowerInfo = {
  name: string;
  email: string;
};

const permutationCity: BookType = {
  title: "Permutation City",
  author: "Greg Egan",
  ISBN: "5584339617628"
};
const member = {
  name: "Becca Peckman",
  email: "rebeccapeckman@gmail.com"
};

async function borrowBook(
  { title, author, ISBN }: BookType,
  { name, email }: BorrowerInfo
) {
  const renter = await prisma.member.findUnique({
    where: {
      Email: email
    }
  });
  console.log(renter);

  if (renter === null) throw new Error("Renter not found");

  const borrow = await prisma.book.update({
    where: {
      ISBN: ISBN
    },
    data: {
      RenterId: renter.id
    }
  });
  console.log(borrow);
}

async function main() {
  await borrowBook(permutationCity, member);
}

function generateISBN() {
  return Array.from({ length: 13 }, () =>
    Math.round(Math.random() * 9).toString()
  ).join("");
}

main();
