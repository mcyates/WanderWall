using System;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class WallpapersController(AppDbContext context) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Wallpaper>>> GetWallpapers()
    {
        return await context.Wallpapers.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Wallpaper>> GetWallpaperDetail(string id)
    {
        var wallpaper = await context.Wallpapers.FindAsync(id);
        if (wallpaper == null)
        {
            return NotFound();
        }
        else
        {
            return wallpaper;
        }
    }
}
