namespace WebApiSkiResorts.Dtos
{
    record ResortListDto(int Id, string Slug, string Name, string Country, string? Region, int Elevation, string HeroImageUrl, int TicketPrice, int Lifts, int Runs, string[] ReasonsToVisit);
}
