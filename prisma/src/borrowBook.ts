import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type BookType = {
  title: string;
  author: string;
  ISBN: string;
};

const permutationCity: BookType = {
  title: "Permutation City",
  author: "Greg Egan",
  ISBN: generateISBN()
};

async function 
async function main() {
  const book = await prisma.book.update({
    where: {
      ISBN: "9169404807277"
    },
    data: {
      RenterId: {}
    }
  });
}

function generateISBN() {
  return Array.from({ length: 13 }, () =>
    Math.round(Math.random() * 9).toString()
  ).join("");
}

main();
