using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TsPractice.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Classes()
        {
            return View();
        }

        public ActionResult Await()
        {
            return View();
        }

        [HttpPost]
        public JsonResult GetValueJson(int id)
        {
            if (id > 10) throw new InvalidOperationException();

            int v = (id * 10 + 1);

            return Json(v);
        }

    }
}
