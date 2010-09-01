/*
 * span2div.js
 * @author samuel.walz@gmail.com
 * @lastmodified 01. September 2010
 *
 * Description:
 * Replaces all span-elements within a html document by div-elements
 * Usage:
 * Include this script at the end of your html document
 */
 
/* all attributes to be copied from each span-element to the 
    replacing div-element (to be improved as soon, as there is a method to get
    all attributes of a span-element as a list)*/
var attributes_to_copy = 
   new Array(
      "class", "dir", "id", "lang", "style", "title", "xml:lang", // Standard Attributes
      "onclick", "ondblclick", "onmousedown", "onmousemove", "onmouseout", 
      "onmouseover", "onmouseup", "onkeydown", "onkeypress", "onkeyup" // Event Attributes
      );
/* how many span- elements are there? */
var times = document.getElementsByTagName("span").length;
/* let's go and replace all of them! */
for (x = 0; x < times; x++)
{
   /* get the first span-element
      it will allways be the first one - because the previous one 
      has already been replaced by a div-element */
   var span = document.getElementsByTagName("span")[0];
   // get span's parent
   var parent = span.parentNode;
   // create new div
   var div = document.createElement("div");
   // copy all child nodes from span to div
   var childNodes = span.childNodes;
   for (y in childNodes)
   {
      if (childNodes[y].nodeType<=12 && childNodes[y].nodeType>=1)
         div.appendChild(childNodes[y].cloneNode(true));
   }
   // copy span's attributes to our fresh div-ling
   for (y in attributes_to_copy)
   {
      if (span.getAttribute(attributes_to_copy[y]))
         div.setAttribute(attributes_to_copy[y], span.getAttribute(attributes_to_copy[y]));
    }
   // make the new div a sibbling to our span
   parent.replaceChild(div, span);
   
   
}