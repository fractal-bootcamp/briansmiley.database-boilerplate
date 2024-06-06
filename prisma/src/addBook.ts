import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const book = await prisma.book.create({
    data: {
      Title: "Permutation City",
      ISBN: generateISBN(),
      BookAuthor: {
        create: {
          Name: "Greg Egan",
          Biography: "Aussie nerd"
        }
      }
    }
  });
  console.log(book);
}

function generateISBN() {
  return Array.from({ length: 13 }, () =>
    Math.round(Math.random() * 9).toString()
  ).join("");
}

main();
