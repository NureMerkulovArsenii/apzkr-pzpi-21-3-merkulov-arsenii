using System.Net;
using System.Net.Mail;
using HospitalityHub.Core.AppSettings;
using HospitalityHub.Core.Entities;
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
            Subject = "HospitalityHub | Confirm your email",
            Body = $"Please confirm your account by clicking this link: <a href='{confirmationLink}'>link</a>",
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
            Subject = "HospitalityHub | Reset your password",
            Body = $"Please reset your password by clicking this link: <a href='{resetLink}'>link</a>",
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
            Subject = "HospitalityHub | Reset your password",
            Body = $"Your reset code is: {resetCode}",
            IsBodyHtml = true
        };
        
        mailMessage.To.Add(email);
        
        return smtpClient.SendMailAsync(mailMessage);
        
    }
}