declare module 'wow.js' {
  interface WowOptions {
    boxClass?: string;
    animateClass?: string;
    offset?: number;
    mobile?: boolean;
    live?: boolean;
    callback?: (box: HTMLElement) => void;
  }

  class WOW {
    constructor(options?: WowOptions);
    init(): void;
  }

  export default WOW;
}
