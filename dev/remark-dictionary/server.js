const {read, write} = require('to-vfile');
const remark = require('remark');
const mdx = require('remark-mdx');
const plugin = require('./plugin');
const html = require('remark-html')
const fix = require('./fix');

const fs = require('fs');

const start = async () => {
    const inputFile = './readme.md'
    const file = await read(inputFile)
    const contents = await remark()
        .use(mdx)
        // .use(() => tree => { console.log(tree); })
        .use(plugin)
        .use(html)
        .process(file);

    // fs.writeFileSync('./readme-output.md', contents.contents);
    // console.log('finished');

    await write({
        path: './readme-output.md',
        contents: contents.contents.replace(/&#x3C;/gi, '<')
    });
};

start();