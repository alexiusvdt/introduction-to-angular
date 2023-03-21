# Introduction to Angular Codelab

\In this codelab, you'll build a housing app with Angular. The completed app will feature the ability to view home listings based on user search, and view details of a housing location.

You'll build everything with Angular using Angular's powerful tooling and great browser integration.

Here's a preview of the finished application:

![Completed application - one column search results, second column search details](9yB5AM9sBgVwfTR.png)

The step-by-step guide can be found at [https://codelabs.developers.google.com/introduction-to-angular](https://codelabs.developers.google.com/introduction-to-angular)


## Notes
cmds: 
`ng serve` runs dev server
`ng new` angular cli starter
`ng generate component component-name` via cli will initialize component
`ng generate interface interface-name` interfaces shape the data in TypeScript (type casting template)

Components: bricks used for construction. Each has an html file for the template, a css for style and typescript for the behavior.

Syntax: surround the type of the event in parens & assign a name to the function that will be called on click:
<button (click)="doAThing()">

template variable: adding to form field via # gives it a variable template which can be then assigned & passed into a function (see search in housing-list & relevant ts file)

shaping objects: like in c# (or whatever this truly came from) you can set params for how each object will look. In this program, housing-location.ts is an interface that defines what an object will look like. We then import that into app.ts and prepopulate with some data.