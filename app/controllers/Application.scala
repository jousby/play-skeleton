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
  
  
  def login = Action {
    Ok(views.html.index())
  }
}