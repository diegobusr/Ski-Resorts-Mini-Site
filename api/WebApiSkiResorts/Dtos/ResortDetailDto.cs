namespace WebApiSkiResorts.Dtos
{
    record ResortDetailDto(
     int Id,
     string Slug,
     string Name,
     string Country,
     string? Region,
     int Elevation,
     int Runs,
     int Lifts,
     string ShortDescription,
     string HeroImageUrl,
     int TicketPrice,
     IReadOnlyList<double> MonthlySnowfall, 
     IReadOnlyList<string> ReasonsToVisit
 );
}
