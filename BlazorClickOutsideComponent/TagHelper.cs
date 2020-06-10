using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace Al.BlazorMultiDropDownList
{
    public static class TagHelper
    {
        public static HtmlString AddClickOutsideScripts(this IHtmlHelper html, string[] items)
        {
            string result = "<script src='_content/BlazorClickOutside/functions.js'></script>";
            result += items == null ? null : string.Join("", items);
            return new HtmlString(result);
        }
    }
}
