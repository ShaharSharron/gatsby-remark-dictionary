
# gatsby-remark-dictionary

### Define once auto apply everywhere. 
Create a dictionary of words and phrases to be processed into links and highlights automatically throughout all MD/MDX files.

## Install

```sh
npm install --save gatsby-remark-dictionary
```

## How to use

### Add to config file
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

### Add a definition to dictionary file

```javascript
// make sure you export an array of objects - each object is a definition containing
// matchers - phrases that matches the definition to be translated
// link - optional - if the phrase should be converted into a link - provide the URL for the link
// title - optional - if the phrase should be converted into an highlighter, provide the text to be presented when hovered.
module.exports = [{
    "matchers":["alphabet inc"],
    "link": "https://en.wikipedia.org/wiki/Alphabet_Inc.",
    "title": "is an American multinational conglomerate headquartered in Mountain View, California."
}, {
    "matchers":["google llc", "biggest search engine company"],
    "link": "https://en.wikipedia.org/wiki/Google",
    "title": "is an American multinational technology company that specializes in Internet-related services and products"
}, {
    "matchers":["facebook"],
    "link": "https://en.wikipedia.org/wiki/Facebook",
    "title": "is an American online social media and social networking service based in Menlo Park, California."
}];
```

Say we have the following file, `example.md`:

```markdown
Example Article text. Lists out some headings. Easy to customize.

# Example H1
an example of text with alphabet inc inside

## Test h2
facebook

### Heading H3
What people think about google:
- it's biggest search engine company
- it knows everything

```

Now, building the website yields:

```html
<div>
    <p>Example Article text. Lists out some headings. Easy to customize.</p>
    <h1>Example H1</h1>
    <p>
        an example of text with 
        <a href="https://en.wikipedia.org/wiki/Alphabet_Inc." target="_blank" rel="noopener noreferrer">
            <abbr title="is an American multinational conglomerate headquartered in Mountain View, California.">alphabet inc</abbr>
        </a>
         inside
    </p>
    
    <h2>Test h2</h2>
    <p>
        <a href="https://en.wikipedia.org/wiki/Facebook" target="_blank" rel="noopener noreferrer">
            <abbr title="is an American online social media and social networking service based in Menlo Park, California.">facebook</abbr>
        </a>
    </p>
    
    <h3>Heading H3</h3>
    <p>What people think about google:</p>
    <ul>
        <li>they own  
            <a href="https://en.wikipedia.org/wiki/Google" target="_blank" rel="noopener noreferrer">
                <abbr title="is an American multinational technology company that specializes in Internet-related services and products">biggest search engine company</abbr>
            </a>
        </li>
        <li>they know everything</li>
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