export const CHANGE_SLIDE = 'CHANGE_SLIDE';

const changeSlide = (index = 0) => {
    return {
        type: CHANGE_SLIDE,
        index,
    };
};

export default changeSlide;
