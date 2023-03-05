declare module '*.jpg' {
  const jpg: string;
  export default jpg;
}

declare interface Window {
  api: {
    getAppPath: () => void;
  }
}
