# Random Number over 7-segment panel

This script allows generate a 7-segment panel and execute it
for finding random number between 0 and the specified value.

## To use

- Import `segment.js` and `segment.css` in scripts and style folders, respectively.
After that, you should put in a HMTL file the following code:
 ```html
    <head>
        <!-- Import segment style -->
        <link href="./css/segment.css" rel="stylesheet">
    </head>
    <body>
        <div class="segment-panel" data-max-random="1234"></div>
        
        <!-- Import segment script -->
        <script src="./js/segments.js"></script>
        [...]
    </body>
 ```
 - For executing this script you can use jquery or simply javascript function, as it follows:
 ```javascript
    document.addEventListener('DOMContentLoaded', function() {
        startRandSegment();
    });
    
    // OR
    
    $( document ).ready( function() {
      startRandSegment();
    });
    
    // OR WHATEVER YOU WANT
    
    function execute(){
        startRandSegment();
    }
 ```
 
 ## Notes
 
 The example above always generate numbers between _0_ and _1234_.
 If you want to generate numbers between _0_ and a dynamic value, you should change dynamically
 the __data-max-random__ attribute.
 For more information see the example folder and `toolbox.js` script.
 
 ## Style
 
 If you like change style, edit the `basic-style.css`
 located in the example folder or simply override the following classes and these properties:
 ```css
    .lower-custom .digit .segment{
        background: <COLOR>;
    }
    
    .lower-custom .digit .segment.off {
        box-shadow: <SHADOW>;
    }
    
    .lower-custom .digit .segment.on {
        box-shadow: <SHADOW>;
    }
    
    .higher-custom .zoom > .segment{
        box-shadow: <SHADOW>;
        background: <COLOR>;
    }
```