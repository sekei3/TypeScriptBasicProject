import * as fs from 'fs'

export function* readFileGenerator(fileName: string): any {
    let fd: any
    const maxBufferSize = 1024
    try {
        fd = fs.openSync(fileName, 'rs')
        const stats = fs.fstatSync(fd)
        const bufferSize = Math.min(stats.size, maxBufferSize)
        const buffer = Buffer.alloc(bufferSize + 4)
        let filePos = 0, line

        while(filePos > -1) {
            [line, filePos] = readLine(fd, buffer, bufferSize, filePos)
            if(filePos > -1){
                yield line
            }
        }
        yield buffer.toString()
    }
    catch(e) {
        console.error('readLine: ', e.message)
    } 
    finally {
        fd && fs.closeSync(fd)
    }
}

function readLine(fd: any, buffer: Buffer, bufferSize: number, position: number): [string, number] {
    let line = ''
    const crSize = '\n'.length

    while(true) {
        const readSize = fs.readSync(fd, buffer, 0, bufferSize, position)
        if(readSize > 0) {
            const temp = buffer.toString('utf8', 0, readSize)
            const index = temp.indexOf('\n')

            if(index > -1)
            {
                line += temp.substr(0, index)
                position += index + crSize
                break
            } 
            else {
                line += temp
                position += temp.length
                console.log(line)
            }
        }
        else {
            position = -1 // end of file
            break
        }
    }
    return [line.trim(), position]
}