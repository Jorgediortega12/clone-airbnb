
import { initialData } from ".";
import prisma from '../lib/prisma';

export async function main() {

    await prisma.user.deleteMany();

    const { user } = initialData;

    await prisma.user.createMany({
        data: user
    })
}

(() => {

    if (process.env.NODE_ENV === "production") return null;

    main()
})();