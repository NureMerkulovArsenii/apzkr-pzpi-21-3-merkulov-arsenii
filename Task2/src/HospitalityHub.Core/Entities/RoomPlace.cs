using System.ComponentModel;
using HospitalityHub.Core.Enums;

namespace HospitalityHub.Core.Entities;

public class RoomPlace : BaseEntity
{
    public ERoomPlaceType Type { get; set; }
    
    public int RoomId { get; set; }
    
    public virtual Room Room { get; set; }
}