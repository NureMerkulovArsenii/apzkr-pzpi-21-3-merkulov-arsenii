using HospitalityHub.Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace HospitalityHub.DAL;

public class ApplicationDbContext : IdentityDbContext<User, IdentityRole<int>, int>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public DbSet<User> User { get; set; }

    public DbSet<Hotel> Hotel { get; set; }

    public DbSet<Room> Room { get; set; }

    public DbSet<Booking> Booking { get; set; }

    public DbSet<RoomPlace> RoomPlace { get; set; }

    public DbSet<Photo> Photo { get; set; }

    public DbSet<TodoTask> TodoTasks { get; set; }
    
    public DbSet<Customer> Customer { get; set; }

    public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess,
        CancellationToken cancellationToken = new())
    {
        var entries = ChangeTracker
            .Entries()
            .Where(e => e is { Entity: BaseEntity, State: EntityState.Added or EntityState.Modified });

        foreach (var entityEntry in entries)
        {
            ((BaseEntity)entityEntry.Entity).DateUpdated = DateTime.Now;

            if (entityEntry.State == EntityState.Added)
            {
                ((BaseEntity)entityEntry.Entity).DateCreated = DateTime.Now;
            }
        }

        return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.Entity<User>()
            .HasKey(x => x.Id);
        
        base.OnModelCreating(builder);
    }
}