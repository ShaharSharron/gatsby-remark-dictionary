const AMAZON_TITLE = `is an American multinational technology company based in Seattle, Washington, which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence`;

const FACEBOOK_LINK = `https://en.wikipedia.org/wiki/Facebook`;

const GOOGLE_LINK = `https://en.wikipedia.org/wiki/Google`;
const GOOGLE_TITLE = `is an American multinational technology company that specializes in Internet-related services and products`;

const fs = require('fs');
const util = require('util');

describe("Build Output", () => {

  let fileText;
  
  beforeEach(async () => {
    const readFile = util.promisify(fs.readFile);
    fileText = await readFile('public/test-article/index.html', 'utf8');
  });

  it("should have a public/test-article/index.html file", () => {
    expect(fileText).toBeDefined();
  });

  it("should have the output contain the amazon title", () => {
    expect(fileText).toContain(AMAZON_TITLE);
  });

  it("should have the output contain the facebook link", () => {
    expect(fileText).toContain(FACEBOOK_LINK);
  });

  it("should have the output contain the google llc. title", () => {
    expect(fileText).toContain(GOOGLE_TITLE);
  });

  it("should have the output contain the google llc. link", () => {
    expect(fileText).toContain(GOOGLE_LINK);
  });
});
