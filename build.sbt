import sbt._
import sbt.Keys._
import play.Project._
import java.io.File


name := "play-skeleton"

version := "1.0-SNAPSHOT"

scalaVersion := "2.10.3"

libraryDependencies ++= Seq(
      cache
    , "commons-io" % "commons-io" % "2.4"
    , "com.github.nscala-time" %% "nscala-time" % "0.6.0"
    , "org.scalatest" % "scalatest_2.10" % "2.0" % "test"
)     

playScalaSettings    
    
lessEntryPoints <<= baseDirectory { base =>
   (base / "app" / "assets" / "stylesheets" / "bootstrap" * "bootstrap.less") +++
   (base / "app" / "assets" / "stylesheets" / "bootstrap" * "responsive.less") +++
   (base / "app" / "assets" / "stylesheets" * "*.less")
}

testOptions in Test := Nil // Disables built-in specs2, it conflicts with ScalaTest
