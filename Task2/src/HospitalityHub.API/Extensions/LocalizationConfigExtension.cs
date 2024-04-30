using System.Globalization;
using Microsoft.AspNetCore.Localization;

namespace HospitalityHub.API.Extensions;

internal static class LocalizationConfigExtension
{
    private const string DEFAULT_CULTURE = "uk-UA";
    
    internal static void ConfigureLocalization(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddLocalization(x => x.ResourcesPath = "Resources");
        
        var supportedCultures = new[]
        {
            new CultureInfo(DEFAULT_CULTURE),
            new CultureInfo("en-US")
        };
        
        services.Configure<RequestLocalizationOptions>(options =>
        {
            options.DefaultRequestCulture = new RequestCulture(DEFAULT_CULTURE, DEFAULT_CULTURE);
            options.SupportedCultures = supportedCultures;
            options.SupportedUICultures = supportedCultures;
        
            options.RequestCultureProviders = new List<IRequestCultureProvider>
            {
                new AcceptLanguageHeaderRequestCultureProvider()
            };
        });

    }
}