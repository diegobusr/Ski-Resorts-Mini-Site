namespace WebApiSkiResorts.Dtos
{
    public record MetricsDto(
        double AverageElevation,
        IReadOnlyList<double> AverageMonthlySnowfall,
        double AverageTicketPrice
    );
}