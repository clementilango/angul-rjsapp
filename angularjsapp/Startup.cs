using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(angularjsapp.Startup))]
namespace angularjsapp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
