using HospitalityHub.Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace HospitalityHub.DAL;

public class ApplicationDbContext : IdentityDbContext<User, Role, int>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public override DbSet<User> Users { get; set; }
    public override DbSet<Role> Roles { get; set; }
    public DbSet<Hotel> Hotel { get; set; }
    public DbSet<Room> Room { get; set; }

    public DbSet<Booking> Booking { get; set; }
    public DbSet<RoomPlace> RoomPlace { get; set; }

    public DbSet<Photo> Photo { get; set; }

    public DbSet<TodoTask> TodoTasks { get; set; }
    
    public DbSet<Customer> Customer { get; set; }
    
    public DbSet<Staff> Staff { get; set; }
    
    public DbSet<MenuItem> MenuItems { get; set; }

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
        // builder.Entity<User>()
        //     .HasOne(u => u.Customer)
        //     .WithOne(c => c.User)
        //     .HasForeignKey<Customer>(c => c.UserId);
        
        builder.Entity<User>()
            .HasOne(u => u.Staff)
            .WithOne(s => s.User)
            .HasForeignKey<Staff>(s => s.UserId);
        
        builder.Entity<User>()
            .HasMany(u => u.Roles)
            .WithMany(r => r.Users)
            .UsingEntity<IdentityUserRole<int>>(
                j => j.HasOne<Role>().WithMany().HasForeignKey(r => r.RoleId),
                j => j.HasOne<User>().WithMany().HasForeignKey(u => u.UserId)
            );
        
        
        base.OnModelCreating(builder);
    }
}