This Project is just a workaround for frameworks which are using span-elements instead of div-elements (which can be a problem for YAML-based layouts).
The problem is surely very special and - I think - only needed very seldom.
Anyway. Here it is. Simple, small, replacing all span-elements by div-elements within the page it is called.

### Usage ###
Just include the script _span2div.js_ at the end of your html-document like this:
```
<html>
   <head>(...)</head>
   <body>
      (...)
      <script src="span2div.js" type="text/javascript"></script>
   </body>
</html>
```

### My Motivation ###
Creating a YAML based layout for an application using the ICEfaces framework which favours to use span-elements instead of div-elements. Since I have no control over the ICEfaces code, I wrote this workaround to get my beloved div-elements.