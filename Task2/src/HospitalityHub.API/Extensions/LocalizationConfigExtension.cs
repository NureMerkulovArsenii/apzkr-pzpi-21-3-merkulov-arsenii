using System.Globalization;
using Microsoft.AspNetCore.Localization;

namespace HospitalityHub.API.Extensions;

internal static class LocalizationConfigExtension
{
    internal static void ConfigureLocalization(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddLocalization(x => x.ResourcesPath = "Resources");
        
        var supportedCultures = new[]
        {
            new CultureInfo("en-US"),
            new CultureInfo("uk-UA")
        };
        
        services.Configure<RequestLocalizationOptions>(options =>
        {
            options.DefaultRequestCulture = new RequestCulture("en-US", "en-US");
            options.SupportedCultures = supportedCultures;
            options.SupportedUICultures = supportedCultures;
        
            options.RequestCultureProviders = new List<IRequestCultureProvider>
            {
                new AcceptLanguageHeaderRequestCultureProvider()
            };
        });

    }
}