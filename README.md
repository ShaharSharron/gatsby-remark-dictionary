
# gatsby-remark-dictionary

### Define once auto apply everywhere. 
Create a dictionary of words and phrases to be processed into links and highlights automatically throughout all MD/MDX files.

### Is it safe?
This plugin is used by a big tech company in the bay and passed all security reviews needed.

### If you're scanning every text on markdown files, will is slow my build?
This plugin is built using trie and therefore performance are fast, and was used to build a KB with ~ 1000 pages without any significant slowdown.

## Install

```sh
npm install --save gatsby-remark-dictionary
```

## How to use

### Add to config file
#### Using gatsby-transformer-remark
```javascript 
// Add to the plugins list in your gatsby-config.js
plugins: [{
    resolve: `gatsby-transformer-remark`,
    options: {
        plugins: [{
            resolve: `gatsby-remark-dictionary`,
            options: {
                // Path to the markdown dictionary file
                dictionary: require('./markdown-dictionary.js')
            },
        }],
    },
}]
```

#### Using gatsby-plugin-mdx
```javascript 
// Add to the plugins list in your gatsby-config.js
plugins: [{
    resolve: 'gatsby-plugin-mdx',
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: 'gatsby-remark-dictionary',
          options: {
            dictionary: require('./markdown-dictionary.js')
          }
        }
}   ]
```

### Add a definition to dictionary file

```javascript
// make sure you export an array of objects - each object is a definition containing
// matchers - phrases that matches the definition to be translated
// link - optional - if the phrase should be converted into a link - provide the URL for the link
// title - optional - if the phrase should be converted into an highlighter, provide the text to be presented when hovered.
module.exports = [{
    "matchers":["amazon"],
    "title": "is an American multinational technology company based in Seattle, Washington, which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence"
}, {
    "matchers":["google llc", "alphabet inc", "biggest search engine"],
    "link": "https://en.wikipedia.org/wiki/Google",
    "title": "is an American multinational technology company that specializes in Internet-related services and products"
}, {
    "matchers":["facebook"],
    "link": "https://en.wikipedia.org/wiki/Facebook",
}];
```

Say we have the following file, `example.md`:

```markdown
Example Article text. Lists out some headings. Easy to customize.

# Example H1
AWS cloud is an amazon product

## Test h2
during the pandemic people are using facebook products more than ever

### Heading H3
What people think about google:
- they are the biggest search engine
- their parent company is alphabet inc
- they have the answer to every question

```

Now, building the website yields:

```html
<div>
    <p>Example Article text. Lists out some headings. Easy to customize.</p>
    <h1>Example H1</h1>
    <p>
        AWS cloud is an
        <abbr title="is an American multinational technology company based in Seattle, Washington, which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence">
            amazon
        </abbr>
         product
    </p>
    
    <h2>Test h2</h2>
    <p>
        during the pandemic people are using
        <a href="https://en.wikipedia.org/wiki/Facebook" target="_blank" rel="noopener noreferrer">facebook</a> 
        products more than ever
    </p>
    
    <h3>Heading H3</h3>
    <p>What people think about google:</p>
    <ul>
        <li>
            they are the
            <a href="https://en.wikipedia.org/wiki/Google" target="_blank" rel="noopener noreferrer">
                <abbr title="is an American multinational technology company that specializes in Internet-related services and products">
                    biggest search engine
                </abbr>
            </a>    
        </li>
        <li>
            their parent company is 
            <a href="https://en.wikipedia.org/wiki/Google" target="_blank" rel="noopener noreferrer">
                <abbr title="is an American multinational technology company that specializes in Internet-related services and products">alphabet inc</abbr>
            </a>
        </li>
        <li>they have the answer to every question</li>
    </ul>
</div>
```

## Options

| Name                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dictionary`              | require the file containing the markdown definitions.


## How to run tests

```sh
npm run test
```