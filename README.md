Play Framework 2.2.1 Skeleton
=============================

Possibly useful play 2.2.1 starter project. 

My use case is to provide a means of bootstrapping internal (company intranet) web projects that need 
a hook into ldap based authentication and role based authorisation by default. Its based on twitter 
bootstrap + angular. I've avoided using webjars and requirejs to lower the required learning curve. It
needs to be accessible to developers who are new to pretty all the technologies involved 
(Play, HTML 5, Angular).

It sounds pretty vanilla but most starter projects I found were either doing to much or to little for 
my particualar scenario. 

The approach to security and tokens is the one recommended by James Ward  and Marius Soutier (see 
reference section below). 


#### Features

* Twitter Bootstrap 3.0.3

* AngularJS 1.2.6

* Security (TODO)

* Build version information built into page footer (TODO)


#### Detail

1. **Twitter Bootstrap v3.0.3** source installed so you can tweak as required:
  * Bootstrap less files installed in `app/assets/stylesheets/bootstrap`
  * `build.sbt` modified to compile the parent bootstrap less files
  * Glyphicon files installed in `public/fonts`
  * Glyphicon file location references in `variables.less` changed to point at the font files in `public/fonts`
  
2. Angular Templates

  * Client side check of "is user authenticated" pushes user to login template if not authenticated. 
  
  * Location Provider HTML5 mode enabled so urls don't have hashes in them. There is a catch all route in the 
  Play framework routes file that attempts to catch users entering your angular app via a bookmarked url. It
  then redirects them to the index page and gives angular a chance to process that url client side. 

  * Base template is the the Twitter Bootstrap [fixed navbar + sticky footer example]
  (http://getbootstrap.com/examples/sticky-footer-navbar/) 

  * Login template changed to be a slight variation of the bootstrap [login example]
  (http://getbootstrap.com/examples/signin/)
  
  * Post login template is just an empowering message espousing the virtues of heavy squats. 
  
3. All 3rd party javascript files are in `public/javascripts`, both uncompressed and 
minified versions. There is a function in `index.scala.html` that switches between uncompressed and 
minified based on whether play is running in dev or prod mode. 

4. Build version information pulled in and displayed in the footer



#### References

Some great resources on securing single page apps that i've borrrowed elements from:

  * [Authentication in Single Page Applications with Angular.js - 21 Jan 2013 - Fredrik Nakstad](http://frederiknakstad.com/authentication-in-single-page-applications-with-angular-js/)
  * [Securing Single Page Apps and REST Services - May 13 2013 - James Ward](http://www.jamesward.com/2013/05/13/securing-single-page-apps-and-rest-services)
  * [Deal with User Authentication in an AngularJS Webapp - 21 May 2013 - Bruno Scopelliti](http://blog.brunoscopelliti.com/deal-with-users-authentication-in-an-angularjs-web-app)
  * [Securing AngularJS Applications with Play - July 14 2013 - Marius Soutier](http://www.mariussoutier.com/blog/2013/07/14/272/)

 
#### How to Use



#### How to Upgrade Stuff


