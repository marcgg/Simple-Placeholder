Simple Placeholder
===

Use this if you want to get the `placeholder` attribute to work cross browser and don't want to load
a larger plugin. If you want to get more HTML5 goodness cross browser, I suggest you take a look
at [Modernizr](http://modernizr.com/) or the other great solutions out there.

How to Use
---

Write your HTML as you would normaly:
    
```html
<input type="text" placeholder="Something to be held in place" />
```

Then you simply have to target each types of inputs/textarea you will use:

```javascript
$('textarea[placeholder]').simplePlaceholder();
$('input:text[placeholder]').simplePlaceholder(); // classic input[type=text]
$('input:email[placeholder]').simplePlaceholder(); // email fields input[type=email]
[...] // target other input types you need
```

If you want to customize the appearance of the text used as placeholder, 
there is a class added to the field that you can use. It defaults to `placeholding` but you can override it:

```javascript
$('textarea[placeholder]').simplePlaceholder({ placeholderClass: "MyCustomClass" });
```

Contribute / Contact
---

Feel free to send pull requests, this plugin is still used in production in a lot of my projects.

You can contact me on github or on twitter via [@marcgg](http://twitter.com/marcgg).

License
---

This project is under MIT License, copyright (c) 2010-2016 Marc G Gauthier

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
