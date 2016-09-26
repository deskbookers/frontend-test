export const CHANGE_SLIDE = 'CHANGE_SLIDE';

export const changeSlide = (index = 0) => {
    return {
        type: CHANGE_SLIDE,
        index,
    };
};
