# Overview

Enjoy a fresh, well-structured start to any Meteor project. 

# The Package Approach

Meteor Fresh features a packaged approach to app development with Meteor. Every aspect, idea, or feature is defined in a package. Taken from the Meteor documentation:

> [The package approach] is the ultimate in code separation, modularity, and reusability. If you put the code for each feature in a separate package, the code for one feature won't be able to access the code for the other feature except through exports, making every dependency explicit. This also allows for the easiest independent testing of features.

You can find more information on this approach [at Mathieu Bouchard's blog post](http://www.matb33.me/2013/09/05/meteor-project-structure.html). Manuel Schoebel also posted a [blog post](http://www.manuel-schoebel.com/blog/meteorjs-package-only-app-structure-with-mediator-pattern) with an interesting mediator approach that I may implement in the future. Note that these posts are a tad old, but the idea remains the same. (Deps, for example, has been renamed to Tracker)

## Default packages

### app:layout

This package deals with the overall look of the site. It includes its own copy of bootstrap overidden by the theme import in `theme.bootstrap.less`. Have a look at the example theme in `themes/darkly.less` to see how you can use themes to override bootstrap variables. 

This package also contains site-wide templates including `layout, navigation, etc`. Basically things that are considered general, app-wide templates. Remember that, with packages, exports must be explicit, so if you add a new view you must add it to the package.js file in the layouts package so it can be seen by the rest of the app. 

### app:routes

This package configures the routes of the application. It uses the [iron:router](https://github.com/iron-meteor/iron-router) package. Meteor Fresh comes with only the homepage route configured, which is setup to render the homepage view in the layouts package. 

## Adding Packages

The `meteor` command line tool makes creating new packages easy. Just run `meteor create --package <package-name>` to get started adding a new package. 

## Testing

Are you testing? *Audience nods their heads*

Meteor Fresh comes with [sanjo:jasmine](https://github.com/Sanjo/meteor-jasmine) and the [velocity:html-reporter](https://github.com/meteor-velocity/velocity#reporters) for testing. There is a sample test for the homepage in the `tests/` folder. You'll notice a remote browser automatically open and run the homepage test. You can just keep this minimized in the background. Check out the [github page](https://github.com/Sanjo/meteor-jasmine) for more info. 

If this isn't your cup of tea you can remove testing using `meteor remove sanjo:jasmine velocity:html-reporter` and then `rm -r tests/`. 

## Contributing

I am still learning the package structure of Meteor apps myself, so if you have any improvements or ideas, please open a pull request! I'd be glad to incorporate any enhancements. Please create a new branch for your work. 
