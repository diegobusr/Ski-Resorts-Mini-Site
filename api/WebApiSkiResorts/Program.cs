using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using System;
using System.Collections.Generic;
using System.Text.Json;
using WebApiSkiResorts.Data;
using WebApiSkiResorts.Dtos;
using WebApiSkiResorts.Models;

var builder = WebApplication.CreateBuilder(args);

// add after creating the builder
builder.WebHost.UseUrls("http://localhost:5000", "https://localhost:7264");

// enable CORS for Next dev server
builder.Services.AddCors(o =>
{
    o.AddPolicy("AllowLocalhost", p =>
        p.WithOrigins("http://localhost:3000") // Next dev origin
         .AllowAnyHeader()
         .AllowAnyMethod());
});

// Use SQLite file in app folder
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=resorts.db"));

var app = builder.Build();

app.UseCors("AllowLocalhost");

// Ensure DB and seed
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.EnsureCreated();

    if (!db.Resorts.Any())
    {
        // Fix: pass the IEnumerable<Resort> directly (no cast)
        db.Resorts.AddRange(SeedData.CreateResorts());
        db.SaveChanges();
    }
}

// Endpoints
app.MapGet(pattern: "api/resorts", handler: async (AppDbContext db) =>
{
    var list = await db.Resorts
        .OrderBy(r => r.Id)
        .Select(r => new ResortListDto(r.Id, r.Slug, r.Name, r.Country, r.Region, r.Elevation, r.HeroImageUrl, r.TicketPrice, r.Lifts, r.Runs, r.ReasonsToVisit))
        .ToListAsync();

    return Results.Ok(list);
});

app.MapGet("api/resorts/{slug}", async (string slug, AppDbContext db) =>
{
    var r = await db.Resorts.FirstOrDefaultAsync(x => x.Slug == slug);
    if (r is null) return Results.NotFound(new { message = "Resort not found." });

    var detail = new ResortDetailDto(
        r.Id, r.Slug, r.Name, r.Country, r.Region, r.Elevation, r.Runs, r.Lifts,
        r.ShortDescription, r.HeroImageUrl, r.TicketPrice, r.MonthlySnowfall, r.ReasonsToVisit
    );

    return Results.Ok(detail);
});

MetricsDto ComputeMetrics(IEnumerable<Resort> data)
{
    var list = data.ToList();
    var total = list.Count;

    var avgElevation = total == 0 ? 0.0 : Math.Round(list.Average(r => r.Elevation), 1);

    var monthlyAvg = list
        .Select(r => Math.Round((r.MonthlySnowfall?.Sum() ?? 0.0), 1))
        .ToArray();

    var avgTicketPrice = total == 0 ? 0.0 : Math.Round(list.Average(r => (double)r.TicketPrice), 2);

    return new MetricsDto(
        AverageElevation: avgElevation,
        AverageMonthlySnowfall: monthlyAvg,
        AverageTicketPrice: avgTicketPrice
    );
}

app.MapGet("api/metrics", async (AppDbContext db) => Results.Ok(ComputeMetrics(await db.Resorts.AsNoTracking().ToListAsync())));

app.Run();




