import * as fs from 'fs'

export const fileExists = (filePath: string): Promise<boolean> => {
    return new Promise(resolve => fs.access(filePath, error => resolve(error ? false : true)))
}
