package integration

import play.api.test._
import play.api.test.Helpers._

class Landing extends org.scalatest.FunSuite {
  test("Landing page") {
    running(TestServer(3333), HTMLUNIT) { browser =>
      browser.goTo("http://localhost:3333/")
      assert(browser.pageSource.contains("Your new application is ready."))
    }
  }
}