import { bounce, bounceUp, fade, flip, wobble } from 'styles/animation';

export const getAnimation = (position, type) => {
  switch(type) {
    case 'wobble': return wobble[position];
    case 'bounce': return bounce[position];
    case 'fade': return fade[position];
    case 'flip': return flip;
    default: return bounceUp;
  }
};
