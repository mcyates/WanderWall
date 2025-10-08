using System;

namespace Domain;

public class Wallpaper
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string Title { get; set; }
    public required string Author { get; set; }
    public required string AuthorId { get; set; }


    // image info
    public required string Url { get; set; }
    // alt text
    public required string Alt { get; set; }
}
