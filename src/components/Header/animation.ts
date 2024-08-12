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
