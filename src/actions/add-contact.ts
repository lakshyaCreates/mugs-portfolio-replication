"use server";

import prisma from "^/prisma/db";

export async function addContact(email: string) {
    await prisma.contact.create({
        data: {
            email,
        },
    });
}
