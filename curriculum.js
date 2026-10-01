/* Code Life curriculum: HTML → CSS → JavaScript */
window.CODE_LIFE_TRACKS = {
  html:{name:'HTML',sub:'Build the structure',emoji:'<>',description:'Learn the building blocks of webpages.'},
  css:{name:'CSS',sub:'Make it beautiful',emoji:'✦',description:'Style colors, spacing and layouts.'},
  js:{name:'JavaScript',sub:'Bring it to life',emoji:'⚡',description:'Add logic and interactivity.'}
};

window.CODE_LIFE_COURSE = [
  {
    id:'html-01',track:'html',title:'Meet HTML',time:4,
    concept:'HTML gives a webpage its structure. Most visible content sits inside tags.',
    example:'<h1>Hello, Bri!</h1>',
    explain:'<h1> opens a main heading and </h1> closes it.',
    task:'Create an h1 heading that says Code Life.',
    starter:'<!-- Write your heading below -->\n',
    hint:'Try <h1>Code Life</h1>.',
    checks:[{pattern:/<h1\b[^>]*>\s*Code Life\s*<\/h1>/i,message:'Add an h1 that says Code Life.'}],
    quiz:{q:'What does HTML mainly do?',options:['Styles colors','Structures a webpage','Stores passwords'],answer:1,why:'HTML provides the structure.'}
  },
  {
    id:'html-02',track:'html',title:'Paragraphs & text',time:4,
    concept:'Paragraphs hold normal blocks of text.',
    example:'<h1>Améa</h1>\n<p>Made with love.</p>',
    explain:'The <p> tag creates a paragraph.',
    task:'Create a paragraph that says I can code.',
    starter:'<h1>My first page</h1>\n',
    hint:'Use <p>I can code</p>.',
    checks:[{pattern:/<p\b[^>]*>\s*I can code\.?\s*<\/p>/i,message:'Add a paragraph that says I can code.'}],
    quiz:{q:'Which tag creates a paragraph?',options:['<h1>','<p>','<img>'],answer:1,why:'<p> means paragraph.'}
  },
  {
    id:'html-03',track:'html',title:'Buttons',time:5,
    concept:'A button is something a visitor can press. HTML creates it; JavaScript can later make it do something.',
    example:'<button>Shop now</button>',
    explain:'The words between the button tags become its label.',
    task:'Create a button labeled Click me.',
    starter:'<h1>My app</h1>\n',
    hint:'Use <button>Click me</button>.',
    checks:[{pattern:/<button\b[^>]*>\s*Click me\s*<\/button>/i,message:'Create a button labeled Click me.'}],
    quiz:{q:'What usually gives a button custom behavior?',options:['JavaScript','A paragraph','The browser color'],answer:0,why:'JavaScript commonly handles button clicks.'}
  },
  {
    id:'html-04',track:'html',title:'Links',time:5,
    concept:'Links connect one page or website to another.',
    example:'<a href="https://example.com">Visit site</a>',
    explain:'The href attribute stores the destination.',
    task:'Create a link to https://example.com with the text Visit site.',
    starter:'<h1>My links</h1>\n',
    hint:'Use <a href="https://example.com">Visit site</a>.',
    checks:[{pattern:/<a\b[^>]*href\s*=\s*["']https:\/\/example\.com["'][^>]*>\s*Visit site\s*<\/a>/i,message:'Add the example.com link labeled Visit site.'}],
    quiz:{q:'Which attribute sets a link destination?',options:['src','href','class'],answer:1,why:'href stores a link URL.'}
  },
  {
    id:'html-05',track:'html',title:'Images',time:5,
    concept:'Images use src for the file location and alt for a useful text description.',
    example:'<img src="flower.jpg" alt="A pink flower">',
    explain:'The img tag does not need a closing tag.',
    task:'Add an image with src="flower.jpg" and alt="Flower".',
    starter:'<h1>Photo gallery</h1>\n',
    hint:'Use <img src="flower.jpg" alt="Flower">.',
    checks:[
      {pattern:/<img\b[^>]*src\s*=\s*["']flower\.jpg["'][^>]*>/i,message:'Add src="flower.jpg".'},
      {pattern:/<img\b[^>]*alt\s*=\s*["']Flower["'][^>]*>/i,message:'Add alt="Flower".'}
    ],
    quiz:{q:'Why is alt text useful?',options:['Accessibility','It makes images larger','It adds JavaScript'],answer:0,why:'Alt text describes an image when it cannot be seen.'}
  },
  {
    id:'html-06',track:'html',title:'Lists',time:5,
    concept:'Lists organize related items. <ul> makes a bullet list and <li> makes each item.',
    example:'<ul>\n  <li>Dresses</li>\n  <li>Sets</li>\n</ul>',
    explain:'List items live inside the list container.',
    task:'Create a ul containing an li that says Dresses.',
    starter:'<h1>Products</h1>\n',
    hint:'Put <li>Dresses</li> inside <ul> and </ul>.',
    checks:[{pattern:/<ul\b[^>]*>[\s\S]*<li\b[^>]*>\s*Dresses\s*<\/li>[\s\S]*<\/ul>/i,message:'Create a ul containing a Dresses item.'}],
    quiz:{q:'Which tag makes one list item?',options:['<li>','<ul>','<list>'],answer:0,why:'<li> means list item.'}
  },
  {
    id:'html-07',track:'html',title:'Page sections',time:6,
    concept:'Semantic tags describe what different parts of a page are for.',
    example:'<header><h1>Améa</h1></header>\n<main><p>Welcome!</p></main>',
    explain:'<main> holds the page’s main content.',
    task:'Create a main section containing a paragraph that says Welcome.',
    starter:'<header><h1>My site</h1></header>\n',
    hint:'Try <main><p>Welcome</p></main>.',
    checks:[{pattern:/<main\b[^>]*>[\s\S]*<p\b[^>]*>\s*Welcome\.?\s*<\/p>[\s\S]*<\/main>/i,message:'Put a Welcome paragraph inside <main>.'}],
    quiz:{q:'What belongs in <main>?',options:['The primary page content','Only CSS','Only the logo'],answer:0,why:'<main> identifies the central page content.'}
  },
  {
    id:'html-08',track:'html',title:'Forms & labels',time:7,
    concept:'Forms collect information. Labels explain what an input is for.',
    example:'<label for="email">Email</label>\n<input id="email" type="email">',
    explain:'A label’s for value should match its input’s id.',
    task:'Create an input with id="name" and a label with for="name".',
    starter:'<h1>Join the club</h1>\n',
    hint:'Use <label for="name">Name</label> and <input id="name">.',
    checks:[
      {pattern:/<label\b[^>]*for\s*=\s*["']name["'][^>]*>/i,message:'Add a label with for="name".'},
      {pattern:/<input\b[^>]*id\s*=\s*["']name["'][^>]*>/i,message:'Add an input with id="name".'}
    ],
    quiz:{q:'How do you connect a label to an input?',options:['Match for and id','Give them the same color','Use console.log'],answer:0,why:'Matching for and id associates them.'}
  },

  {
    id:'css-01',track:'css',title:'Meet CSS',time:4,
    concept:'CSS changes how HTML looks. A rule selects something and gives it styles.',
    example:'h1 {\n  color: blue;\n}',
    explain:'h1 is the selector, color is the property, and blue is the value.',
    task:'Make h1 text blue.',
    starter:'/* Make the heading blue */\n',
    hint:'Write h1 { color: blue; }.',
    checks:[{pattern:/h1\s*\{[^}]*color\s*:\s*blue\s*;?/i,message:'Set h1 color to blue.'}],
    quiz:{q:'What is CSS mainly for?',options:['Page appearance','Saving passwords','Sending email'],answer:0,why:'CSS controls presentation.'}
  },
  {
    id:'css-02',track:'css',title:'Background colors',time:4,
    concept:'background-color fills the background of an element.',
    example:'body {\n  background-color: lightblue;\n}',
    explain:'Styling body changes the page background.',
    task:'Make the body background lightblue.',
    starter:'h1 { color: navy; }\n',
    hint:'Use body { background-color: lightblue; }.',
    checks:[{pattern:/body\s*\{[^}]*background-color\s*:\s*lightblue\s*;?/i,message:'Set the body background-color to lightblue.'}],
    quiz:{q:'Which property fills a background?',options:['font-size','background-color','margin'],answer:1,why:'background-color fills an element’s background.'}
  },
  {
    id:'css-03',track:'css',title:'Fonts & size',time:5,
    concept:'font-size controls how large text appears.',
    example:'h1 {\n  font-size: 32px;\n}',
    explain:'px is one common CSS size unit.',
    task:'Set h1 font-size to 32px.',
    starter:'h1 {\n  color: navy;\n}\n',
    hint:'Add font-size: 32px; inside the h1 rule.',
    checks:[{pattern:/h1\s*\{[^}]*font-size\s*:\s*32px\s*;?/i,message:'Set h1 font-size to 32px.'}],
    quiz:{q:'Which value uses pixels?',options:['blue','32px','bold'],answer:1,why:'px is a CSS length unit.'}
  },
  {
    id:'css-04',track:'css',title:'Spacing basics',time:6,
    concept:'padding adds room inside a box. margin adds room outside it.',
    example:'.card {\n  padding: 20px;\n  margin: 10px;\n}',
    explain:'Think: padding = inside space; margin = outside space.',
    task:'Give .card padding 20px and margin 10px.',
    starter:'.card {\n  background: white;\n}\n',
    hint:'Add padding: 20px; and margin: 10px;.',
    checks:[
      {pattern:/\.card\s*\{[^}]*padding\s*:\s*20px\s*;?/i,message:'Add 20px padding.'},
      {pattern:/\.card\s*\{[^}]*margin\s*:\s*10px\s*;?/i,message:'Add 10px margin.'}
    ],
    quiz:{q:'Which property creates space inside a box?',options:['padding','margin','display'],answer:0,why:'Padding is inside the border.'}
  },
  {
    id:'css-05',track:'css',title:'Borders & corners',time:5,
    concept:'Borders outline elements. border-radius rounds their corners.',
    example:'.card {\n  border: 2px solid navy;\n  border-radius: 12px;\n}',
    explain:'border-radius controls corner roundness.',
    task:'Give .card a border-radius of 12px.',
    starter:'.card {\n  border: 2px solid navy;\n}\n',
    hint:'Add border-radius: 12px;.',
    checks:[{pattern:/\.card\s*\{[^}]*border-radius\s*:\s*12px\s*;?/i,message:'Add border-radius: 12px.'}],
    quiz:{q:'What rounds corners?',options:['border-radius','font-size','gap'],answer:0,why:'border-radius rounds element corners.'}
  },
  {
    id:'css-06',track:'css',title:'Classes & selectors',time:6,
    concept:'Classes let you apply one style to many HTML elements. A dot selects a class in CSS.',
    example:'.highlight {\n  color: royalblue;\n}',
    explain:'This styles elements with class="highlight".',
    task:'Make .highlight text royalblue.',
    starter:'/* Style class="highlight" */\n',
    hint:'Use .highlight { color: royalblue; }.',
    checks:[{pattern:/\.highlight\s*\{[^}]*color\s*:\s*royalblue\s*;?/i,message:'Set .highlight color to royalblue.'}],
    quiz:{q:'How do you select class="highlight"?',options:['#highlight','.highlight','highlight()'],answer:1,why:'A dot starts a class selector.'}
  },
  {
    id:'css-07',track:'css',title:'Flexbox',time:7,
    concept:'Flexbox arranges items in flexible rows or columns.',
    example:'.row {\n  display: flex;\n  gap: 12px;\n}',
    explain:'display: flex activates Flexbox. gap adds space between items.',
    task:'Make .row a flex container with a 12px gap.',
    starter:'.row {\n}\n',
    hint:'Add display: flex; and gap: 12px;.',
    checks:[
      {pattern:/\.row\s*\{[^}]*display\s*:\s*flex\s*;?/i,message:'Add display: flex.'},
      {pattern:/\.row\s*\{[^}]*gap\s*:\s*12px\s*;?/i,message:'Add gap: 12px.'}
    ],
    quiz:{q:'Which declaration activates Flexbox?',options:['display: flex;','layout: flex;','flex: yes;'],answer:0,why:'display: flex creates a flex container.'}
  },
  {
    id:'css-08',track:'css',title:'Responsive design',time:8,
    concept:'Media queries apply styles only when conditions such as screen width are true.',
    example:'@media (max-width: 600px) {\n  h1 { font-size: 24px; }\n}',
    explain:'This changes h1 only on screens 600px wide or narrower.',
    task:'Create a max-width: 600px media query that makes h1 24px.',
    starter:'/* Phone styles */\n',
    hint:'Use @media (max-width: 600px) { h1 { font-size: 24px; } }.',
    checks:[{pattern:/@media\s*\(\s*max-width\s*:\s*600px\s*\)[\s\S]*h1\s*\{[^}]*font-size\s*:\s*24px\s*;?/i,message:'Add the 600px media query and h1 font size.'}],
    quiz:{q:'What are media queries useful for?',options:['Responsive layouts','HTML headings','Passwords'],answer:0,why:'They adapt styles to conditions like screen size.'}
  },

  {
    id:'js-01',track:'js',title:'console.log()',time:4,
    concept:'JavaScript adds behavior. console.log() prints information to the console so you can inspect it.',
    example:'console.log("Hello, Bri!");',
    explain:'The text inside the quotes is what gets printed.',
    task:'Log the exact words Hello, world! to the console.',
    starter:'// Your first JavaScript line\n',
    hint:'Try console.log("Hello, world!");',
    checks:[{pattern:/console\.log\s*\(\s*["']Hello, world!["']\s*\)/i,message:'Use console.log("Hello, world!").'}],
    quiz:{q:'What does console.log() do?',options:['Prints information to the console','Creates a button','Changes a color'],answer:0,why:'It displays values in the developer console.'}
  },
  {
    id:'js-02',track:'js',title:'Variables with let',time:5,
    concept:'Variables store information. let creates a variable whose value can change later.',
    example:'let brand = "Améa";\nconsole.log(brand);',
    explain:'brand is the variable name. "Améa" is the stored value.',
    task:'Create let color = "blue"; and log color.',
    starter:'// Save your favorite color\n',
    hint:'Write let color = "blue"; then console.log(color);.',
    checks:[
      {pattern:/let\s+color\s*=\s*["']blue["']\s*;?/i,message:'Create let color = "blue".'},
      {pattern:/console\.log\s*\(\s*color\s*\)/i,message:'Log the color variable.'}
    ],
    quiz:{q:'What does let do?',options:['Creates a variable','Creates an HTML tag','Adds CSS'],answer:0,why:'let declares a variable.'}
  },
  {
    id:'js-03',track:'js',title:'const & values',time:5,
    concept:'const creates a variable binding that you do not reassign.',
    example:'const price = 15000;\nconsole.log(price);',
    explain:'Numbers do not need quotation marks.',
    task:'Create const price = 15000; and log price.',
    starter:'// Create a price\n',
    hint:'Use const price = 15000; then console.log(price);.',
    checks:[
      {pattern:/const\s+price\s*=\s*15000\s*;?/i,message:'Create const price = 15000.'},
      {pattern:/console\.log\s*\(\s*price\s*\)/i,message:'Log price.'}
    ],
    quiz:{q:'Which variable declaration is not reassigned?',options:['let','const','console.log'],answer:1,why:'const prevents reassignment of the binding.'}
  },
  {
    id:'js-04',track:'js',title:'Math in JavaScript',time:5,
    concept:'JavaScript can calculate with numbers using operators such as +, -, * and /.',
    example:'let total = 8 + 4;\nconsole.log(total);',
    explain:'8 + 4 becomes 12, which is stored in total.',
    task:'Create let total = 10 + 5; and log total.',
    starter:'// Do the math\n',
    hint:'Use let total = 10 + 5; then console.log(total);.',
    checks:[
      {pattern:/let\s+total\s*=\s*10\s*\+\s*5\s*;?/i,message:'Set total to 10 + 5.'},
      {pattern:/console\.log\s*\(\s*total\s*\)/i,message:'Log total.'}
    ],
    quiz:{q:'What is 10 + 5?',options:['105','15','5'],answer:1,why:'With numbers, + performs addition.'}
  },
  {
    id:'js-05',track:'js',title:'If statements',time:7,
    concept:'An if statement runs code only when its condition is true.',
    example:'let age = 18;\nif (age >= 18) {\n  console.log("Adult");\n}',
    explain:'Because 18 >= 18 is true, the message runs.',
    task:'With score = 10, log "Win" inside if (score >= 10).',
    starter:'let score = 10;\n',
    hint:'Use if (score >= 10) { console.log("Win"); }.',
    checks:[{pattern:/if\s*\(\s*score\s*>=\s*10\s*\)\s*\{[\s\S]*console\.log\s*\(\s*["']Win["']\s*\)/i,message:'Log Win inside if (score >= 10).'}],
    quiz:{q:'When does an if block run?',options:['When its condition is true','Every second','Only with CSS'],answer:0,why:'if checks a condition first.'}
  },
  {
    id:'js-06',track:'js',title:'Functions',time:7,
    concept:'Functions group reusable instructions. Define one once and call it whenever you need it.',
    example:'function greet() {\n  console.log("Hi!");\n}\ngreet();',
    explain:'greet() calls the function.',
    task:'Create a function named hello that logs "Hey", then call hello().',
    starter:'// Make a reusable function\n',
    hint:'Use function hello() { console.log("Hey"); } then hello();.',
    checks:[
      {pattern:/function\s+hello\s*\(\s*\)\s*\{[\s\S]*console\.log\s*\(\s*["']Hey["']\s*\)/i,message:'Create hello() and log Hey inside it.'},
      {pattern:/\}\s*hello\s*\(\s*\)\s*;?/i,message:'Call hello() after the function.'}
    ],
    quiz:{q:'How do you run a function named hello?',options:['hello()','<hello>','function only'],answer:0,why:'Calling hello() runs the function.'}
  },
  {
    id:'js-07',track:'js',title:'Arrays',time:6,
    concept:'Arrays store ordered lists of values. Their positions start at index 0.',
    example:'let colors = ["blue", "white"];\nconsole.log(colors[0]);',
    explain:'colors[0] is the first item: blue.',
    task:'Create the colors array with blue and white, then log colors[0].',
    starter:'// A list of favorite colors\n',
    hint:'Use square brackets for the array and index 0 for its first item.',
    checks:[
      {pattern:/let\s+colors\s*=\s*\[\s*["']blue["']\s*,\s*["']white["']\s*\]\s*;?/i,message:'Create an array containing blue and white.'},
      {pattern:/console\.log\s*\(\s*colors\s*\[\s*0\s*\]\s*\)/i,message:'Log colors[0].'}
    ],
    quiz:{q:'What index selects the first array item?',options:['0','1','first'],answer:0,why:'JavaScript array indexes begin at 0.'}
  },
  {
    id:'js-08',track:'js',title:'DOM & click events',time:8,
    concept:'The DOM lets JavaScript work with HTML. Event listeners respond to actions like clicks.',
    example:'document.querySelector("button").addEventListener("click", () => {\n  console.log("Clicked!");\n});',
    explain:'querySelector finds the button and addEventListener waits for a click.',
    task:'Select the button, listen for a click, and log "Clicked!".',
    starter:'// The preview already contains a button\n',
    hint:'Use document.querySelector("button").addEventListener("click", ...).',
    checks:[
      {pattern:/document\.querySelector\s*\(\s*["']button["']\s*\)\.addEventListener\s*\(\s*["']click["']/i,message:'Attach a click listener to the button.'},
      {pattern:/console\.log\s*\(\s*["']Clicked!["']\s*\)/i,message:'Log Clicked! inside the handler.'}
    ],
    quiz:{q:'Which method can react to a click?',options:['addEventListener','font-size','href'],answer:0,why:'addEventListener reacts to browser events.'}
  }
];

window.CODE_LIFE_PROJECTS = [
  {title:'Personal introduction',track:'html',summary:'Build a page about yourself.',requirements:['An h1','A paragraph','A link','An image with alt text']},
  {title:'Améa product card',track:'css',summary:'Turn a simple product card into a polished design.',requirements:['A class selector','Padding','Rounded corners','A responsive touch']},
  {title:'Interactive shop button',track:'js',summary:'Make a button react to a click.',requirements:['A button','CSS styling','A click listener','A visible or console response']}
];