using WebApiSkiResorts.Models;

namespace WebApiSkiResorts.Data;

public static class SeedData
{
    public static IEnumerable<Resort> CreateResorts()
    {
        return new[]
        {
            new Resort
            {
                Slug = "whistler-blackcomb",
                Name = "Whistler Blackcomb",
                Country = "Canada",
                Region = "British Columbia",
                ShortDescription = "Visitors can experience a delightful blend of traditional chalet-style village architecture and modern luxury accommodations. Beyond the slopes, a wealth of activities awaits, including snowshoeing, snowmobiling, and tobogganing. Culture vultures and history buffs will appreciate the quaint Belleville Valley and the live, classic music performances. Accommodation options are varied, from traditional chalet-style villages to modern luxury digs, and cater to different tastes and budgets with the promise of a comfortable stay.",
                HeroImageUrl = "https://images.prismic.io/ski-com/ZuC3eBoQrfVKl8Hj_16.webp?auto=format%2Ccompress&fit=max&w=1080",
                Elevation = 3200,
                Runs = 120,
                Lifts = 28,
                TicketPrice = 30,
                MonthlySnowfall = new double[] {20,40,60,50,30,10,5,8,25,45,55,35},
                ReasonsToVisit = ["8,171 acres of skiable terrain, making it the largest ski resort in North America.", "The PEAK 2 PEAK Gondola connects Whistler and Blackcomb mountains in just 11 minutes.", "Over 200 marked runs, 16 alpine bowls, three glaciers, high-alpine bowls, glaciated slopes, tree-lined groomers and terrain parks."]

            },
            new Resort
            {
                Slug = "49-degrees-north",
                Name = "49 Degrees North",
                Country = "United States",
                Region = "Washington",
                ShortDescription = "Families and those on a budget looking to experience a French Alps ski vacation will love Les Menuires’ convenience, family-friendliness and affordability. This ski area consists of eight villages connected by ski runs and chairlifts. Les Menuires enjoys a central location right in the middle of the 3 Vallées ski area—the largest ski area in the world. This ski area has been in operation for about forty years, so guests have a varied gamut of lodging and off-mountain activity options. Beginners can enjoy the bunny slopes with five free chairlifts, while intermediates will appreciate the blue and red runs on Mont de la Chambre. Experts and professionals can test themselves on the technical black runs in the La Masse area, while freestyle fans can head to the snow park at La Becca.",
                HeroImageUrl = "https://images.prismic.io/ski-com/ZqFaHB5LeNNTxeJY_4Whistler-4.webp?auto=format%2Ccompress&rect=0%2C0%2C720%2C499&w=1080&fit=max",
                Elevation = 1400,
                Runs = 45,
                Lifts = 10,
                TicketPrice = 54,
                MonthlySnowfall = new double[] {15,35,55,45,25,8,4,6,20,40,50,30},
                ReasonsToVisit = ["Mom and pop feel", "Fewer crowds and a more relaxed vibe", "Consistent powder"]
            },
            new Resort
            {
                Slug = "furano",
                Name = "Furano",
                Country = "Japan",
                Region = "Hokkaido",
                ShortDescription = "Located in the geographic center of Japan’s most northern islands, Hokkaido, Furano ski resort provides the perfect basecamp to experience a variety of skiing experiences, including uber deep powder that Japan is known for. The Furano ski resort features two base villages, nine lifts, 23 runs and 3,100 vertical feet of terrain. Furano isn’t overly developed, but offers the right amount of amenities and services, including two full-service hotels and English-speaking snowsports instructors. The nearby town of Furano is rather authentic, and offers more than 100 affordable restaurants. You can enjoy a feast of the senses to the tune of $7 to $20 USD..",
                HeroImageUrl = "https://images.prismic.io/ski-com/ZuxoqrVsGrYSvmXz_20230725151438301_96636.jpg?auto=format%2Ccompress&fit=max&w=3840&q=100",
                Elevation = 2572,
                Runs = 23,
                Lifts = 20,
                TicketPrice = 120,
                MonthlySnowfall = new double[] {10,30,50,40,20,5,2,3,15,35,45,25},
                ReasonsToVisit = ["Relatively uncrowded slopes", "Unique terrain and off-piste options", "Kids ski-free until age 13"]
            },
            new Resort
            {
                Slug = "andermatt-sedrun",
                Name = "Andermatt Sedrun",
                Country = "Europe",
                Region = "Switzerland",
                ShortDescription = "An Andermatt ski vacation is perfect for the adventurous skier or snowboarder on the hunt for a reasonably priced, down-to-earth Swiss experience. Plus, it meets the need for challenging slopes and great snow with its average annual snowfall of over 12 feet a year. Andermatt offers namely modest, traditional chalets for lodging options, however new, larger hotels and apartment complexes are opening regularly to meet the resort's visitation demand. Whether you're discovering the once top-secret Gotthard fortresses or enjoying the serene beauty of the side valleys, every corner of Andermatt promises an unforgettable experience.",
                HeroImageUrl = "https://images.prismic.io/ski-com/Zr-PKkaF0TcGJAed_agata-bres-mR53MiG5sGc-unsplash-1-.jpg?auto=format%2Ccompress&fit=max&w=3840&q=100",
                Elevation = 4747,
                Runs = 120,
                Lifts = 6,
                TicketPrice = 300,
                MonthlySnowfall = new double[] {40,60,70,60,40,20,10,12,30,50,65,55},
                ReasonsToVisit = ["Largest Ski Area in Central Switzerland", "The Gemsstock Summit, at 9,715 ft.", "Connection to the Glacier Express"]
            },
            new Resort
            {
                Slug = "alyeska",
                Name = "Alyeska",
                Country = "United States",
                Region = "Alaska",
                ShortDescription = "Alyeska Resort, located just 40 miles from Anchorage, is Alaska's premier year-round destination that seamlessly combines luxury and adventure. Spanning 1,610 skiable acres with 76 named trails, it transforms into a winter playground dominated by deep powder and breathtaking vistas. The resort receives an impressive average of 650 inches of snowfall each year, creating a haven for powder enthusiasts and thrill-seekers alike, eager to conquer its challenging terrain.",
                HeroImageUrl = "https://images.prismic.io/ski-com/ZszXCEaF0TcGJZ8L_shutterstock_2331840689-1-.jpg?auto=format%2Ccompress&fit=max&w=3840&q=100",
                Elevation = 2800,
                Runs = 76,
                Lifts = 18,
                TicketPrice = 250,
                MonthlySnowfall = new double[] {50,80,110,95,60,25,10,15,40,70,100,85},
                ReasonsToVisit = ["Backcountry access", "Northern lights viewing", "Longest continuous black diamond in North America"]

            },
            new Resort
            {
                Slug = "mount-bachelor",
                Name = "Mount Bachelor",
                Country = "United States",
                Region = "Oregon",
                ShortDescription = "Since Mt. Bachelor sits in the gorgeous Deschutes National Forest of the Cascade Range and is just 20 miles from the lively, little city of Bend, you’re guaranteed a laundry list of outdoor activities, art galleries, beer tours, shopping, dining and other off-mountain things to do in Mt. Bachelor..",
                HeroImageUrl = "https://images.prismic.io/ski-com/ZqvoMh5LeNNTxvG__shutterstock_779433301.jpg?auto=format%2Ccompress&rect=0%2C0%2C1500%2C1001&w=3840&fit=max&q=100",
                Elevation = 5700,
                Runs = 101,
                Lifts = 28,
                TicketPrice = 340,
                MonthlySnowfall = new double[] {50,75,110,95,60,25,10,15,40,72,100,85},
                ReasonsToVisit = ["Unique setting with a volcanic setting and terrain", "Dog sledding and snowshoe tours", "Extended ski season"]
            },
            new Resort
            {
                Slug = "aspen-highlands",
                Name = "Aspen Highlands",
                Country = "United States",
                Region = "Colorado",
                ShortDescription = "Aspen Snowmass' 4 unique ski resorts, Aspen Mountain, Aspen Highlands, Buttermilk, and Snowmass provide travelers with a world-class mountain destination that caters to all levels of skiers and riders. From downtown Aspen, Colorado, guests to the Roaring Fork Valley can experience four mountains within minutes of one another. The wonderfully Victorian throwback architecture in downtown Aspen offers a glimpse into the Elk Mountains' storied mining-boom era.",
                HeroImageUrl = "https://images.prismic.io/ski-com/ZmkNY5m069VX1qBn_hero-img.png?auto=format%2Ccompress&fit=max&w=3840&q=100",
                Elevation = 1300,
                Runs = 10,
                Lifts = 5,
                TicketPrice = 200,
                MonthlySnowfall = new double[] {40,24,49,30,60,25,10,15,40,72,70,85},
                ReasonsToVisit = ["Friendly and low-key ski resort", "1,500 Acres of Diverse Terrain", "Natural terrain parks on a playful mountain"]
            },
            new Resort
            {
                Slug = "bariloche",
                Name = "Bariloche",
                Country = "Argentina",
                Region = "Patagonia",
                ShortDescription = "Located in Argentina's northern Patagonia region, San Carlos de Bariloche is a small city that serves as the gateway to the country’s renowned ski area, Cerro Catedral. Cerro Catedral is named for the Gothic cathedral-looking granite spirals that sit atop the mountain. As a South American heavy-hitter and the largest lift-accessed ski area in that part of the world, Cerro Catedral will meet, and exceed, every modern ski resort standard. The local resort recently underwent a several million-dollar facelift, on both chairlifts and infrastructure. Cerro Catedral is distinguished as one of the only South American ski resorts with a true base village.",
                HeroImageUrl = "https://images.prismic.io/ski-com/Z2SDQZbqstJ98sra_1188551153.png?auto=format%2Ccompress&fit=max&w=3840&q=100",
                Elevation = 3380,
                Runs = 50,
                Lifts = 9,
                TicketPrice = 190,
                MonthlySnowfall = new double[] {30,24,34,30,60,25,10,15,40,72,80,85},
                ReasonsToVisit = ["Epic beauty of Cerro Catedral", "Stunning location", "Over 3,000 acres of skiable terrain"]
            }
        };
    }
}

//https://api.skiapi.com/v1/resort/arapahoe-basin
//https://api.skiapi.com/v1/resort/aspen-highlands
//https://api.skiapi.com/v1/resort/aspen-mountain
//https://api.skiapi.com/v1/resort/attitash
//https://api.skiapi.com/v1/resort/beavercreek