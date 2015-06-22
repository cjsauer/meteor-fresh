# Overview

Enjoy a fresh, well-structured start to any Meteor project. 

# The Package Approach

Meteor Fresh features a packaged approach to app development with Meteor. Every aspect, idea, or feature is defined in a package. Taken from the Meteor documentation:

> [The package approach] is the ultimate in code separation, modularity, and reusability. If you put the code for each feature in a separate package, the code for one feature won't be able to access the code for the other feature except through exports, making every dependency explicit. This also allows for the easiest independent testing of features.

You can find more information on this approach [at Mathieu Bouchard's blog post](http://www.matb33.me/2013/09/05/meteor-project-structure.html). Manuel Schoebel also posted a [blog post](http://www.manuel-schoebel.com/blog/meteorjs-package-only-app-structure-with-mediator-pattern) with an interesting mediator approach that I may implement in the future. Note that these posts are a tad old, but the idea remains the same. (Deps, for example, has been renamed to Tracker)

## Default packages

### app:layout

This package deals with the overall look of the site and contains site-wide templates including `layout, navigation, sidebar, etc`. Basically things that are considered general, app-wide templates. Remember that, with packages, exports must be explicit, so if you add a new view (say, navigation.html) you must add it to the package.js file in the layouts package so it can be seen by the rest of the app.

Packages that use this layout should `api.use('app:layout')` in their `package.js` file (the `app:homepage` package does this). In this way, you could potentially have more than one layout per app. For example, an `app:adminLayout` package could include completely unique styling and template files, and then packages specific to admin purposes would `api.use('app:adminLayout')` in their `package.js` file instead of the default layout.

This package uses the `app:bootstrap` package.

### app:homepage

Contains the html, less, and js files to serve up the homepage of the app. This package uses the `app:layout` package. 

### app:bootstrap

A copy of the bootstrap CSS framework. We include our own copy of the bootstrap source code so that it can be easily customized and extended. To extend/customize bootstrap, take a look first at the `theme.bootstrap.less` file. This file loads a file called `themes/darkly.less`, which was taken straight from [bootswatch.com](http://bootswatch.com)\*. Less files like `darkly.less` override bootstrap less varialbes to give bootstrap a different look. Have a look at the [available bootstrap variables](http://getbootstrap.com/customize/#less-variables) for an idea of what is possible. 

\* Do not override the `@icon-font-path` or any other iconography variables. Those are already setup to point to the glyphicon fonts for you.  

## Routes

Routes are kind of a tricky subject. Where do we define them? In Meteor Fresh, we have opted into defining routes on a *per package basis*. What that means is your package defines its own routes. For example, by default, the `app:homepage` package described above configures the router with the '/' route. Furthermore, the `app:layout` package configures the router to use its 'layout.html' template. Be advised that we are using the `iron:router` package for routing and I have been using the convention of putting route code into `lib/routes.js` files within packages. 

So what's tricky about that? Well, by spreading the route configuration code over many packages, it makes switching routers a potentially costly endeavor. If, for example, you wanted to use the FlowRouter, you'd have to track down all route configuration files and modify them. However, this switching of router implementation should be rare, and I assume that the user has done research on which router they would like to use before launching into a project. In this way, Meteor Fresh
should be very easy to switch over to a different router package from the start. 

## Adding Packages

The `meteor` command line tool makes creating new packages easy. Just run `meteor create --package <package-name>` to get started adding a new package, and then configure its `package.js` file. More info about this file can be found (in the Meteor docs)[http://docs.meteor.com/#/full/packagejs]. An understanding of this file is *crucial* to a successful package-based project. I recommend a thorough readthrough of the entire (writing packages
section)[http://docs.meteor.com/#/full/writingpackages].

## Contributing

I am still learning the package structure of Meteor apps myself, so if you have any improvements or ideas, please open a pull request! I'd be glad to incorporate any enhancements. Please create a new branch for your work. 
