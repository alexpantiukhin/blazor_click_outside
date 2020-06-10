using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using Al.BlazorComponentsTagHelper;

namespace BlazorClickOutsideComponent
{
    public static class TagHelper
    {
        const string ComponentString = "<script src='_content/BlazorClickOutsideComponent/functions.js'></script>";
        public static HtmlString AddClickOutsideScripts(this IHtmlHelper html, params string[] items)
        {
            return CommonTagHelper.AddCommonComponentString(ComponentString);
        }

        public static HtmlString AddClickOutsideScripts(this HtmlString htmlString)
        {
            return htmlString.AddCommonComponentString(ComponentString);
        }
    }
}
