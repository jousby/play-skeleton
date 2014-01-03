Play Framework 2.2.1 Skeleton
=============================

Possibly useful play 2.2.1 starter project. 

My use case is to provide a means of bootstrapping internal (company intranet) web projects that need 
an authentication and authorisation mechanism. Its based on twitter bootstrap + angular + secure social. 


###### Why not make this a typesafe activator template?

It would be neat if I could make this a template in typesafe activator but I couldn't get activator to 
run behind a corporate proxy (I tried the obvious solutions found from searching google based on 
-Dhttp.proxy=blah etc but no luck, any further tips are welcome). However there is something to be said for a 
barebones project that doesn't have all those activator files in the root directory when introducing
Play to developers who haven't seen it before.  



#### Features

* Twitter Bootstrap 3.0.3

* Angular (TODO)

* SecureSocial installed for authentication because we might want to leverage an internal OAuth provider to facilitate
single sign on to all internal web apps one day. In the meantime Secure Social can be setup to use a custom 
auth mechanism (internal ldap, custom db, flat file). 



#### Detail

1. **Twitter Bootstrap v3.0.3** source installed so you can tweak as required:
  * Bootstrap less files installed in `app/assets/stylesheets/bootstrap`
  * `build.sbt` modified to compile the parent bootstrap less files
  * Glyphicon files installed in `public/fonts`
  * Glyphicon file location references in `variables.less` changed to point at the font files in `public/fonts`
  
2. Angular Templates

  * Client side check of "is user authenticated" pushes user to login template if not authenticated. As per 
  [this blog referenced from the angular dev guide]
  (http://blog.brunoscopelliti.com/deal-with-users-authentication-in-an-angularjs-web-app).
  
  * Location Provider HTML5 mode enabled so urls don't have hashes in them. There is catch all route in the 
  Play framework routes file that attempts to catch users entering your angular app via a bookmarked url. It
  then redirects them to the index page and gives angular a chance to process that url client side. 

  * Base template is the the Twitter Bootstrap [fixed navbar + sticky footer example]
  (http://getbootstrap.com/examples/sticky-footer-navbar/) 

  * Login template changed to be a slight variation of the bootstrap [login example]
  (http://getbootstrap.com/examples/signin/)
  
  * Post login template is just an empowering message espousing the virtues of heavy squats. 
  
3. All 3rd party javascript files are in `public/javascripts`, both uncompressed and 
minified versions. There is a function in `index.scala.html` that switches between uncompressed and 
minified based on whether play is running in dev or prod mode. (No bower, easy enough for people to add
if they know how to use it, just trying to keep this is as barebones as possible)

4. Build version information pulled in and displayed in the footer


 
#### How to Use



#### How to Upgrade Stuff


