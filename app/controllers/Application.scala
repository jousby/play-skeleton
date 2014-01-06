package controllers

import play.api._
import play.api.mvc._

object Application extends Controller {

  def index = Action {
    Ok(views.html.index())
  }
  
  def angularRedirect(angularRoute: String) = Action {
    Ok(views.html.index())
  }
  
  /**
   * Returns the JavaScript router that the client can use for "type-safe" routes.
   * @param varName The name of the global variable, defaults to `jsRoutes`
   */
  def jsRoutes(varName: String = "jsRoutes") = Action { implicit request =>
    Ok(
      Routes.javascriptRouter(varName)(
        routes.javascript.Application.login
      )
    ).as(JAVASCRIPT)
  }
  
  def login = Action {
    Ok(views.html.index())
  }
}