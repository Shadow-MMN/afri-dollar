import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Create a test user
  const user = await prisma.user.upsert({
    where: { email: 'test@afridollar.com' },
    update: {},
    create: {
      email: 'test@afridollar.com',
      firstName: 'Test',
      lastName: 'User',
      isVerified: true,
      isActive: true,
    },
  });

  console.log({ user });

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
