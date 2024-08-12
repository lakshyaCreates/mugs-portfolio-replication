export const headerVariants = {
    open: (i: any) => ({
        top: 0,
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.05 * i,
        },
    }),
    close: (i: any) => ({
        top: -90,
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.05 * i,
        },
    }),
};

export const subHeaderVariants = {
    open: (i: any) => ({
        backgroundColor: "hsl(var(--background) / 0.9)",
        backdropFilter: "blur(40px)",
        borderColor: "#ff8233",
        borderBottomWidth: "1px",
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.05 * i,
        },
    }),
    close: (i: any) => ({
        borderColor: "transparent",
        backdropFilter: "blur(0px)",
        borderBottomWidth: "0px",
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.05 * i,
        },
    }),
};
