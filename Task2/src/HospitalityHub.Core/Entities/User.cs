﻿using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace HospitalityHub.Core.Entities;

public class User : IdentityUser<int>, IBaseEntity
{
    [MaxLength(50)]
    public string FirstName { get; set; }
    
    [MaxLength(50)]
    public string LastName { get; set; }

    public bool IsEnabled { get; set; }

    public virtual ICollection<Booking> Bookings { get; set; }
}
