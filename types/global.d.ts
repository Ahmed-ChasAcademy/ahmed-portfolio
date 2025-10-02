declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module 'particles.js' {
  const particlesJS: any;
  export default particlesJS;
}