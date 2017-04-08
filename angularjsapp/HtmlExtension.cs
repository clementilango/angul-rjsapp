using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace angularjsapp
{
    public static class HtmlExtension
    {
        public static MvcHtmlString WebPage(this HtmlHelper htmlHelper, string url)
        {
            return MvcHtmlString.Create(new WebClient().DownloadString(url));
        }
    }
}