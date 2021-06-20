export const zip = (keys: string[], values: any[]) => {
    const makeObject = (key: string, value: any): object => ({[key]: value})
    const mergeObject = (a: any[]) => a.reduce((sum, value) => ({...sum, ...value}), {})

    let temp = keys.map((key, index) => [key, values[index]])
    .filter((obj) => obj[0] && obj[1])
    .map(obj => makeObject(obj[0], obj[1]))
    
    return mergeObject(temp)
}