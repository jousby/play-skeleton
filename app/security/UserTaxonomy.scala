package security


case class User(id: String, password: String, roles: Role*)

abstract class Role

case object Normal extends Role
case object Admin extends Role