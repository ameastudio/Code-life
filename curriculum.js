window.CODE_LIFE_DATA = {
  "tracks": {
    "html": {
      "name": "HTML",
      "zone": "HTML Town",
      "icon": "<>",
      "tagline": "Build the structure",
      "unlock": "Start here"
    },
    "css": {
      "name": "CSS",
      "zone": "CSS District",
      "icon": "✦",
      "tagline": "Make it beautiful",
      "unlock": "Finish HTML Town + Boss Build"
    },
    "js": {
      "name": "JavaScript",
      "zone": "JavaScript City",
      "icon": "⚡",
      "tagline": "Bring it to life",
      "unlock": "Finish CSS District + Boss Build"
    }
  },
  "lessons": [
    {
      "id": "html-01",
      "track": "html",
      "title": "Meet HTML",
      "time": 4,
      "concept": "HTML gives a webpage its structure. Tags tell the browser what each piece of content is.",
      "steps": [
        "Think of HTML like the skeleton of a webpage.",
        "<h1> starts a main heading.",
        "</h1> tells the browser the heading is finished."
      ],
      "example": "<h1>Hello!</h1>",
      "task": "Create a main heading that says Code Life.",
      "starter": "<!-- Type your heading below -->\n",
      "hints": [
        "A main heading uses the h1 tag.",
        "Put Code Life between the opening and closing tags.",
        "Try: <h1>Code Life</h1>"
      ],
      "rules": [
        {
          "value": "<h1\\b[^>]*>\\s*Code Life\\s*</h1>",
          "message": "I can’t find an h1 that says Code Life yet."
        }
      ],
      "quiz": [
        {
          "q": "What is HTML mainly used for?",
          "options": [
            "Structuring a webpage",
            "Changing colors",
            "Saving data"
          ],
          "answer": 0
        },
        {
          "q": "Which tag is the main page heading?",
          "options": [
            "<p>",
            "<h1>",
            "<img>"
          ],
          "answer": 1
        }
      ],
      "baseHtml": null
    },
    {
      "id": "html-02",
      "track": "html",
      "title": "Paragraphs & text",
      "time": 4,
      "concept": "Paragraphs hold normal blocks of text on a webpage.",
      "steps": [
        "Headings introduce a section.",
        "Paragraphs explain or add normal text.",
        "The <p> tag opens a paragraph and </p> closes it."
      ],
      "example": "<p>I am learning to code.</p>",
      "task": "Create a paragraph that says I can code.",
      "starter": "<h1>My first page</h1>\n",
      "hints": [
        "Paragraph starts with p.",
        "Put the sentence between <p> and </p>.",
        "Try: <p>I can code</p>"
      ],
      "rules": [
        {
          "value": "<p\\b[^>]*>\\s*I can code\\.?\\s*</p>",
          "message": "Add a paragraph that says I can code."
        }
      ],
      "quiz": [
        {
          "q": "Which tag makes a paragraph?",
          "options": [
            "<p>",
            "<h1>",
            "<button>"
          ],
          "answer": 0
        },
        {
          "q": "Where does visible paragraph text go?",
          "options": [
            "Between <p> and </p>",
            "Inside CSS only",
            "After </html>"
          ],
          "answer": 0
        }
      ],
      "baseHtml": null
    },
    {
      "id": "html-03",
      "track": "html",
      "title": "Buttons",
      "time": 5,
      "concept": "A button gives a visitor something they can press. HTML creates it; JavaScript can make it react later.",
      "steps": [
        "<button> starts the button.",
        "The words inside become the button label.",
        "</button> closes it."
      ],
      "example": "<button>Shop now</button>",
      "task": "Create a button labeled Click me.",
      "starter": "<h1>My app</h1>\n",
      "hints": [
        "Use the button tag.",
        "Put Click me between the tags.",
        "Try: <button>Click me</button>"
      ],
      "rules": [
        {
          "value": "<button\\b[^>]*>\\s*Click me\\s*</button>",
          "message": "Make a button whose label is Click me."
        }
      ],
      "quiz": [
        {
          "q": "What appears between <button> and </button>?",
          "options": [
            "The button label",
            "The page color",
            "A database"
          ],
          "answer": 0
        },
        {
          "q": "What will make the button react later?",
          "options": [
            "JavaScript",
            "Only HTML",
            "A heading"
          ],
          "answer": 0
        }
      ],
      "baseHtml": null
    },
    {
      "id": "html-04",
      "track": "html",
      "title": "Links",
      "time": 5,
      "concept": "Links connect one page or website to another.",
      "steps": [
        "The <a> tag creates a link.",
        "href stores where the link should go.",
        "The words between the tags are what you tap."
      ],
      "example": "<a href=\"https://example.com\">Visit site</a>",
      "task": "Create a link to https://example.com that says Visit site.",
      "starter": "<h1>My links</h1>\n",
      "hints": [
        "Start with an <a> tag.",
        "Add href=\"https://example.com\".",
        "Try: <a href=\"https://example.com\">Visit site</a>"
      ],
      "rules": [
        {
          "value": "<a\\b[^>]*href\\s*=\\s*[\"\\']https://example\\.com[\"\\'][^>]*>\\s*Visit site\\s*</a>",
          "message": "Add the example.com link labeled Visit site."
        }
      ],
      "quiz": [
        {
          "q": "Which attribute stores a link destination?",
          "options": [
            "href",
            "src",
            "class"
          ],
          "answer": 0
        },
        {
          "q": "Which tag creates a link?",
          "options": [
            "<a>",
            "<linkme>",
            "<p>"
          ],
          "answer": 0
        }
      ],
      "baseHtml": null
    },
    {
      "id": "html-05",
      "track": "html",
      "title": "Images",
      "time": 5,
      "concept": "Images use src for the picture location and alt for a useful text description.",
      "steps": [
        "<img> places an image.",
        "src tells the browser which image to load.",
        "alt describes the image if it cannot be seen."
      ],
      "example": "<img src=\"flower.jpg\" alt=\"Flower\">",
      "task": "Add an image with src=\"flower.jpg\" and alt=\"Flower\".",
      "starter": "<h1>Photo gallery</h1>\n",
      "hints": [
        "Use the img tag.",
        "Add src=\"flower.jpg\".",
        "Add alt=\"Flower\" too."
      ],
      "rules": [
        {
          "value": "<img\\b[^>]*src\\s*=\\s*[\"\\']flower\\.jpg[\"\\'][^>]*>",
          "message": "Add src=\"flower.jpg\"."
        },
        {
          "value": "<img\\b[^>]*alt\\s*=\\s*[\"\\']Flower[\"\\'][^>]*>",
          "message": "Add alt=\"Flower\"."
        }
      ],
      "quiz": [
        {
          "q": "What does src tell the browser?",
          "options": [
            "Which image to load",
            "What color to use",
            "How to make a loop"
          ],
          "answer": 0
        },
        {
          "q": "Why is alt text important?",
          "options": [
            "Accessibility",
            "It makes images bigger",
            "It runs JavaScript"
          ],
          "answer": 0
        }
      ],
      "baseHtml": null
    },
    {
      "id": "html-06",
      "track": "html",
      "title": "Lists",
      "time": 5,
      "concept": "Lists organize related items. <ul> makes a bullet list and <li> makes each item.",
      "steps": [
        "<ul> opens a bullet list.",
        "Each <li> is one list item.",
        "Close the list with </ul>."
      ],
      "example": "<ul>\n  <li>Dresses</li>\n  <li>Sets</li>\n</ul>",
      "task": "Create a list with an item that says Dresses.",
      "starter": "<h1>Products</h1>\n",
      "hints": [
        "Open a <ul>.",
        "Put <li>Dresses</li> inside it.",
        "Close the list with </ul>."
      ],
      "rules": [
        {
          "value": "<ul\\b[^>]*>[\\s\\S]*<li\\b[^>]*>\\s*Dresses\\s*</li>[\\s\\S]*</ul>",
          "message": "Put a Dresses list item inside a ul."
        }
      ],
      "quiz": [
        {
          "q": "Which tag makes one list item?",
          "options": [
            "<li>",
            "<ul>",
            "<list>"
          ],
          "answer": 0
        },
        {
          "q": "Which tag wraps a bullet list?",
          "options": [
            "<ul>",
            "<img>",
            "<button>"
          ],
          "answer": 0
        }
      ],
      "baseHtml": null
    },
    {
      "id": "html-07",
      "track": "html",
      "title": "Page sections",
      "time": 6,
      "concept": "Semantic tags describe what different parts of a page are for.",
      "steps": [
        "<header> often holds the top area.",
        "<main> holds the page’s main content.",
        "These names help people and browsers understand the page."
      ],
      "example": "<header><h1>Code Life</h1></header>\n<main><p>Welcome!</p></main>",
      "task": "Create a main section containing a paragraph that says Welcome.",
      "starter": "<header><h1>My site</h1></header>\n",
      "hints": [
        "Open a <main> section.",
        "Put a paragraph inside it.",
        "Try: <main><p>Welcome</p></main>"
      ],
      "rules": [
        {
          "value": "<main\\b[^>]*>[\\s\\S]*<p\\b[^>]*>\\s*Welcome\\.?\\s*</p>[\\s\\S]*</main>",
          "message": "Put a Welcome paragraph inside <main>."
        }
      ],
      "quiz": [
        {
          "q": "What belongs in <main>?",
          "options": [
            "The primary page content",
            "Only CSS",
            "Passwords"
          ],
          "answer": 0
        },
        {
          "q": "Why use semantic tags?",
          "options": [
            "They describe page sections",
            "They store coins",
            "They replace JavaScript"
          ],
          "answer": 0
        }
      ],
      "baseHtml": null
    },
    {
      "id": "html-08",
      "track": "html",
      "title": "Forms & labels",
      "time": 7,
      "concept": "Forms collect information. Labels explain what an input is for.",
      "steps": [
        "A <label> names the field.",
        "An <input> lets a person enter something.",
        "A label’s for value should match the input’s id."
      ],
      "example": "<label for=\"email\">Email</label>\n<input id=\"email\" type=\"email\">",
      "task": "Create a label with for=\"name\" and an input with id=\"name\".",
      "starter": "<h1>Join the club</h1>\n",
      "hints": [
        "Create <label for=\"name\">Name</label>.",
        "Then add an input.",
        "Give the input id=\"name\" so they match."
      ],
      "rules": [
        {
          "value": "<label\\b[^>]*for\\s*=\\s*[\"\\']name[\"\\'][^>]*>",
          "message": "Add a label with for=\"name\"."
        },
        {
          "value": "<input\\b[^>]*id\\s*=\\s*[\"\\']name[\"\\'][^>]*>",
          "message": "Add an input with id=\"name\"."
        }
      ],
      "quiz": [
        {
          "q": "How do you connect a label to an input?",
          "options": [
            "Match for and id",
            "Give them the same color",
            "Use console.log"
          ],
          "answer": 0
        },
        {
          "q": "Which element accepts typed information?",
          "options": [
            "<input>",
            "<h1>",
            "<ul>"
          ],
          "answer": 0
        }
      ],
      "baseHtml": null
    },
    {
      "id": "css-01",
      "track": "css",
      "title": "Meet CSS",
      "time": 4,
      "concept": "CSS changes how HTML looks. A rule selects something and gives it styles.",
      "steps": [
        "h1 is a selector: it chooses the heading.",
        "color is a property: what you want to change.",
        "blue is the value: what you change it to."
      ],
      "example": "h1 {\n  color: blue;\n}",
      "task": "Make the h1 text blue.",
      "starter": "/* Make the heading blue */\n",
      "hints": [
        "Select h1.",
        "Use the color property.",
        "Try: h1 { color: blue; }"
      ],
      "rules": [
        {
          "value": "h1\\s*\\{[^}]*color\\s*:\\s*blue\\s*;?",
          "message": "Set the h1 color to blue."
        }
      ],
      "quiz": [
        {
          "q": "What is CSS mainly for?",
          "options": [
            "Page appearance",
            "Page structure",
            "Database storage"
          ],
          "answer": 0
        },
        {
          "q": "In color: blue, what is blue?",
          "options": [
            "The value",
            "The selector",
            "The tag"
          ],
          "answer": 0
        }
      ],
      "baseHtml": "<h1>Code Life</h1><p class=\"highlight\">Practice makes progress.</p><div class=\"card\"><h2>My Card</h2><p>Style me!</p></div><div class=\"row\"><button>One</button><button>Two</button></div>"
    },
    {
      "id": "css-02",
      "track": "css",
      "title": "Background colors",
      "time": 4,
      "concept": "background-color fills the background of an element.",
      "steps": [
        "Choose the element with a selector.",
        "Use background-color.",
        "Change the value and watch the preview update."
      ],
      "example": "body {\n  background-color: lightblue;\n}",
      "task": "Make the page background lightblue.",
      "starter": "h1 { color: navy; }\n",
      "hints": [
        "Select body.",
        "Add background-color.",
        "Try: body { background-color: lightblue; }"
      ],
      "rules": [
        {
          "value": "body\\s*\\{[^}]*background-color\\s*:\\s*lightblue\\s*;?",
          "message": "Set body background-color to lightblue."
        }
      ],
      "quiz": [
        {
          "q": "Which property fills a background?",
          "options": [
            "background-color",
            "font-size",
            "margin"
          ],
          "answer": 0
        },
        {
          "q": "Which selector styles the whole page background here?",
          "options": [
            "body",
            "img",
            "a"
          ],
          "answer": 0
        }
      ],
      "baseHtml": "<h1>Code Life</h1><p class=\"highlight\">Practice makes progress.</p><div class=\"card\"><h2>My Card</h2><p>Style me!</p></div><div class=\"row\"><button>One</button><button>Two</button></div>"
    },
    {
      "id": "css-03",
      "track": "css",
      "title": "Fonts & size",
      "time": 5,
      "concept": "font-size controls how large text appears.",
      "steps": [
        "Select the text you want to change.",
        "Use font-size.",
        "px is a common unit for screen sizes."
      ],
      "example": "h1 {\n  font-size: 32px;\n}",
      "task": "Set h1 font-size to 32px.",
      "starter": "h1 {\n  color: navy;\n}\n",
      "hints": [
        "Work inside the h1 rule.",
        "Add font-size.",
        "Try: font-size: 32px;"
      ],
      "rules": [
        {
          "value": "h1\\s*\\{[^}]*font-size\\s*:\\s*32px\\s*;?",
          "message": "Set h1 font-size to 32px."
        }
      ],
      "quiz": [
        {
          "q": "Which value uses pixels?",
          "options": [
            "32px",
            "blue",
            "bold"
          ],
          "answer": 0
        },
        {
          "q": "What does font-size change?",
          "options": [
            "Text size",
            "Background color",
            "A link address"
          ],
          "answer": 0
        }
      ],
      "baseHtml": "<h1>Code Life</h1><p class=\"highlight\">Practice makes progress.</p><div class=\"card\"><h2>My Card</h2><p>Style me!</p></div><div class=\"row\"><button>One</button><button>Two</button></div>"
    },
    {
      "id": "css-04",
      "track": "css",
      "title": "Spacing basics",
      "time": 6,
      "concept": "padding adds room inside a box. margin adds room outside it.",
      "steps": [
        "Padding = space inside the border.",
        "Margin = space outside the border.",
        "Use both to stop layouts feeling cramped."
      ],
      "example": ".card {\n  padding: 20px;\n  margin: 10px;\n}",
      "task": "Give .card padding 20px and margin 10px.",
      "starter": ".card {\n  background: white;\n  border: 1px solid #ccd7f2;\n}\n",
      "hints": [
        "Add padding inside .card.",
        "Add margin too.",
        "Use padding: 20px; and margin: 10px;"
      ],
      "rules": [
        {
          "value": "\\.card\\s*\\{[^}]*padding\\s*:\\s*20px\\s*;?",
          "message": "Add 20px padding."
        },
        {
          "value": "\\.card\\s*\\{[^}]*margin\\s*:\\s*10px\\s*;?",
          "message": "Add 10px margin."
        }
      ],
      "quiz": [
        {
          "q": "Which property creates space inside a box?",
          "options": [
            "padding",
            "margin",
            "display"
          ],
          "answer": 0
        },
        {
          "q": "Which property creates space outside a box?",
          "options": [
            "margin",
            "padding",
            "color"
          ],
          "answer": 0
        }
      ],
      "baseHtml": "<h1>Code Life</h1><p class=\"highlight\">Practice makes progress.</p><div class=\"card\"><h2>My Card</h2><p>Style me!</p></div><div class=\"row\"><button>One</button><button>Two</button></div>"
    },
    {
      "id": "css-05",
      "track": "css",
      "title": "Borders & corners",
      "time": 5,
      "concept": "Borders outline elements. border-radius rounds their corners.",
      "steps": [
        "border can add an outline.",
        "border-radius changes the corner shape.",
        "Bigger radius = rounder corners."
      ],
      "example": ".card {\n  border: 2px solid navy;\n  border-radius: 12px;\n}",
      "task": "Give .card a border-radius of 12px.",
      "starter": ".card {\n  border: 2px solid navy;\n  padding: 16px;\n}\n",
      "hints": [
        "Stay inside .card.",
        "Use border-radius.",
        "Try: border-radius: 12px;"
      ],
      "rules": [
        {
          "value": "\\.card\\s*\\{[^}]*border-radius\\s*:\\s*12px\\s*;?",
          "message": "Add border-radius: 12px."
        }
      ],
      "quiz": [
        {
          "q": "What rounds corners?",
          "options": [
            "border-radius",
            "font-size",
            "gap"
          ],
          "answer": 0
        },
        {
          "q": "What does border do?",
          "options": [
            "Outlines an element",
            "Runs JavaScript",
            "Creates a link"
          ],
          "answer": 0
        }
      ],
      "baseHtml": "<h1>Code Life</h1><p class=\"highlight\">Practice makes progress.</p><div class=\"card\"><h2>My Card</h2><p>Style me!</p></div><div class=\"row\"><button>One</button><button>Two</button></div>"
    },
    {
      "id": "css-06",
      "track": "css",
      "title": "Classes & selectors",
      "time": 6,
      "concept": "Classes let one style apply to many HTML elements. A dot selects a class in CSS.",
      "steps": [
        "HTML can have class=\"highlight\".",
        "CSS selects it with .highlight.",
        "One class can style many elements."
      ],
      "example": ".highlight {\n  color: royalblue;\n}",
      "task": "Make .highlight text royalblue.",
      "starter": "/* Style class=\"highlight\" */\n",
      "hints": [
        "Start the selector with a dot.",
        "Type .highlight.",
        "Set color: royalblue;"
      ],
      "rules": [
        {
          "value": "\\.highlight\\s*\\{[^}]*color\\s*:\\s*royalblue\\s*;?",
          "message": "Set .highlight color to royalblue."
        }
      ],
      "quiz": [
        {
          "q": "How do you select class=\"highlight\"?",
          "options": [
            ".highlight",
            "#highlight",
            "highlight()"
          ],
          "answer": 0
        },
        {
          "q": "Why use a class?",
          "options": [
            "Reuse a style",
            "Store a password",
            "Open a database"
          ],
          "answer": 0
        }
      ],
      "baseHtml": "<h1>Code Life</h1><p class=\"highlight\">Practice makes progress.</p><div class=\"card\"><h2>My Card</h2><p>Style me!</p></div><div class=\"row\"><button>One</button><button>Two</button></div>"
    },
    {
      "id": "css-07",
      "track": "css",
      "title": "Flexbox",
      "time": 7,
      "concept": "Flexbox arranges items in flexible rows or columns.",
      "steps": [
        "display: flex turns a container into flex layout.",
        "Items line up in a row by default.",
        "gap adds space between the items."
      ],
      "example": ".row {\n  display: flex;\n  gap: 12px;\n}",
      "task": "Make .row a flex container with a 12px gap.",
      "starter": ".row {\n}\n",
      "hints": [
        "Add display: flex.",
        "Then add gap.",
        "Use gap: 12px;"
      ],
      "rules": [
        {
          "value": "\\.row\\s*\\{[^}]*display\\s*:\\s*flex\\s*;?",
          "message": "Add display: flex."
        },
        {
          "value": "\\.row\\s*\\{[^}]*gap\\s*:\\s*12px\\s*;?",
          "message": "Add gap: 12px."
        }
      ],
      "quiz": [
        {
          "q": "Which declaration activates Flexbox?",
          "options": [
            "display: flex;",
            "layout: flex;",
            "flex: yes;"
          ],
          "answer": 0
        },
        {
          "q": "What does gap control?",
          "options": [
            "Space between flex items",
            "Text color",
            "A URL"
          ],
          "answer": 0
        }
      ],
      "baseHtml": "<h1>Code Life</h1><p class=\"highlight\">Practice makes progress.</p><div class=\"card\"><h2>My Card</h2><p>Style me!</p></div><div class=\"row\"><button>One</button><button>Two</button></div>"
    },
    {
      "id": "css-08",
      "track": "css",
      "title": "Responsive design",
      "time": 8,
      "concept": "Media queries apply styles only when a condition, such as screen width, is true.",
      "steps": [
        "A media query checks the screen size.",
        "The styles inside only apply when the condition matches.",
        "This helps one site work on phones and desktops."
      ],
      "example": "@media (max-width: 600px) {\n  h1 { font-size: 24px; }\n}",
      "task": "At 600px or smaller, make h1 24px.",
      "starter": "h1 { font-size: 36px; }\n\n/* Phone styles below */\n",
      "hints": [
        "Start with @media (max-width: 600px).",
        "Put an h1 rule inside.",
        "Set font-size: 24px;"
      ],
      "rules": [
        {
          "value": "@media\\s*\\(\\s*max-width\\s*:\\s*600px\\s*\\)[\\s\\S]*h1\\s*\\{[^}]*font-size\\s*:\\s*24px\\s*;?",
          "message": "Add the 600px media query and h1 font size."
        }
      ],
      "quiz": [
        {
          "q": "What are media queries useful for?",
          "options": [
            "Responsive layouts",
            "Creating HTML headings",
            "Saving passwords"
          ],
          "answer": 0
        },
        {
          "q": "max-width: 600px targets what?",
          "options": [
            "Screens 600px or narrower",
            "Only screens over 600px",
            "Only printers"
          ],
          "answer": 0
        }
      ],
      "baseHtml": "<h1>Code Life</h1><p class=\"highlight\">Practice makes progress.</p><div class=\"card\"><h2>My Card</h2><p>Style me!</p></div><div class=\"row\"><button>One</button><button>Two</button></div>"
    },
    {
      "id": "js-01",
      "track": "js",
      "title": "console.log()",
      "time": 4,
      "concept": "JavaScript adds behavior. console.log() prints information so you can inspect what your code is doing.",
      "steps": [
        "console means the browser’s developer console.",
        "log means show me this value.",
        "The text in quotes is the message you want to print."
      ],
      "example": "console.log(\"Hello, Bri!\");",
      "task": "Log the exact words Hello, world! to the console.",
      "starter": "// Your first JavaScript line\n",
      "hints": [
        "Start with console.log.",
        "Put the message inside parentheses.",
        "Try: console.log(\"Hello, world!\");"
      ],
      "rules": [
        {
          "value": "console\\.log\\s*\\(\\s*[\\\"']Hello, world![\\\"']\\s*\\)",
          "message": "Use console.log(\"Hello, world!\")."
        }
      ],
      "quiz": [
        {
          "q": "What does console.log() do?",
          "options": [
            "Prints information to the console",
            "Creates a button",
            "Changes a color"
          ],
          "answer": 0
        },
        {
          "q": "Where does the message go?",
          "options": [
            "The console",
            "An HTML heading",
            "A database"
          ],
          "answer": 0
        }
      ],
      "baseHtml": "<h1 id=\"title\">Code Life</h1><button>Tap me</button><p id=\"message\">Waiting...</p>"
    },
    {
      "id": "js-02",
      "track": "js",
      "title": "Variables with let",
      "time": 5,
      "concept": "Variables store information. let creates a variable whose value can change later.",
      "steps": [
        "let tells JavaScript to make a variable.",
        "color is the name of the variable.",
        "\"blue\" is the value stored inside it."
      ],
      "example": "let color = \"blue\";\nconsole.log(color);",
      "task": "Create let color = \"blue\"; and log color.",
      "starter": "// Save your favorite color\n",
      "hints": [
        "Write let color = \"blue\";",
        "Then use console.log.",
        "Log the variable name, not the word in quotes."
      ],
      "rules": [
        {
          "value": "let\\s+color\\s*=\\s*[\\\"']blue[\\\"']\\s*;?",
          "message": "Create let color = \"blue\"."
        },
        {
          "value": "console\\.log\\s*\\(\\s*color\\s*\\)",
          "message": "Log the color variable."
        }
      ],
      "quiz": [
        {
          "q": "What does let do?",
          "options": [
            "Creates a variable",
            "Creates an HTML tag",
            "Adds CSS"
          ],
          "answer": 0
        },
        {
          "q": "In let color = \"blue\", what is color?",
          "options": [
            "The variable name",
            "The value",
            "A CSS class"
          ],
          "answer": 0
        }
      ],
      "baseHtml": "<h1 id=\"title\">Code Life</h1><button>Tap me</button><p id=\"message\">Waiting...</p>"
    },
    {
      "id": "js-03",
      "track": "js",
      "title": "const & values",
      "time": 5,
      "concept": "const creates a variable binding you do not plan to reassign.",
      "steps": [
        "const also creates a named value.",
        "Use it when the variable should not be reassigned.",
        "Numbers do not need quotation marks."
      ],
      "example": "const price = 15000;\nconsole.log(price);",
      "task": "Create const price = 15000; and log price.",
      "starter": "// Create a price\n",
      "hints": [
        "Start with const price.",
        "Set it equal to 15000.",
        "Then console.log(price)."
      ],
      "rules": [
        {
          "value": "const\\s+price\\s*=\\s*15000\\s*;?",
          "message": "Create const price = 15000."
        },
        {
          "value": "console\\.log\\s*\\(\\s*price\\s*\\)",
          "message": "Log price."
        }
      ],
      "quiz": [
        {
          "q": "Which keyword is good for a value you won't reassign?",
          "options": [
            "const",
            "let only",
            "href"
          ],
          "answer": 0
        },
        {
          "q": "Do numbers need quote marks?",
          "options": [
            "No",
            "Always",
            "Only in CSS"
          ],
          "answer": 0
        }
      ],
      "baseHtml": "<h1 id=\"title\">Code Life</h1><button>Tap me</button><p id=\"message\">Waiting...</p>"
    },
    {
      "id": "js-04",
      "track": "js",
      "title": "Math in JavaScript",
      "time": 5,
      "concept": "JavaScript can calculate with numbers using operators such as +, -, * and /.",
      "steps": [
        "Numbers can be added directly.",
        "The result can be stored in a variable.",
        "You can log that variable to see the result."
      ],
      "example": "let total = 8 + 4;\nconsole.log(total);",
      "task": "Create let total = 10 + 5; and log total.",
      "starter": "// Do the math\n",
      "hints": [
        "Create a variable named total.",
        "Set it to 10 + 5.",
        "Then log total."
      ],
      "rules": [
        {
          "value": "let\\s+total\\s*=\\s*10\\s*\\+\\s*5\\s*;?",
          "message": "Set total to 10 + 5."
        },
        {
          "value": "console\\.log\\s*\\(\\s*total\\s*\\)",
          "message": "Log total."
        }
      ],
      "quiz": [
        {
          "q": "What is 10 + 5?",
          "options": [
            "15",
            "105",
            "5"
          ],
          "answer": 0
        },
        {
          "q": "Which operator multiplies numbers?",
          "options": [
            "*",
            "x",
            "% only"
          ],
          "answer": 0
        }
      ],
      "baseHtml": "<h1 id=\"title\">Code Life</h1><button>Tap me</button><p id=\"message\">Waiting...</p>"
    },
    {
      "id": "js-05",
      "track": "js",
      "title": "If statements",
      "time": 7,
      "concept": "An if statement runs code only when its condition is true.",
      "steps": [
        "The condition goes inside parentheses.",
        "JavaScript checks whether it is true.",
        "If true, the code inside the braces runs."
      ],
      "example": "let age = 18;\nif (age >= 18) {\n  console.log(\"Adult\");\n}",
      "task": "With score = 10, log \"Win\" inside if (score >= 10).",
      "starter": "let score = 10;\n",
      "hints": [
        "Start with if (score >= 10).",
        "Open curly braces.",
        "Put console.log(\"Win\") inside."
      ],
      "rules": [
        {
          "value": "if\\s*\\(\\s*score\\s*>=\\s*10\\s*\\)\\s*\\{[\\s\\S]*console\\.log\\s*\\(\\s*[\\\"']Win[\\\"']\\s*\\)",
          "message": "Log Win inside if (score >= 10)."
        }
      ],
      "quiz": [
        {
          "q": "When does an if block run?",
          "options": [
            "When its condition is true",
            "Every second",
            "Only with CSS"
          ],
          "answer": 0
        },
        {
          "q": "What does >= mean?",
          "options": [
            "Greater than or equal to",
            "Exactly equal to",
            "Add these numbers"
          ],
          "answer": 0
        }
      ],
      "baseHtml": "<h1 id=\"title\">Code Life</h1><button>Tap me</button><p id=\"message\">Waiting...</p>"
    },
    {
      "id": "js-06",
      "track": "js",
      "title": "Functions",
      "time": 7,
      "concept": "Functions group reusable instructions. Define one once and call it whenever you need it.",
      "steps": [
        "function creates a reusable block.",
        "hello is the function name.",
        "hello() calls and runs it."
      ],
      "example": "function greet() {\n  console.log(\"Hi!\");\n}\ngreet();",
      "task": "Create a function named hello that logs \"Hey\", then call hello().",
      "starter": "// Make a reusable function\n",
      "hints": [
        "Write function hello() { ... }.",
        "Put console.log(\"Hey\") inside.",
        "After the closing brace, call hello();"
      ],
      "rules": [
        {
          "value": "function\\s+hello\\s*\\(\\s*\\)\\s*\\{[\\s\\S]*console\\.log\\s*\\(\\s*[\\\"']Hey[\\\"']\\s*\\)",
          "message": "Create hello() and log Hey inside it."
        },
        {
          "value": "\\}\\s*hello\\s*\\(\\s*\\)\\s*;?",
          "message": "Call hello() after the function."
        }
      ],
      "quiz": [
        {
          "q": "How do you run a function named hello?",
          "options": [
            "hello()",
            "<hello>",
            "function only"
          ],
          "answer": 0
        },
        {
          "q": "Why use functions?",
          "options": [
            "Reuse instructions",
            "Style a page",
            "Create image files"
          ],
          "answer": 0
        }
      ],
      "baseHtml": "<h1 id=\"title\">Code Life</h1><button>Tap me</button><p id=\"message\">Waiting...</p>"
    },
    {
      "id": "js-07",
      "track": "js",
      "title": "Arrays",
      "time": 6,
      "concept": "Arrays store ordered lists of values. Their positions start at index 0.",
      "steps": [
        "Square brackets hold the list.",
        "Items are separated by commas.",
        "Index 0 means the first item."
      ],
      "example": "let colors = [\"blue\", \"white\"];\nconsole.log(colors[0]);",
      "task": "Create colors with blue and white, then log colors[0].",
      "starter": "// A list of favorite colors\n",
      "hints": [
        "Use square brackets for the array.",
        "Put \"blue\" first and \"white\" second.",
        "Then log colors[0]."
      ],
      "rules": [
        {
          "value": "let\\s+colors\\s*=\\s*\\[\\s*[\\\"']blue[\\\"']\\s*,\\s*[\\\"']white[\\\"']\\s*\\]\\s*;?",
          "message": "Create an array containing blue and white."
        },
        {
          "value": "console\\.log\\s*\\(\\s*colors\\s*\\[\\s*0\\s*\\]\\s*\\)",
          "message": "Log colors[0]."
        }
      ],
      "quiz": [
        {
          "q": "What index selects the first array item?",
          "options": [
            "0",
            "1",
            "first"
          ],
          "answer": 0
        },
        {
          "q": "Which brackets create an array?",
          "options": [
            "[ ]",
            "{ } only",
            "< >"
          ],
          "answer": 0
        }
      ],
      "baseHtml": "<h1 id=\"title\">Code Life</h1><button>Tap me</button><p id=\"message\">Waiting...</p>"
    },
    {
      "id": "js-08",
      "track": "js",
      "title": "DOM & click events",
      "time": 8,
      "concept": "The DOM lets JavaScript work with HTML. Event listeners respond to actions like clicks.",
      "steps": [
        "querySelector finds an element on the page.",
        "addEventListener waits for an action.",
        "When the button is clicked, the code inside runs."
      ],
      "example": "document.querySelector(\"button\").addEventListener(\"click\", () => {\n  document.querySelector(\"#message\").textContent = \"Clicked!\";\n});",
      "task": "Make the button change #message to Clicked! when tapped.",
      "starter": "// The preview already has a button and #message\n",
      "hints": [
        "Find the button with document.querySelector(\"button\").",
        "Add a click event listener.",
        "Inside it set document.querySelector(\"#message\").textContent = \"Clicked!\";"
      ],
      "rules": [
        {
          "value": "document\\.querySelector\\s*\\(\\s*[\\\"']button[\\\"']\\s*\\)\\.addEventListener\\s*\\(\\s*[\\\"']click[\\\"']",
          "message": "Attach a click listener to the button."
        },
        {
          "value": "querySelector\\s*\\(\\s*[\\\"']#message[\\\"']\\s*\\)[\\s\\S]*textContent\\s*=\\s*[\\\"']Clicked![\\\"']",
          "message": "Change #message text to Clicked!."
        }
      ],
      "quiz": [
        {
          "q": "Which method can react to a click?",
          "options": [
            "addEventListener",
            "font-size",
            "href"
          ],
          "answer": 0
        },
        {
          "q": "What does querySelector do?",
          "options": [
            "Finds an element",
            "Changes a database",
            "Creates CSS automatically"
          ],
          "answer": 0
        }
      ],
      "baseHtml": "<h1 id=\"title\">Code Life</h1><button>Tap me</button><p id=\"message\">Waiting...</p>"
    }
  ],
  "bosses": {
    "html": {
      "title": "HTML Town Boss Build",
      "task": "Build a mini profile page with a main heading, paragraph, link and button.",
      "starter": "<h1>My Profile</h1>\n<!-- Add a paragraph, link and button -->\n",
      "mode": "html",
      "rules": [
        {
          "value": "<h1\\b",
          "message": "Add an h1."
        },
        {
          "value": "<p\\b",
          "message": "Add a paragraph."
        },
        {
          "value": "<a\\b",
          "message": "Add a link."
        },
        {
          "value": "<button\\b",
          "message": "Add a button."
        }
      ]
    },
    "css": {
      "title": "CSS District Boss Build",
      "task": "Style the card with padding, rounded corners and a blue background.",
      "starter": ".card {\n  /* style the card */\n}\n",
      "mode": "css",
      "baseHtml": "<h1>Code Life</h1><p class=\"highlight\">Practice makes progress.</p><div class=\"card\"><h2>My Card</h2><p>Style me!</p></div><div class=\"row\"><button>One</button><button>Two</button></div>",
      "rules": [
        {
          "value": "\\.card\\s*\\{[^}]*padding\\s*:",
          "message": "Add padding."
        },
        {
          "value": "\\.card\\s*\\{[^}]*border-radius\\s*:",
          "message": "Round the corners."
        },
        {
          "value": "\\.card\\s*\\{[^}]*background(?:-color)?\\s*:\\s*(?:blue|royalblue|#\\w+)",
          "message": "Give the card a blue-ish background."
        }
      ]
    },
    "js": {
      "title": "JavaScript City Boss Build",
      "task": "Make the button change the message when it is clicked.",
      "starter": "// Make the button interactive\n",
      "mode": "js",
      "baseHtml": "<h1 id=\"title\">Code Life</h1><button>Tap me</button><p id=\"message\">Waiting...</p>",
      "rules": [
        {
          "value": "querySelector\\s*\\(\\s*[\\\"']button[\\\"']\\s*\\)",
          "message": "Select the button."
        },
        {
          "value": "addEventListener\\s*\\(\\s*[\\\"']click[\\\"']",
          "message": "Listen for a click."
        },
        {
          "value": "#message",
          "message": "Update the message element."
        }
      ]
    }
  },
  "pets": [
    {
      "id": "pixel-pup",
      "name": "Pixel Pup",
      "vibe": "Loyal coding sidekick",
      "img": "assets/pets/pixel-pup.png"
    },
    {
      "id": "byte-cat",
      "name": "Byte Cat",
      "vibe": "Confident, curious, always building",
      "img": "assets/pets/byte-cat.png"
    },
    {
      "id": "nova-owl",
      "name": "Nova Owl",
      "vibe": "Wise guide for brighter ideas",
      "img": "assets/pets/nova-owl.png"
    },
    {
      "id": "loop-fox",
      "name": "Loop Fox",
      "vibe": "Clever, creative, keeps going",
      "img": "assets/pets/loop-fox.png"
    },
    {
      "id": "chip-bunny",
      "name": "Chip Bunny",
      "vibe": "Fast learner, big-project energy",
      "img": "assets/pets/chip-bunny.png"
    },
    {
      "id": "glitch-dino",
      "name": "Glitch Dino",
      "vibe": "A little chaos that levels you up",
      "img": "assets/pets/glitch-dino.png"
    }
  ],
  "arcade": [
    {
      "type": "Tag Match",
      "prompt": "Which HTML tag creates the main heading?",
      "code": "A webpage needs its biggest heading.",
      "options": [
        "<h1>",
        "<p>",
        "<img>"
      ],
      "answer": 0,
      "explain": "<h1> is the main heading."
    },
    {
      "type": "Tag Match",
      "prompt": "Which HTML tag creates a paragraph?",
      "code": "Normal blocks of text use this tag.",
      "options": [
        "<p>",
        "<a>",
        "<ul>"
      ],
      "answer": 0,
      "explain": "<p> means paragraph."
    },
    {
      "type": "Bug Hunt",
      "prompt": "Which line correctly makes a button?",
      "code": "Fix the broken button.",
      "options": [
        "<button>Tap me</button>",
        "<button>Tap me",
        "button = Tap me"
      ],
      "answer": 0,
      "explain": "HTML buttons need opening and closing tags."
    },
    {
      "type": "Style Sprint",
      "prompt": "Which CSS changes text to blue?",
      "code": "h1 { ??? }",
      "options": [
        "color: blue;",
        "text: blue;",
        "font: color blue;"
      ],
      "answer": 0,
      "explain": "The color property changes text color."
    },
    {
      "type": "Style Sprint",
      "prompt": "Which CSS adds space inside a card?",
      "code": ".card { ??? }",
      "options": [
        "padding: 20px;",
        "margin: 20px;",
        "href: 20px;"
      ],
      "answer": 0,
      "explain": "Padding is inside space."
    },
    {
      "type": "Guess Output",
      "prompt": "What gets printed?",
      "code": "let total = 2 + 3;\nconsole.log(total);",
      "options": [
        "5",
        "23",
        "total"
      ],
      "answer": 0,
      "explain": "2 + 3 equals 5."
    },
    {
      "type": "Bug Hunt",
      "prompt": "Which JavaScript creates a variable?",
      "code": "Save the word blue.",
      "options": [
        "let color = \"blue\";",
        "color: blue;",
        "<color>blue</color>"
      ],
      "answer": 0,
      "explain": "let creates a JavaScript variable."
    },
    {
      "type": "Guess Output",
      "prompt": "What gets printed?",
      "code": "let colors = [\"blue\", \"white\"];\nconsole.log(colors[0]);",
      "options": [
        "blue",
        "white",
        "0"
      ],
      "answer": 0,
      "explain": "Array index 0 is the first item."
    }
  ]
};
