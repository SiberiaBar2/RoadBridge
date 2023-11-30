declare module '*.vue'

declare module '*.module.scss' {
    const styles: { [key: string]: string };
    export default styles;
}