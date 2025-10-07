using System;
using Domain;

namespace Persistence;

public class DbInitializer
{
    public static async Task SeedData(AppDbContext context)
    {
        if (context.Wallpapers.Any())
        {
            return;
        }
        else
        {
            var wallpapers = new List<Wallpaper> {
            new Wallpaper {
                Title = "Fantasy painting",
                Author = "MatchaCloud",
                AuthorId = "1",
                Url = "https://w.wallhaven.cc/full/yq/wallhaven-yqxvgd.png",

            },
            new Wallpaper {
                Title = "Landscape",
                Author = "Lodbrok",
                AuthorId = "2",
                Url = "https://w.wallhaven.cc/full/qr/wallhaven-qr27rq.jpg",

            },
            new Wallpaper {
                Title = "Saint Dennis",
                Author = "tntiseverwhere",
                AuthorId = "3",
                Url = "https://w.wallhaven.cc/full/ly/wallhaven-ly8212.png",
            },
             new Wallpaper {
                Title = " Sports Car",
                Author = "thedrexter",
                AuthorId = "4",
                Url = "https://w.wallhaven.cc/full/6l/wallhaven-6ld2yl.jpg",

            },
             new Wallpaper {
                Title = "City Illustration",
                Author = "jrmnt",
                AuthorId = "5",
                Url = "https://w.wallhaven.cc/full/9o/wallhaven-9od8kw.jpg",

            },
             new Wallpaper {
                Title = "Fantasy Village",
                Author = "Richard Lay",
                AuthorId = "6",
                Url = "https://w.wallhaven.cc/full/5y/wallhaven-5ygkr1.jpg",
            },
             new Wallpaper {
                Title = "Ancient ruins",
                Author = "Ricardo Lima",
                AuthorId = "7",
                Url = "https://w.wallhaven.cc/full/1q/wallhaven-1qpxow.jpg",
            }
        };

            context.Wallpapers.AddRange(wallpapers);

            await context.SaveChangesAsync();
        }
    }
}
