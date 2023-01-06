declare module 'extapi' {
  const wallpaper: string
  export { wallpaper }
}

declare module '*.vue' {
  const component: any
  export default component
}
