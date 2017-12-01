const fs = require('fs')
const path = require('path')

const folder = process.argv[process.argv.length - 1]

console.log(folder)

function tree(dir, level = 1) {
    const files = fs.readdirSync(dir)

    files.forEach(file => {
        const stat = fs.lstatSync(path.join(dir, file))

        let out = ''

        for (let i = 0; i < level; i++) {
        	out += '|' + (i < level - 1? ' ': '') 	
        }

        console.log(out + '-' + file)

        if (stat.isDirectory()) {
        	tree(path.join(dir, file), level + 1)
        }
    })
}

tree(folder)

/*

.
|-.DS_Store
|-big-file.dat
|-data.json
|-download-image.js
|-file-tree.js
|-file-upload.js
|-http-read-file.js
|-node_modules
| |-formidable

*/