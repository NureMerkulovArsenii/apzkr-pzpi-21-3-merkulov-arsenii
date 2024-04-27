using System.Globalization;
using Microsoft.AspNetCore.Localization;

namespace HospitalityHub.API.Extensions;

internal static class LocalizationConfigExtension
{
    internal static void ConfigureLocalization(this IServiceCollection services, IConfiguration configuration)
    {
        
        // const string defaultCulture = "uk-UA";
        //
        // var supportedCultures = new[]
        // {
        //     new CultureInfo(defaultCulture),
        //     new CultureInfo("en-US")
        // };
        //
        // services.Configure<RequestLocalizationOptions>(options =>
        // {
        //     options.DefaultRequestCulture = new RequestCulture(defaultCulture);
        //     options.SupportedCultures = supportedCultures;
        //     options.SupportedUICultures = supportedCultures;
        //
        //     options.RequestCultureProviders = new List<IRequestCultureProvider>
        //     {
        //         new AcceptLanguageHeaderRequestCultureProvider()
        //     };
        // });

    }
}