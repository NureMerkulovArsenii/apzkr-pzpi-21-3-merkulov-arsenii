using System.Diagnostics;
using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.Exceptions;
using Microsoft.Extensions.Configuration;

namespace HospitalityHub.BLL.Handlers.DataAdministration;

public class CreateDbBackupHandler : BaseHandler
{
    private readonly IConfiguration _configuration;

    public CreateDbBackupHandler(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public async Task HandleAsync()
    {
        var connectionString = _configuration.GetConnectionString("DefaultConnection");

        var databaseName = connectionString.Split(";").First(x => x.Contains("Database")).Split("=").Last();
        var userId = connectionString.Split(";").First(x => x.Contains("User ID")).Split("=").Last();
        var password = connectionString.Split(";").First(x => x.Contains("Password")).Split("=").Last();
        var host = connectionString.Split(";").First(x => x.Contains("Host")).Split("=").Last();
        var port = connectionString.Split(";").First(x => x.Contains("Port")).Split("=").Last();

        var backupPath = _configuration["DataAdministration:BackupPath"];
        var backupFileName = $"{databaseName}_{DateTime.Now:yyyy-MM-dd_HH-mm-ss}.sql";
        var backupFilePath = Path.Combine(backupPath, backupFileName);
        
        var containerName = _configuration["ConnectionStrings:ContainerName"];

        using (var process = new Process())
        {
            process.StartInfo.FileName = "cmd.exe";
            process.StartInfo.Arguments = $"/C docker exec -i {containerName} pg_dump --dbname={databaseName} --username={userId} --host={host} --port={port} --format=plain --no-password --format=custom > {backupFilePath}";
            process.StartInfo.Environment["PGPASSWORD"] = password;
            process.StartInfo.UseShellExecute = false;
            process.StartInfo.RedirectStandardError = true;

            process.Start();
            await process.WaitForExitAsync();

            if (process.ExitCode != 0)
            {
                throw new HospitalityHubException($"pg_dump failed: {await process.StandardError.ReadToEndAsync()}");
            }
        }
    }
}