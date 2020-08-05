const Jsdoc2md = require('@rsksmart/rskjs-jsdoc2md')
const path = require('path')
const fs = require('fs')

const depth = 3
const basePath = path.resolve(__dirname, '../src')
const files = fs.readdirSync(basePath).filter(f => f.endsWith('.js')).map(f => {
  return { path: `${basePath}/${f}`, name: titleFromFile(f) }
})
const parser = Jsdoc2md({ 'heading-depth': depth })

mkReadme(files).then(console.log)


async function mkReadme (files) {
  try {
    let content = fs.readFileSync(path.resolve(__dirname, './HEAD.md'), 'utf-8')
    for (let file of files) {
      let { name, path } = file
      let txt = await parser.render(path)
      const h = '#'.repeat(depth - 1)
      if (txt) content += `\n${h} ${name}\n${txt}`
    }
    return content
  } catch (err) {
    console.error(err)
  }
}

function titleFromFile (file) {
  let title = file.split('.')[0]
  title = title.charAt(0).toUpperCase() + title.slice(1);
  return title
}