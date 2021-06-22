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
        //let temp = 0

        while(filePos > -1) {
            [line, filePos] = readLine(fd, buffer, bufferSize, filePos)
            if(filePos > -1){
                //console.log(`${temp++}: `, buffer.toString())
                yield line
            }
        }
        // console.log(buffer.toString())
        yield line
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
            //console.log(`readSize:{${readSize}, bufferSize:{${bufferSize}, position:{${position}}`, buffer )
            const temp = buffer.toString('utf8', 0, readSize)
            const index = temp.indexOf('\n')
            //console.log(temp)
            if(index > -1)
            {
                line += temp.substr(0, index)
                position += index + crSize
                break
            } 
            else {
                line += temp
                position += temp.length
            }
        }
        else {
            position = -1 // end of file
            break
        }
    }
    return [line.trim(), position]
}