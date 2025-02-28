import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

export const sessionOptions = {
    cookieName: "myapp",
    password: "secret",
};

// Helper untuk API Route
export function withSessionRoute(handler) {
    return withIronSessionApiRoute(handler, sessionOptions);
}

// Helper untuk SSR
export function withSessionSsr(handler) {
    return withIronSessionSsr(async (context) => {
        const result = await handler(context);
        if (context.req.session.message) {
            // Flash message hanya muncul sekali, hapus setelah diakses
            context.req.session.message = null;
            await context.req.session.save();
        }
        return result;
    }, sessionOptions);
}
