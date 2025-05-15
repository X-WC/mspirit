export const getImageUrl = (filename: string) => {
    const baseURL = useRuntimeConfig().app.baseURL || '/'
    return `${baseURL}images/${filename}`
}
