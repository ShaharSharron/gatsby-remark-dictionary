
# gatsby-remark-dictionary

### Define once auto apply everywhere. 
Create a dictionary of words and phrases to be processed into links and highlights automatically throughout all MD/MDX files.

## Install

[npm][]:

```sh
npm install gatsby-remark-dictionary
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
    "matchers":["alphabet inc", "google llc"],
    "link": "https://en.wikipedia.org/wiki/Alphabet_Inc.",
    "title": "is an American multinational conglomerate headquartered in Mountain View, California. It was created through a restructuring of Google on October 2, 2015,[2] and became the parent company of Google and several former Google subsidiaries"
}, {
    "matchers":["facebook"],
    "link": "https://en.wikipedia.org/wiki/Facebook",
    "title": "is an American online social media and social networking service based in Menlo Park, California, and a flagship service of the namesake company Facebook, Inc."
}];
```

Say we have the following file, `example.md`:

```markdown
Example Article text. Lists out some headings. Easy to customize.

# Example H1
an example of text with alphabet inc inside

## Test h2
an example facebook

### Heading H3
google google llc llc google

## Lists
- Item 1 google llc
- Item 2 facebook
- Item 3 alphabet inc.
- Item 4 example
- Item 5 more test
```

Now, building the website yields:

```html
example.md: no issues found
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>example</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <h1>Hello world</h1>
    <blockquote>
      <p>Block quote.</p>
    </blockquote>
    <p>Some <em>emphasis</em>, <strong>importance</strong>, and <code>code</code>.</p>
  </body>
</html>
```

## Options

| Name                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dictionary`              | require the file containing the markdown definitions.


## How to run tests

[npm][]:

```sh
npm run test
```