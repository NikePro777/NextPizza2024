import { hashSync } from 'bcrypt';
import { prisma } from './prisma-client';
import { _ingredients, categories, products } from './constants';

// up - функция генерации данных
async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User Test',
        email: 'user@test.ru',
        password: hashSync('123', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin Admin',
        email: 'admin@test.ru',
        password: hashSync('123', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });
  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: _ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });
}
// down - функция очистки данных
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}
// main - функция запускающая все функции внутри
async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main().then(async () => {
  await prisma.$disconnect();
});
