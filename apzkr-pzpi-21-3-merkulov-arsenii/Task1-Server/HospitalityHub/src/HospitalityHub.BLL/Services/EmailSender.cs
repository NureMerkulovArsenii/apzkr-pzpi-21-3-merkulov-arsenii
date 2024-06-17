using System.Net;
using System.Net.Mail;
using HospitalityHub.Core.AppSettings;
using HospitalityHub.Core.Entities;
using HospitalityHub.Localization;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;

namespace HospitalityHub.BLL.Services;

public class EmailSender : IEmailSender<User>
{
    private readonly SmtpSettings _smtpSettings;

    public EmailSender(IConfiguration configuration)
    {
        _smtpSettings = new SmtpSettings()
        {
            Host = configuration["SmtpSettings:Host"],
            Password = configuration["SmtpSettings:Password"],
            Port = configuration.GetValue<int>("SmtpSettings:Port"),
            EnableSsl = configuration.GetValue<bool>("SmtpSettings:EnableSsl"),
            UseDefaultCredentials = configuration.GetValue<bool>("SmtpSettings:UseDefaultCredentials"),
            SenderEmail = configuration["SmtpSettings:SenderEmail"],
        };
    }
    
    public Task SendConfirmationLinkAsync(User user, string email, string confirmationLink)
    {
        var smtpClient = new SmtpClient(_smtpSettings.Host, _smtpSettings.Port)
        {
            Credentials = new NetworkCredential(_smtpSettings.SenderEmail, _smtpSettings.Password),
            EnableSsl = _smtpSettings.EnableSsl
        };
        
        var mailMessage = new MailMessage
        {
            From = new MailAddress(_smtpSettings.SenderEmail),
            Subject = "HospitalityHub | " + Resources.Get("CONFIRM_YOUR_EMAIL"),
           Body = string.Format(Resources.Get("CONFIRM_YOUR_ACCOUNT"), confirmationLink),
            IsBodyHtml = true
        };
        
        mailMessage.To.Add(email);
        
        return smtpClient.SendMailAsync(mailMessage);
    }

    public Task SendPasswordResetLinkAsync(User user, string email, string resetLink)
    {
        var smtpClient = new SmtpClient(_smtpSettings.Host, _smtpSettings.Port)
        {
            Credentials = new NetworkCredential(_smtpSettings.SenderEmail, _smtpSettings.Password),
            EnableSsl = _smtpSettings.EnableSsl
        };
        
        var mailMessage = new MailMessage
        {
            From = new MailAddress(_smtpSettings.SenderEmail),
            Subject = "HospitalityHub | " + Resources.Get("RESET_YOUR_PASSWORD"),
            Body = string.Format(Resources.Get("RESET_YOUR_PASSWORD_LINK_MESSAGE"), resetLink),
            IsBodyHtml = true
        };
        
        mailMessage.To.Add(email);
        
        return smtpClient.SendMailAsync(mailMessage);
        
    }

    public Task SendPasswordResetCodeAsync(User user, string email, string resetCode)
    {
        var smtpClient = new SmtpClient(_smtpSettings.Host, _smtpSettings.Port)
        {
            Credentials = new NetworkCredential(_smtpSettings.SenderEmail, _smtpSettings.Password),
            EnableSsl = _smtpSettings.EnableSsl
        };
        
        var mailMessage = new MailMessage
        {
            From = new MailAddress(_smtpSettings.SenderEmail),
            Subject = "HospitalityHub | " + Resources.Get("RESET_YOUR_PASSWORD"),
            Body = string.Format(Resources.Get("RESET_YOUR_PASSWORD_CODE_MESSAGE"), resetCode),
            IsBodyHtml = true
        };
        
        mailMessage.To.Add(email);
        
        return smtpClient.SendMailAsync(mailMessage);
    }
}
