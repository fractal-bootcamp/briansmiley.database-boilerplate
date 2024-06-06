import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type BookType = {
  title: string;
  author: string;
  ISBN: string;
};

const permutationCity = {
  title: "Permutation City",
  author: "Greg Egan",
  ISBN: generateISBN()
};

async function createBook({ title, author, ISBN }: BookType) {
  const book = await prisma.book.create({
    data: {
      Title: title,
      ISBN: generateISBN(),
      BookAuthor: {
        connectOrCreate: {
          where: {
            Name: author
          },
          create: {
            Name: author,
            Biography: "Lorem Ipsum"
          }
        }
      }
    }
  });
  console.log(book);
}
async function main() {
  await createBook(permutationCity);
}

function generateISBN() {
  return Array.from({ length: 13 }, () =>
    Math.round(Math.random() * 9).toString()
  ).join("");
}

main();
