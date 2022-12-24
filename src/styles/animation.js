import { keyframes } from 'styled-components';

const fade = {
  'top-left': keyframes`
    0% {
      transform: translateX(-150%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  `,
  'top-right': keyframes`
    0% {
      transform: translateX(150%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  `,
  'top-middle': keyframes`
    0% {
      transform: translateY(-150%);
      opacity: 0.5;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  `,
  'bottom-left': keyframes`
    0% {
      transform: translateX(-150%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  `,
  'bottom-right': keyframes`
    0% {
      transform: translateX(150%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  `,
  'bottom-middle': keyframes`
    0% {
      transform: translateY(150%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  `,
};

const wobble = {
  'top-left': keyframes`
    0% { transform: translateX(-150%) }
    25% { transform: translateX(-15%) rotate(-3deg) }
    50% { transform: translateX(10%) rotate(2deg) }
    75% { transform: translateX(-5%) rotate(-1deg) }
    100% { transform: translateX(0%) }
  `,
  'top-right': keyframes`
    0% { transform: translateX(150%) }
    25% { transform: translateX(-15%) rotate(-3deg) }
    50% { transform: translateX(10%) rotate(2deg) }
    75% { transform: translateX(-5%) rotate(-1deg) }
    100% { transform: translateX(0%) }
  `,
  'top-middle': keyframes`
    0% { transform: translateY(-150%) }
    25% { transform: translateY(-15%) rotate(-3deg) }
    50% { transform: translateY(10%) rotate(2deg) }
    75% { transform: translateY(-5%) rotate(-1deg) }
    100% { transform: translateY(0%) }
  `,
  'bottom-left': keyframes`
    0% { transform: translateX(-150%) }
    25% { transform: translateX(-15%) rotate(-3deg) }
    50% { transform: translateX(10%) rotate(2deg) }
    75% { transform: translateX(-5%) rotate(-1deg) }
    100% { transform: translateX(0%) }
  `,
  'bottom-right': keyframes`
    0% { transform: translateX(150%) }
    25% { transform: translateX(-15%) rotate(-3deg) }
    50% { transform: translateX(10%) rotate(2deg) }
    75% { transform: translateX(-5%) rotate(-1deg) }
    100% { transform: translateX(0%) }
  `,
  'bottom-middle': keyframes`
    0% { transform: translateY(150%) }
    25% { transform: translateY(-15%) rotate(-3deg) }
    50% { transform: translateY(10%) rotate(2deg) }
    75% { transform: translateY(-5%) rotate(-1deg) }
    100% { transform: translateY(0%) }
  `,
};

const bounce = {
  'top-left': keyframes`
    0% {
      transform: translateX(-150%);
      opacity: 0;
    }
    40% {
      transform: translateX(30px);
      opacity: 1;
    }
    60% { transform: translateX(-20px); }
    80% { transform: translateX(10px); }
    100% { transform: translateX(0); }
  `,
  'top-right': keyframes`
    0% {
      transform: translateX(150%);
      opacity: 0;
    }
    40% {
      transform: translateX(-30px);
      opacity: 1;
    }
    60% { transform: translateX(20px); }
    80% { transform: translateX(-10px); }
    100% { transform: translateX(0); }
  `,
  'top-middle': keyframes`
    0% {
      transform: translateY(-150%);
      opacity: 0;
    }
    40% {
      transform: translateY(30px);
      opacity: 1;
    }
    60% { transform: translateY(-20px); }
    80% { transform: translateY(10px); }
    100% { transform: translateY(0); }
  `,
  'bottom-left': keyframes`
    0% {
      transform: translateX(-150%);
      opacity: 0;
    }
    40% {
      transform: translateX(30px);
      opacity: 1;
    }
    60% { transform: translateX(-20px); }
    80% { transform: translateX(10px); }
    100% { transform: translateX(0); }
  `,
  'bottom-right': keyframes`
    0% {
      transform: translateX(150%);
      opacity: 0;
    }
    40% {
      transform: translateX(-30px);
      opacity: 1;
    }
    60% { transform: translateX(20px); }
    80% { transform: translateX(-10px); }
    100% { transform: translateX(0); }
  `,
  'bottom-middle': keyframes`
    0% {
      transform: translateY(150%);
      opacity: 0;
    }
    40% {
      transform: translateY(-30px);
      opacity: 1;
    }
    60% { transform: translateY(20px); }
    80% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  `,
};

const bounceUp = keyframes`
  0% {
    transform: scale(.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  70% { transform: scale(.9); }
  100% { transform: scale(1); }
`;

const flip = keyframes `
  0% {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  100% {
    transform: perspective(400px);
  }
`;

export { flip, bounce, bounceUp, fade, wobble };
