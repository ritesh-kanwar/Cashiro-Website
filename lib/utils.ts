import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

<<<<<<< HEAD
export function assetPath(path: string, theme?: string) {
    if (!path) return path
    if (path.startsWith('http') || path.startsWith('data:')) return path

    let processedPath = path
    if (theme) {
        processedPath = processedPath.replace(/\$\{theme\}/g, theme)
    }

    const basePath = '/Cashiro-Website'
    if (processedPath.startsWith(basePath)) return processedPath

    const cleanPath = processedPath.startsWith('/') ? processedPath : `/${processedPath}`
=======
export function assetPath(path: string) {
    const basePath = '/Cashiro-Website'
    if (path.startsWith('http') || path.startsWith('data:')) return path
    const cleanPath = path.startsWith('/') ? path : `/${path}`
>>>>>>> 9ac8eed57cee27afe4e447f827a666797920dd06
    return `${basePath}${cleanPath}`
}
