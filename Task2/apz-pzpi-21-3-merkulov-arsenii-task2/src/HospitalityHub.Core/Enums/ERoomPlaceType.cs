using System.ComponentModel;

namespace HospitalityHub.Core.Enums;

public enum ERoomPlaceType : byte
{
    [Description("Single Bed")] SingleBed = 1,
    [Description("Double Bed")] DoubleBed = 2,
    [Description("Sofa")] Sofa = 3,
}