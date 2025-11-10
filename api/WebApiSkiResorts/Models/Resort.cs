using System.Text.Json.Serialization;

namespace WebApiSkiResorts.Models;

public class Resort
{
    public int Id { get; set; }
    public string Slug { get; set; } = null!;
    public string Name { get; set; } = null!;
    public string Country { get; set; } = null!;
    public string Region { get; set; } = null!;
    public string ShortDescription { get; set; } = null!;
    public string HeroImageUrl { get; set; } = null!;

    public int Elevation { get; set; }
    public int Runs { get; set; }
    public int Lifts { get; set; }

    public int TicketPrice { get; set; }

    // stored as JSON in SQLite via ValueConverter; exposed as array
    [JsonIgnore]
    public double[] MonthlySnowfall { get; set; } = Array.Empty<double>();

    public string[] ReasonsToVisit { get; set; } = Array.Empty<string>();
}