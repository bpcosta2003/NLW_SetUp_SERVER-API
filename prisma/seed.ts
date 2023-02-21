import {PrismaClient} from "@prisma/client";
import {ObjectId} from "bson";

const prisma = new PrismaClient();

var listaDatas = [
  "2023-02-01T03:00:00.000z",
  "2023-02-02T03:00:00.000z",
  "2023-02-03T03:00:00.000z",
  "2023-02-04T03:00:00.000z",
  "2023-02-05T03:00:00.000z",
  "2023-02-10T03:00:00.000z",
  "2023-02-11T03:00:00.000z",
  "2023-02-12T03:00:00.000z",
  "2023-02-13T03:00:00.000z",
  "2023-02-14T03:00:00.000z",
];
var listaHabitos = [
  "Beber 3L água",
  "Ir na academia",
  "Dormir 8h",
  "Lavar louça",
  "Estudar inglês",
  "Programar",
  "Fazer almoço",
  "Ler 30 minutos",
  "Dormir de tarde",
  "Jogar videogame",
];
var listaIds = [
  new ObjectId().toString(),
  new ObjectId().toString(),
  new ObjectId().toString(),
  new ObjectId().toString(),
  new ObjectId().toString(),
  new ObjectId().toString(),
  new ObjectId().toString(),
  new ObjectId().toString(),
  new ObjectId().toString(),
  new ObjectId().toString(),
];

async function run() {
  await prisma.habit.deleteMany();
  await prisma.day.deleteMany();

  /**
   * Create habits
   */
  await Promise.all([
    prisma.habit.create({
      data: {
        id: listaIds[0],
        title: listaHabitos[0],
        created_at: new Date(listaDatas[0]),
        weekDays: {
          create: [
            {week_day: 1},
            {week_day: 2},
            {week_day: 3},
            {week_day: 4},
            {week_day: 5},
            {week_day: 6},
            {week_day: 7},
          ],
        },
      },
    }),

    prisma.habit.create({
      data: {
        id: listaIds[2],
        title: listaHabitos[2],
        created_at: new Date(listaDatas[2]),
        weekDays: {
          create: [
            {week_day: 1},
            {week_day: 2},
            {week_day: 3},
            {week_day: 4},
            {week_day: 5},
            {week_day: 6},
            {week_day: 7},
          ],
        },
      },
    }),

    prisma.habit.create({
      data: {
        id: listaIds[3],
        title: listaHabitos[3],
        created_at: new Date(listaDatas[3]),
        weekDays: {
          create: [
            {week_day: 1},
            {week_day: 2},
            {week_day: 3},
            {week_day: 4},
            {week_day: 5},
            {week_day: 6},
            {week_day: 7},
          ],
        },
      },
    }),

    prisma.habit.create({
      data: {
        id: listaIds[4],
        title: listaHabitos[4],
        created_at: new Date(listaDatas[4]),
        weekDays: {
          create: [
            {week_day: 1},
            {week_day: 2},
            {week_day: 3},
            {week_day: 4},
            {week_day: 5},
            {week_day: 6},
            {week_day: 7},
          ],
        },
      },
    }),
  ]);

  await Promise.all([
    /**
     * Habits (Complete/Available): 1/1
     */

    prisma.day.create({
      data: {
        /** Monday */
        date: new Date(listaDatas[0]),
        dayHabits: {
          create: {
            habit_id: listaIds[0],
          },
        },
      },
    }),

    prisma.day.create({
      data: {
        /** Monday */
        date: new Date(listaDatas[3]),
        dayHabits: {
          create: {
            habit_id: listaIds[3],
          },
        },
      },
    }),

    prisma.day.create({
      data: {
        /** Monday */
        date: new Date(listaDatas[5]),
        dayHabits: {
          create: {
            habit_id: listaIds[2],
          },
        },
      },
    }),
  ]);
}

run()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
