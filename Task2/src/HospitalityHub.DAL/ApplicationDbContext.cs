using HospitalityHub.Core.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace HospitalityHub.DAL;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : IdentityDbContext(options)
{
    public DbSet<User> User { get; set; }
    
    public DbSet<Booking> Booking { get; set; }
    
    public DbSet<Customer> Customer { get; set; }
    
    public DbSet<Room> Room { get; set; }
    
    public DbSet<RoomPlace> RoomPlace { get; set; }
    
    public DbSet<CustomerBooking> CustomerBooking { get; set; }

    public DbSet<Hotel> Hotel { get; set; }
    
}
