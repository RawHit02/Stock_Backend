export const APP_CONFIG = () => {
    return {
        APP_NAME: process.env["APP_NAME"],
        APP_ENV: process.env["APP_ENV"],
    }
}